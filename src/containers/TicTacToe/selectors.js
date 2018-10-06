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

const makeSelectCurrentRole = () =>
    createSelector(selectTicTacToe, tictactoeState =>
        tictactoeState.get('currentRole'),
    );

const makeSelectIsWin = () =>
    createSelector(selectTicTacToe, tictactoeState =>
        tictactoeState.get('isWin'),
    );

export {
    makeSelectGameScale,
    makeSelectBlocks,
    makeSelectCurrentRole,
    makeSelectIsWin,
};
