import { css } from '@emotion/react';

const reset = css`
    *{
        box-sizing: border-box;
    }
    body {
        letter-spacing: -0.03px;
        line-height: 1.5;
        margin:0;
        font-family: Noto sans KR;
    }
    input {
        all: unset;
    }
    a{
        text-decoration: none;
    }
    button {
        border: none;
        background-color: transparent;
    }
`;

export default reset;
