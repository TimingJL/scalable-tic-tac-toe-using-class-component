import styled from 'styled-components';

export const StyledTicTacToe = styled.div`
    width: 800px;
    height: 800px;
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
`;
