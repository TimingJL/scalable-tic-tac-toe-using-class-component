import { createSelector } from 'reselect';

const selectTicTacToe = state => state.get('tictactoe');

const makeSelectGameScale = () =>
    createSelector(selectTicTacToe, tictactoeState =>
        tictactoeState.get('gameScale'),
    );

const makeSelectBlocks = () =>
    createSelector(selectTicTacToe, tictactoeState =>
        tictactoeState.get('blocks'),
    );

export {
    makeSelectGameScale,
    makeSelectBlocks,
};
