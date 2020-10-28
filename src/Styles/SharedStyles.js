import { css } from "styled-components";

export const flexBox = css`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const flexColumn = css`
    flex-direction: column;
    height: 100%;
`;

export const flexSpaceBetween = css`
    justify-content: space-between;
`;

export const imageBox = css`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

export const clear = css`
    content:'';
    display:block;
    clear:both;
`;