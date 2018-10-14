import React from 'react';
import PropTypes from 'prop-types';
import Circle from 'containers/TicTacToe/components/Circle';
import Cross from 'containers/TicTacToe/components/Cross';
import {
    CIRCLE,
    CROSS,
    PLAYER_1,
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
                    <span className="info-board__label">獲勝者是</span>
                    <div className="info-board__content-wrapper">
                        {showContent(isWin.get('winner'))}
                    </div>
                </StyledInfoBoard>
            );
        }
        return (
            <StyledInfoBoard>
                <span className="info-board__label">平手</span>
            </StyledInfoBoard>
        );
    }
    return (
        <StyledInfoBoard>
            <span className="info-board__label">輪到</span>
            <div className="info-board__content-wrapper">
                {showContent(currentRole)}
            </div>
        </StyledInfoBoard>
    );
};

InfoBoard.propTypes = {
    currentRole: PropTypes.number,
    isWin: PropTypes.object,
};

InfoBoard.defaultProps = {
    currentRole: PLAYER_1,
    isWin: null,
};

export default InfoBoard;
