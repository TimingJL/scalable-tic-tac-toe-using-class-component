import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { List, Map } from 'immutable';

import { StyledTicTacToe } from './Styled';
import {
    makeSelectGameScale,
    makeSelectBlocks,
    makeSelectCurrentRole,
    makeSelectIsWin,
} from './selectors';
import {
    setBlockValue,
    setInit,
    setGameScale,
    setWinnerCondition,
} from './actions';
import {
    CIRCLE,
    CROSS,
} from './constants';

import Circle from './components/Circle';
import Cross from './components/Cross';
import GameScaleSelection from './components/GameScaleSelection';
import WinnerConditionSelection from './components/WinnerConditionSelection';

const showContent = (value) => {
    if (value === CIRCLE) {
        return <Circle />
    } else if (value === CROSS) {
        return <Cross />
    }
    return null;
}

const blockStyle = (id, winCaseArrs) => {
    let isWinnerBlock = false;
    if (winCaseArrs.size) {
        winCaseArrs.forEach((winCaseArr) => {
            if (winCaseArr.includes(id)) {
                isWinnerBlock = true;
            }
        });
    }

    if (isWinnerBlock) {
        return 'tic-tac-toe__item tic-tac-toe__item-win';
    }
    return 'tic-tac-toe__item';
};

class TicTacToe extends React.Component {
    static propTypes = {
        gameScale: PropTypes.number,
        blocks: PropTypes.instanceOf(List),
        currentRole: PropTypes.number,
        isWin: PropTypes.instanceOf(Map),
        handleOnBlockClicked: PropTypes.func,
        handleOnRestartGame: PropTypes.func,
        handleOnSetGameScale: PropTypes.func,
        handleOnSetWinnerCondition: PropTypes.func,
    };
    static defaultProps = {
        gameScale: 3,
        blocks: List(),
        currentRole: 0,
        isWin: Map(),
        handleOnBlockClicked: () => { },
        handleOnRestartGame: () => { },
        handleOnSetGameScale: () => { },
        handleOnSetWinnerCondition: () => { },
    }
    handleOnClick = (event) => {
        const { blocks, currentRole, handleOnBlockClicked } = this.props;
        const id = event.currentTarget.getAttribute('data-id');
        if (!blocks.getIn([id, 'owner'])) {
            handleOnBlockClicked(id, currentRole);
        }
    }
    handleOnGameScaleSelected = (event) => {
        const { handleOnSetGameScale } = this.props;
        const gameScale = parseInt(event.target.value, 10);
        handleOnSetGameScale(gameScale);
    }
    handleOnWinnerConditionSelected = (event) => {
        const { handleOnSetWinnerCondition } = this.props;
        const winnerCondition = parseInt(event.target.value, 10);
        handleOnSetWinnerCondition(winnerCondition);
    }
    handleOnRestart = () => {
        const { handleOnRestartGame } = this.props;
        handleOnRestartGame();
    }

    render() {
        const {
            gameScale,
            blocks,
            isWin,
        } = this.props;

        return (
            <StyledTicTacToe gameScale={gameScale}>
                <div className="tic-tac-toe__blocks-wrapper">
                    {
                        blocks.map((block) => (
                            <div
                                key={block.get('id')}
                                data-id={block.get('id')}
                                className={blockStyle(block.get('id'), isWin.get('winCaseArr'))}
                                onClick={isWin.get('isGameFinished') ? () => { } : this.handleOnClick}
                            >
                                {showContent(block.get('owner'))}
                            </div>
                        ))
                    }
                </div>
                <button
                    className="tic-tac-toe__restart-btn"
                    onClick={this.handleOnRestart}
                >
                    Restart
                </button>
                <div className="tic-tac-toe__setting-group-wrapper">
                    <div className="tic-tac-toe__setting-group">
                        <span>Scale</span>
                        <GameScaleSelection handleOnSelect={this.handleOnGameScaleSelected} />
                    </div>
                    <div className="tic-tac-toe__setting-group">
                        <span>Condition</span>
                        <WinnerConditionSelection gameScale={gameScale} handleOnSelect={this.handleOnWinnerConditionSelected} />
                    </div>
                    <div className="tic-tac-toe__setting-group">
                        <span>Single Play</span>
                    </div>
                </div>
            </StyledTicTacToe>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    gameScale: makeSelectGameScale(),
    blocks: makeSelectBlocks(),
    currentRole: makeSelectCurrentRole(),
    isWin: makeSelectIsWin(),
});

const mapDispatchToProps = dispatch => ({
    handleOnBlockClicked: (id, currentRole) =>
        dispatch(setBlockValue(id, currentRole)),
    handleOnRestartGame: () => dispatch(setInit()),
    handleOnSetGameScale: (gameScale) => dispatch(setGameScale(gameScale)),
    handleOnSetWinnerCondition: (winnerCondition) => dispatch(setWinnerCondition(winnerCondition)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TicTacToe);
