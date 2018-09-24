import { Observable } from 'rxjs/Rx';
import {
    SET_GAME_SCALE,
} from './constants';
import {
    setInit,
} from './actions';

const setGameScaleInitEpic = (action$, store) =>
    action$.ofType(SET_GAME_SCALE).switchMap(() => {
        return Observable.of(setInit());
    });

export default [
    setGameScaleInitEpic
];
