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
} from './actions';

class TicTacToe extends React.Component {
    static propTypes = {
        gameScale: PropTypes.number,
        blocks: PropTypes.object,
        currentRole: PropTypes.number,
        handleOnBlockClicked: PropTypes.func,
    };
    static defaultProps = {
        gameScale: 3,
        blocks: null,
        currentRole: 0,
        handleOnBlockClicked: () => { },
    }
    handleOnClick = (event) => {
        const { blocks, currentRole, handleOnBlockClicked } = this.props;
        const id = event.currentTarget.getAttribute('data-id');
        if (!blocks.getIn([id, 'owner'])) {
            handleOnBlockClicked(id, currentRole);
        }
    }

    render() {
        const {
            gameScale,
            blocks,
        } = this.props;

        return (
            <StyledTicTacToe gameScale={gameScale}>
                {
                    blocks.map((block) => (
                        <div
                            key={block.get('id')}
                            data-id={block.get('id')}
                            className="tic-tac-toe__item"
                            onClick={this.handleOnClick}
                        >
                            {block.get('owner')}
                        </div>
                    ))
                }
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
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TicTacToe);
