import styled from 'styled-components';
import {
    THEME_DARKEN,
} from 'containers/StyleConstants';

export const StyledToggleSwitchBtn = styled.div`
    .tic-tac-toe__toggle-switch-btn-container {
        position: relative;
        ${(props) => {
            return props.isSinglePlay ?
                `background: ${THEME_DARKEN};` : `background: #878787;`;
        }}
        width: 50px;
        height: 25px;
        border-radius: 20px;
        padding: 4px;
        cursor: pointer;
        border: 2px solid white;
        transition: all 0.15s ease-out;
    }
    .tic-tac-toe__toggle-switch-btn-circle {
        position: relative;
        width: 50%;
        height: 100%;
        background: white;
        top: 50%;
        transform: translateY(-50%) translateX(100%);
        border-radius: 100%;
        right: 0px;
        transition: all 0.15s ease-out;
    }
    .tic-tac-toe__toggle-switch-btn-circle-left {
        position: relative;
        width: 50%;
        height: 100%;
        background: white;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 100%;
        right: 0px;
        transition: all 0.15s ease-out;
    }
`;
