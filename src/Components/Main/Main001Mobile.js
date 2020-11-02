import React from 'react';
import styled from 'styled-components';
import { imageBox,flexBox,flexColumn, flexSpaceBetween } from "../../Styles/SharedStyles";
import mainImg from "../../images/main/main_img.jpg";
import main001Btn01 from "../../images/main/main001_btn_01.png";
import main001Btn02 from "../../images/main/main001_btn_02.png";
import main001Btn03 from "../../images/main/main001_btn_03.png";

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
const BtnArea = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 0;
    transition-duration:.1s;
` 
const BtnList = styled.ul`
    overflow-y:hidden;
    overflow-x:auto;
    position:relative;
    width:100%;
    padding:0;
    text-align:center;
    vertical-align:top;
    white-space:nowrap;
    -webkit-overflow-scrolling:touch;

    &::-webkit-scrollbar {
        display:none;
    }
    &::-o-scrollbar {
        display:none;
    }
    &::-ms-scrollbar {
        display:none;
    }
`
const BtnItems = styled.li`
    display:inline-block;
    position:relative;
    min-width:58px;
    margin:0 8px;
    transition-duration:.3s;
    background-color: orange;
    width: 200px;
    height: 200px;

    &:first-child {
        margin: 0 8px 0 0;
    }
    &:last-child {
        margin: 0 0 0 8px;
    }
`

const Main001Mobile = () => (
    <MainBox>
        <BtnArea>
            <BtnList>
                <BtnItems></BtnItems>
                <BtnItems></BtnItems>
                <BtnItems></BtnItems>
            </BtnList>
        </BtnArea>
    </MainBox>
)

export default Main001Mobile;