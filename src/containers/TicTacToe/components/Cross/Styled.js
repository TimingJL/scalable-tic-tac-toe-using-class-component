import styled from 'styled-components';

const crossMixin = (scaleFactor, angle) => `
    content: '';
    border-radius: 10px;
    width: 110%;
    background: black;
    position: absolute;
    height: ${ 4.5 / scaleFactor }em;
    transform: rotate(${angle}deg);
`;

export const StyledCross = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .cross__cross-wrapper {
        height: 80%;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cross__cross {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &:before {
            ${(props) => {
                return crossMixin(props.theme.scaleFactor, 45);
            }}
        }
        &:after {
            ${(props) => {
                return crossMixin(props.theme.scaleFactor, -45);
            }}
        }
    }
`;
