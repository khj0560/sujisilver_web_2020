import React from 'react';
import styled from 'styled-components';
import { imageBox,flexBox,flexColumn, flexSpaceBetween } from "../../Styles/SharedStyles";
import Title from "../Title";
import Text from "../Text";
import Button from "../Button";
import Icon from "../Icon";
import Main005Image from "../../images/main/main005_icon.png"

const MainBox = styled.div`
    background-color: ${(props) => props.color ? props.theme.bgColor : props.theme.whiteColor};
    ${flexBox};
    ${flexColumn};

    & {
        padding: 0 30px;

        @media(max-width: 600px) {
            padding: 0 20px;
        }

        @media(max-width: 300px) {
            padding: 0 15px;
        }
    }
`
const Wrapper = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`
const Main005Icon = styled(Icon)`
    margin: 0 auto;
`
const Main005Text = styled(Text)`
    text-align: center;
    margin: 20px 0;
`

const Main005 = () => {
    return(
        <MainBox color="bg">
            <Title
                title1={{title:"센터 위치 ", color:"red"}}
                title2={{title:"안내"}}
            />
            <Wrapper>
                <p>용인시 수지구 신봉2로 73-2 아트프라자 3층
                    <br />
                    신봉동엘지자이2차@ 정문 맞은편 / 엘지자이5차@ 후문 옆
                </p>
            </Wrapper>
            <Wrapper>
                <Main005Icon image = {Main005Image} width="50px" height="50px"/>
                <Main005Text 
                    titleColor = "red"
                    title = "전화문의"
                    text = {["031 - 272 - 0047", "010 - 7941 - 8430"]}
                />
            </Wrapper>
        </MainBox>
    )
}

export default Main005;