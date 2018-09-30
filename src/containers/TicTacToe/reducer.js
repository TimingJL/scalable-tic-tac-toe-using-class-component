import { fromJS } from 'immutable';
import { getWinner } from 'containers/TicTacToe/utils';
import {
    INIT,
    SET_BLOCK_VALUE,
    SET_GAME_SCALE,
    SET_WINNER_CONDITION,
    TOGGLE,
    PLAYER_1,
    DEFAULT_NUM_OF_BLOCK,
    DEFAULT_WINNER_CONDITION,
} from './constants';

const initialState = fromJS({
    gameScale: DEFAULT_NUM_OF_BLOCK,
    winnerCondition: DEFAULT_WINNER_CONDITION,
    blocks: null,
    currentRole: PLAYER_1,
    isSinglePlayer: true,
    inWin: null,
});

function tictactoeReducer(state = initialState, action) {
    switch (action.type) {
        case INIT: {
            const isSinglePlayer = state.get('isSinglePlayer');
            const gameScale = state.get('gameScale');
            const winnerCondition = state.get('winnerCondition');
            const initBlocks = fromJS(
                Array.from(new Array(gameScale * gameScale), (value, index) => ({
                    id: index,
                    owner: value,
                })),
            );
            return state
                .set('isSinglePlayer', isSinglePlayer)
                .set('currentRole', PLAYER_1)
                .set('blocks', initBlocks)
                .set('inWin', getWinner(initBlocks, winnerCondition))
                .set('winnerCondition', winnerCondition);
        }

        case SET_BLOCK_VALUE: {
            const { id, currentRole } = action.payload;
            return state
                .setIn(['blocks', id, 'owner'], currentRole)
                .set('currentRole', currentRole * TOGGLE);
        }

        case SET_GAME_SCALE: {
            const gameScale = action.payload;
            return state
                    .set('gameScale', gameScale);
        }

        case SET_WINNER_CONDITION: {
            const winnerCondition = action.payload;
            return state
                    .set('winnerCondition', winnerCondition);
        }

        default:
            const isSinglePlayer = state.get('isSinglePlayer');
            const gameScale = state.get('gameScale');
            const winnerCondition = state.get('winnerCondition');
            const initBlocks = fromJS(
                Array.from(new Array(gameScale * gameScale), (value, index) => ({
                    id: index,
                    owner: value,
                })),
            );
            return initialState
                .set('isSinglePlayer', isSinglePlayer)
                .set('currentRole', PLAYER_1)
                .set('blocks', initBlocks)
                .set('inWin', getWinner(initBlocks, winnerCondition))
                .set('winnerCondition', winnerCondition);
    }
}

export default tictactoeReducer;