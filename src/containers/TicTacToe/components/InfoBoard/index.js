import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

const InfoBoard = ({ currentRole, isWin }) => {
    if (isWin.get('isGameFinished')) {
        // return (
        //     div 
        // );
    }
    return <div>InfoBoard</div>;
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
