import {
    INIT,
    SET_BLOCK_VALUE,
    SET_GAME_SCALE,
    SET_WINNER_CONDITION,
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

export const setWinnerCondition = (payload) => ({
    type: SET_WINNER_CONDITION,
    payload,
});
