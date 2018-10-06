import { fromJS } from 'immutable';
import { getWinner } from 'containers/TicTacToe/utils';
import {
    INIT,
    SET_BLOCK_VALUE,
    SET_GAME_SCALE,
    SET_WINNER_CONDITION,
    SET_WINNER,
    TOGGLE,
    PLAYER_1,
    DEFAULT_NUM_OF_BLOCK,
    DEFAULT_CONDITION,
    DEFAULT_WINNER_CONDITION,
} from './constants';

const defaultIsWin = {
    winner: '',
    winCaseArr: [],
    isGameFinished: false,
};

const initialState = fromJS({
    gameScale: DEFAULT_NUM_OF_BLOCK,
    winnerCondition: DEFAULT_WINNER_CONDITION,
    blocks: null,
    currentRole: PLAYER_1,
    isSinglePlayer: true,
    isWin: defaultIsWin,
});

function tictactoeReducer(state = initialState, action) {
    switch (action.type) {
        case INIT: {
            return setInit(state);
        }

        case SET_BLOCK_VALUE: {
            const { id, currentRole } = action.payload;
            return state
                .setIn(['blocks', id, 'owner'], currentRole)
                .set('currentRole', currentRole * TOGGLE);
        }

        case SET_GAME_SCALE: {
            return state
                .set('gameScale', action.payload);
        }

        case SET_WINNER_CONDITION: {
            const winnerCondition = action.payload;
            return state
                .set('winnerCondition', winnerCondition);
        }

        case SET_WINNER: {
            return state.set('isWin', fromJS(action.payload));
        }

        default:
            return setInit(initialState);
    }
}

const setInit = (state) => {
    const isSinglePlayer = state.get('isSinglePlayer');
    const gameScale = state.get('gameScale');
    const winnerCondition = state.get('winnerCondition') > gameScale ?
        DEFAULT_CONDITION : state.get('winnerCondition');
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
        .set('isWin', fromJS(getWinner(initBlocks, gameScale, winnerCondition)))
        .set('winnerCondition', winnerCondition);
}

export default tictactoeReducer;