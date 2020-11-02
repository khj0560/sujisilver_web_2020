import React from 'react';
import styled from 'styled-components';
import { imageBox,flexBox,flexColumn, flexSpaceBetween } from "../../Styles/SharedStyles";
import Title from "../Title";
import Button from "../Button";

///////// Main css /////////
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

const Slide = styled.div`
    background-color: #eeeeee;
    width: 100%;
    height: 400px;
`

const Main002 = () => {
    return(
        <MainBox>
            <Title 
                title1={{title: "수지 실버 주야간보호센터", color:"red"}}
                title2={{title: "와 함께하세요", color:"black"}}
                subTitle={["월요일 ~ 일요일까지 365일 다양한 인지, 재활, 일상생활 프로그램으로", 
                "하루하루 건강하고 행복한 일상을 함께하세요"]}
            />
            <Slide></Slide>
            <Button text="주야간보호센터 상담 문의" />
        </MainBox>
    )
}

export default Main002;