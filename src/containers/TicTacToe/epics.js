import { Observable } from 'rxjs/Rx';
import { getWinner } from 'containers/TicTacToe/utils';
import {
    SET_GAME_SCALE,
    SET_WINNER_CONDITION,
    SET_BLOCK_VALUE,
} from './constants';
import {
    setInit,
    setWinner,
} from './actions';

const setGameScaleInitEpic = (action$, store) =>
    action$.ofType(SET_GAME_SCALE).switchMap(() => {
        return Observable.of(setInit());
    });

const setWinnerConditionInitEpic = (action$, store) =>
    action$.ofType(SET_WINNER_CONDITION).switchMap(() => {
        return Observable.of(setInit());
    });

const setIsWinEpic = (action$, store) =>
    action$.ofType(SET_BLOCK_VALUE).switchMap(() => {
        const tictactoeState = store.value.get('tictactoe');
        const blocks = tictactoeState.get('blocks');
        const winnerCondition = tictactoeState.get('winnerCondition');
        const gameScale = tictactoeState.get('gameScale');
        const isWin = getWinner(blocks, gameScale, winnerCondition);
        return Observable.of(setWinner(isWin));
    });

export default [
    setGameScaleInitEpic,
    setWinnerConditionInitEpic,
    setIsWinEpic,
];
