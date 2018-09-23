import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { StyledTicTacToe } from './Styled';
import {
    makeSelectGameScale,
    makeSelectBlocks,
} from './selectors';

class TicTacToe extends React.Component {
    static propTypes = {
        gameScale: PropTypes.number,
        blocks: PropTypes.object,
    };
    static defaultProps = {
        gameScale: 3,
        blocks: null,
    }

    render() {
        const {
            gameScale,
            blocks,
        } = this.props;
        console.log('blocks: ', blocks.size);
        return (
            <StyledTicTacToe gameScale={gameScale}>
                {
                    blocks.map((block) => (
                        <div
                            key={block.get('id')}
                            className="tic-tac-toe__item"
                        >
                            {block.get('id')}
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
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TicTacToe);
