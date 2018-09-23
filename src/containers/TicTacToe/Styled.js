import styled from 'styled-components';
import {
    GAME_WRAPPER_SIZE,
} from './constants';

const crossMixin = (gameScale, angle) => `
    content: '';
    border-radius: 10px;
    width: 110%;
    background: black;
    position: absolute;
    height: ${ 4.5 / gameScale }em;
    transform: rotate(${angle}deg);
`;

export const StyledTicTacToe = styled.div`
    width: ${GAME_WRAPPER_SIZE}px;
    height: ${GAME_WRAPPER_SIZE}px;
    display: grid;
    ${(props) => {
        const gameScale = props.gameScale;
        return `
            grid-template-columns: repeat(${gameScale}, 1fr);
            grid-template-rows: repeat(${gameScale}, 1fr);
            grid-gap: 15px 15px;
        `;
    }}
    .tic-tac-toe__item {
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 100%;
        height: 100%;

        background: #ff99ab;
        cursor: pointer;
        &:hover {
            background: #ff4f6e;
        }
    }
    .tic-tac-toe__circle-wrapper {
        height: 80%;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        .circle {
            width: 100%;
            height: 100%;
            ${(props) => {
                const gameScale = props.gameScale;
                return `
                    border: ${ 4.5 / gameScale }em solid white;
                `;
            }}
            box-sizing: border-box;
            border-radius: 100%;
        }
    }
    .tic-tac-toe__cross-wrapper {
        height: 80%;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        .cross {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            &:before {
                ${(props) => {
                    const gameScale = props.gameScale;
                    return crossMixin(gameScale, 45);
                }}
            }
            &:after {
                ${(props) => {
                    const gameScale = props.gameScale;
                    return crossMixin(gameScale, -45);
                }}
            }
        }
    }
`;
