import React from 'react';
import {
    StyledCross,
} from './Styled';

const Cross = ({ theme }) => (
    <StyledCross theme={theme}>
        <div className="cross__cross-wrapper">
            <span className="cross__cross" />
        </div>
    </StyledCross>
);

export default Cross;
