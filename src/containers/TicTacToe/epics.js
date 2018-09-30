import { Observable } from 'rxjs/Rx';
import { getWinner } from 'containers/TicTacToe/utils';
import {
    SET_GAME_SCALE,
    SET_BLOCK_VALUE,
} from './constants';
import {
    setInit,
} from './actions';

const setGameScaleInitEpic = (action$, store) =>
    action$.ofType(SET_GAME_SCALE).switchMap(() => {
        return Observable.of(setInit());
    });

const setIsWinEpic = (action$, store) =>
    action$.ofType(SET_BLOCK_VALUE).switchMap(() => {
        const tictactoeState = store.value.get('tictactoe');
        const blocks = tictactoeState.get('blocks');
        const winnerCondition = tictactoeState.get('winnerCondition');
        const isWin = getWinner(blocks, winnerCondition);
        return Observable.empty();
    });

export default [
    setGameScaleInitEpic,
    setIsWinEpic,
];
