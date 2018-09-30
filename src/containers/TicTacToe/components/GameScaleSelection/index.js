import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_NUM_OF_BLOCK } from 'containers/TicTacToe/constants';
import _ from 'lodash';

const GameScaleSelection = ({ handleOnSelect }) => {
    const options = _.range(DEFAULT_NUM_OF_BLOCK, 20 + 1);
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

GameScaleSelection.propTypes = {
    handleOnSelect: PropTypes.func,
};

GameScaleSelection.defaultProps = {
    handleOnSelect: () => { },
}

export default GameScaleSelection;
