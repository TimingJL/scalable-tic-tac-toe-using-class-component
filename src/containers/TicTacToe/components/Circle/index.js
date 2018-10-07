import React from 'react';
import {
    StyledCircle,
} from './Styled';

const Circle = ({ theme }) => (
    <StyledCircle theme={theme}>
        <div className="circle__wrapper">
            <span className="circle__circle" />
        </div>
    </StyledCircle>
);

export default Circle;
