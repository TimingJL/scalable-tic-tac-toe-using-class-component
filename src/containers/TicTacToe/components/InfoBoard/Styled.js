import styled from 'styled-components';

const SIZE = 100;

export const StyledInfoBoard = styled.div`
    height: ${SIZE}px;
    background: #ffffff5e;
    margin: 10px 0px;
    text-shadow: 2px 0px white;
    font-weight: 900;
    .info-board__game-finished {
        display: grid;
        grid-template-columns: 3fr ${SIZE}px 1fr;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-align: center;
    }
    .info-board__game-finished-nowinner {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-align: center;
    }
    .info-board__player-info {
        display: grid;
        grid-template-columns: 4fr ${SIZE}px 3fr;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-align: center;
    }
    .info-board__player-info-label {
        font-size: 2em;
        letter-spacing: 5px;
    }
`;
