import React from 'react';
import styled from 'styled-components';
import { imageBox,flexBox,flexColumn, flexSpaceBetween } from "../../Styles/SharedStyles";
import mainImg from "../../images/main/main_img.jpg";
import arrow_bottom from "../../images/main/arrow_bottom.png";
import main001Btn01 from "../../images/main/main001_btn_01.png";
import main001Btn02 from "../../images/main/main001_btn_02.png";
import main001Btn03 from "../../images/main/main001_btn_03.png";

const Main001Box = styled.div`
    background: url(${mainImg});
    ${imageBox};
    ${flexBox};
    ${flexColumn};
`
const MainTitleArea = styled.div`
    ${flexBox};
    ${flexColumn};
    line-height: 50px;
    text-align: center;
    color: ${props => props.theme.whiteColor};
    text-shadow: 0 0 0 #333, 0 5px 10px rgba(0,0,0,0.3);
    height: 35%;

    & > h3 {
        font-family: 'TR';
    }

    & h1 {
        font-family: 'TB';
        font-size: ${props => props.theme.titleSize01};
        display: inline;
    }

    & > h3, > h1 {
        padding: 0 50px;
    }
`
const MainBtnArea = styled.div`
    ${flexBox};
    width: 80%;
    max-width: 1800px;
    height: 50%;
    margin: 0 auto;
    & > div {
        margin: 0 10px;

        @media (max-width: 1300px) {
        width: 25%;
        }
    } 
    
    @media (max-width: 1200px) {
        width: 100%;
    }    
`
const ArrowBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: 50px;
    text-align: center;
    z-index: 100;

    & > a {
        display: inline-block;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 1px solid #fff;
        background: url(${arrow_bottom}) no-repeat 50% 0;
        color: transparent;
    }    
`
const MainBtn = styled.div`
    position: relative;
    width: 22%;
    border-radius: 10px;

    & div:first-child {
        position: absolute;
        width: 100%;
        top: 5%;
        left: 50%;
        transform: translate(-50%,0);
        text-align: center;
        z-index: 10;
        @media(max-width: 900px) {
            top: 2%
        }
    }

    & h3 {
        font-family: 'TB';
        font-size: ${props => props.theme.titleSize03};
        text-align: center;
        border-radius: 10px 10px 0 0;

        @media(max-width: 900px) {
            font-size: ${props => props.theme.titleSize04};
        }
    }

    & button {
        width: 100%;
        color: ${props => props.theme.whiteColor};
        background-color: ${props => props.theme.pointColor};
        padding: 20px 0;
        border-radius: 0 0 10px 10px;
    }

`
const BtnImg = styled.div`
    width: 100%;
    padding-top: 80%;
    position: relative;
    text-align: center;
    border-radius: 10px 10px 0 0;
    background: url(${(props) => props.image});
    ${imageBox};
`

const MainBtnComp = ({title,image}) => (
    <MainBtn>
        <div>
        <h3>{title}</h3>
        </div>
        <BtnImg image={image}/>
        <button><h4>센터 소개 바로가기</h4></button>
    </MainBtn>
)

const Main001 = () => {
    return (                
        <Main001Box>
            <MainTitleArea>
                <h3>어르신에게 재활의 의지를, 가족은 삶의 여유를</h3>
                <h1>수지 실버 주야간보호센터 . 요양원</h1>
            </MainTitleArea>
            <MainBtnArea>
                <MainBtnComp 
                    title="주야간보호센터"
                    image={main001Btn01}
                />
                <MainBtnComp 
                    title="요양원"
                    image={main001Btn02}
                />
                <MainBtnComp 
                    title="방문요양"
                    image={main001Btn03}
                />
            </MainBtnArea>   
            <ArrowBottom><a href="#"></a></ArrowBottom>
        </Main001Box>
    )
}

export default Main001;