import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { StyledTicTacToe } from './Styled';
import {
    makeSelectGameScale,
    makeSelectBlocks,
    makeSelectCurrentRole,
} from './selectors';
import {
    setBlockValue,
    setInit,
    setGameScale,
} from './actions';
import {
    CIRCLE,
    CROSS,
} from './constants';

import Circle from './components/Circle';
import Cross from './components/Cross';
import GameScaleSelection from './components/GameScaleSelection';

const showContent = (value) => {
    if (value === CIRCLE) {
        return <Circle />
    } else if (value === CROSS) {
        return <Cross />
    }
    return null;
}

class TicTacToe extends React.Component {
    static propTypes = {
        gameScale: PropTypes.number,
        blocks: PropTypes.object,
        currentRole: PropTypes.number,
        handleOnBlockClicked: PropTypes.func,
        handleOnRestartGame: PropTypes.func,
        handleOnSetGameScale: PropTypes.func,
    };
    static defaultProps = {
        gameScale: 3,
        blocks: null,
        currentRole: 0,
        handleOnBlockClicked: () => { },
        handleOnRestartGame: () => { },
        handleOnSetGameScale: () => { },
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
    handleOnRestart = () => {
        const { handleOnRestartGame } = this.props;
        handleOnRestartGame();
    }

    render() {
        const {
            gameScale,
            blocks,
        } = this.props;

        return (
            <StyledTicTacToe gameScale={gameScale}>
                <div className="tic-tac-toe__blocks-wrapper">
                    {
                        blocks.map((block) => (
                            <div
                                key={block.get('id')}
                                data-id={block.get('id')}
                                className="tic-tac-toe__item"
                                onClick={this.handleOnClick}
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
                <GameScaleSelection handleOnSelect={this.handleOnGameScaleSelected} />
            </StyledTicTacToe>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    gameScale: makeSelectGameScale(),
    blocks: makeSelectBlocks(),
    currentRole: makeSelectCurrentRole(),
});

const mapDispatchToProps = dispatch => ({
    handleOnBlockClicked: (id, currentRole) =>
        dispatch(setBlockValue(id, currentRole)),
    handleOnRestartGame: () => dispatch(setInit()),
    handleOnSetGameScale: (gameScale) => dispatch(setGameScale(gameScale)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TicTacToe);
