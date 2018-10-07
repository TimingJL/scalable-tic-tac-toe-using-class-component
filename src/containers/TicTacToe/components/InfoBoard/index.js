import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import Circle from 'containers/TicTacToe/components/Circle';
import Cross from 'containers/TicTacToe/components/Cross';
import {
    CIRCLE,
    CROSS,
} from 'containers/TicTacToe/constants';
import {
    StyledInfoBoard,
} from './Styled';

const showContent = (value) => {
    const theme = {
        scaleFactor: 5,
    };
    if (value === CIRCLE) {
        return <Circle theme={theme} />
    } else if (value === CROSS) {
        return <Cross theme={theme} />
    }
    return null;
};

const InfoBoard = ({ currentRole, isWin }) => {
    if (isWin.get('isGameFinished')) {
        if (isWin.get('winner')) {
            return (
                <StyledInfoBoard>
                    <div className="info-board__game-finished">
                        <span className="info-board__player-info-label">獲勝者是</span>
                        {showContent(isWin.get('winner'))}
                    </div>
                </StyledInfoBoard>
            );
        }
        return (
            <StyledInfoBoard>
                <div className="info-board__game-finished-nowinner">
                    <span className="info-board__player-info-label">平手</span>
                </div>
            </StyledInfoBoard>
        );
    }
    return (
        <StyledInfoBoard>
            <div className="info-board__player-info">
                <span className="info-board__player-info-label">輪到</span>
                {showContent(currentRole)}
            </div>
        </StyledInfoBoard>
    );
}

InfoBoard.propTypes = {
    currentRole: PropTypes.number,
    isWin: PropTypes.instanceOf(Map),
};

InfoBoard.defaultProps = {
    currentRole: 1,
    isWin: Map(),
};

export default InfoBoard;
