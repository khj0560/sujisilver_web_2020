import React from 'react';
import styled from 'styled-components';
import { imageBox,flexBox,flexColumn, flexSpaceBetween } from "../../Styles/SharedStyles";
import Main001 from "./Main001Mobile"
import Main002 from "./Main002"
import Main003 from "./Main003"
import Main004 from "./Main004"
import Main005 from "./Main005"

const MainBox = styled.div`
    background-color: ${(props) => props.color ? props.theme.bgColor : props.theme.whiteColor};
    ${flexBox};
    ${flexColumn};

    & {
        padding: 0 30px;

        @media(max-width: 600px) {
            padding: 50px 20px;
        }

        @media(max-width: 300px) {
            padding: 50px 15px;
        }
    }
`

const Wrapper = styled.div`
    padding-top: 113px;
`

const MobileMain = () => (
    <Wrapper>
        <Main001/>
        <Main002 />
        <Main003 />
        <Main004 />
        <Main005 />
    </Wrapper>
)

export default MobileMain;