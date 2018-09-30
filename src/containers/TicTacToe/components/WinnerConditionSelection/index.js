import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_WINNER_CONDITION } from 'containers/TicTacToe/constants';
import _ from 'lodash';

const WinnerConditionSelection = ({ gameScale, handleOnSelect }) => {
    const options = _.range(DEFAULT_WINNER_CONDITION, gameScale + 1);
    return (
        <select onChange={handleOnSelect}>
            {
                options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))
            }
        </select>
    )
}

WinnerConditionSelection.propTypes = {
    handleOnSelect: PropTypes.func,
};

WinnerConditionSelection.defaultProps = {
    handleOnSelect: () => { },
}

export default WinnerConditionSelection;
