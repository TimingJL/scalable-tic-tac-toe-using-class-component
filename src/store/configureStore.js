import { fromJS } from 'immutable';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import createReducer from 'store/reducers';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import initialEpics from './epics';

export default function configureStore(initialState = {}, history) {
    // Create root epic that accepts async injection
    const epic$ = new BehaviorSubject(combineEpics(...initialEpics));
    const rootEpic = (action$, store, deps) =>
        epic$.mergeMap(epic =>
            epic(action$, store, deps).catch((err, source$) => {
                setTimeout(() => {
                    throw err;
                }, 0);
                return source$;
            }),
        );
    const epicMiddleware = createEpicMiddleware();

    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [
        epicMiddleware,
    ];

    const enhancers = [applyMiddleware(...middlewares)];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
            typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
                // Prevent recomputing reducers for `replaceReducer`
                shouldHotReload: false,
            })
            : compose;

    const store = createStore(
        createReducer(),
        fromJS(initialState),
        composeEnhancers(...enhancers)
    );

    epicMiddleware.run(rootEpic);

    return store;
}
