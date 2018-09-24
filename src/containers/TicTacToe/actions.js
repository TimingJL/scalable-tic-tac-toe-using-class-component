import {
    INIT,
    SET_BLOCK_VALUE,
    SET_GAME_SCALE,
} from './constants';

export const setInit = () => ({
    type: INIT,
});

export const setBlockValue = (id, currentRole) => ({
    type: SET_BLOCK_VALUE,
    payload: {
        id,
        currentRole,
    },
});

export const setGameScale = (payload) => ({
    type: SET_GAME_SCALE,
    payload,
});