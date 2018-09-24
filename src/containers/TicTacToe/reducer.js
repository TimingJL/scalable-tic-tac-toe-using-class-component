import { fromJS } from 'immutable';
import {
    INIT,
    SET_BLOCK_VALUE,
    SET_GAME_SCALE,
    TOGGLE,
    PLAYER_1,
} from './constants';

const DEFAULT_NUM_OF_BLOCK = 3;

const initialState = fromJS({
    gameScale: DEFAULT_NUM_OF_BLOCK,
    blocks: null,
    currentRole: PLAYER_1,
    isSinglePlayer: true,
});

function tictactoeReducer(state = initialState, action) {
    switch (action.type) {
        case INIT: {
            const isSinglePlayer = state.get('isSinglePlayer');
            const gameScale = state.get('gameScale');
            return state
                .set('isSinglePlayer', isSinglePlayer)
                .set('blocks', fromJS(
                    Array.from(new Array(gameScale * gameScale), (value, index) => ({
                        id: index,
                        owner: value,
                    })),
                ));
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

        default:
            const isSinglePlayer = state.get('isSinglePlayer');
            const gameScale = state.get('gameScale');
            return initialState
                .set('isSinglePlayer', isSinglePlayer)
                .set('blocks', fromJS(
                    Array.from(new Array(gameScale * gameScale), (value, index) => ({
                        id: index,
                        owner: value,
                    })),
                ));
    }
}

export default tictactoeReducer;