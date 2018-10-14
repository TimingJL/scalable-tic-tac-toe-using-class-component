import { Observable } from 'rxjs/Rx';
import { getWinner, getBlockId } from 'containers/TicTacToe/utils';
import {
    SET_BLOCK_VALUE,
    SET_WINNER,
    SET_IS_SINGLE_PLAYER,
    CROSS,
} from './constants';
import {
    setWinner,
    setBlockValue,
} from './actions';

const setIsWinEpic = (action$, store) =>
    action$.ofType(SET_BLOCK_VALUE).switchMap(() => {
        const tictactoeState = store.value.get('tictactoe');
        const blocks = tictactoeState.get('blocks');
        const winnerCondition = tictactoeState.get('winnerCondition');
        const gameScale = tictactoeState.get('gameScale');
        const isWin = getWinner(blocks, gameScale, winnerCondition);
        return Observable.of(setWinner(isWin));
    });

const setSinglePlayEpic = (action$, store) =>
    action$
        .ofType(SET_WINNER)
        .debounceTime(300)  // 讓電腦不要馬上下棋，停頓一下，讓玩家覺得電腦好像在思考
        .switchMap(() => {
            const tictactoeState = store.value.get('tictactoe');
            if (
                tictactoeState.get('isSinglePlayer') &&                 // 目前模式是否為電腦下棋
                tictactoeState.get('currentRole') === CROSS &&          // 是否輪到電腦的角色，也就是叉叉
                !tictactoeState.getIn(['isWin', 'isGameFinished'])      // 目前遊戲是否結束？若結束就無法再下棋
            ) {
                const id = getBlockId(tictactoeState.get('blocks'));    // 由電腦來挑選出一個格子
                const currentRole = CROSS;
                return Observable.of(setBlockValue(id, currentRole));   // 發送action到reducer，把狀態記錄下來
            }
            return Observable.empty();
        });

const setOnPlayModeToggle = (action$, store) =>
    action$.ofType(SET_IS_SINGLE_PLAYER).switchMap(() => {
        const tictactoeState = store.value.get('tictactoe');
        const isWin = getWinner(tictactoeState.get('blocks'));
        return Observable.of(setWinner(isWin));
    });

export default [
    setIsWinEpic,
    setSinglePlayEpic,
    setOnPlayModeToggle,
];
