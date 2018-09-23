import { fromJS } from 'immutable';
import {
    INIT,
} from './constants';

const DEFAULT_NUM_OF_BLOCK = 3;

const initialState = fromJS({
    gameScale: DEFAULT_NUM_OF_BLOCK,
    blocks: null,
    isSinglePlayer: true,
});

function tictactoeReducer(state = initialState, action) {
    console.log('reducer');
    switch (action.type) {
        case INIT: {
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