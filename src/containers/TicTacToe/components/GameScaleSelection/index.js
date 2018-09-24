import React from 'react';
import PropTypes from 'prop-types';

const GameScaleSelection = ({ handleOnSelect }) => {
    const options = [...Array(18).keys()].map((item) => item + 3);
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
