import { combineReducers } from 'redux-immutable';
import tictactoeReducer from 'containers/TicTacToe/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(injectedReducers) {
    return combineReducers({
        tictactoe: tictactoeReducer,
    });
}