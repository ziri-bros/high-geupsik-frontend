// GlobalStyle 적용하는 코드

import { css } from '@emotion/react';

const reset = css`
    *{
        box-sizing: border-box;
    }
    body {
        letter-spacing: -0.03px;
        line-height: 1.5;
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
