import React from 'react';
import styled from "styled-components";
import logo from "../../images/header/logo.png"
import {isMobile} from "react-device-detect";
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    min-width: 1200px;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.whiteColor};
    z-index: 10;
    display: flex;
    justify-content: center;
    
    @media (max-width: 1240px) {
        min-width: 250px;
    }
 `

const HeaderBox = styled.div`
    width: 80%;
    max-width: 980px;
    @media (max-width: 1240px) {
        width: 100%; 
    }
    &:after {
        content:'';
        display:block;
        clear:both;
    }
 `

const LogoArea = styled.div`
    width:20%;
    background: url(${logo}) no-repeat 0 -3px;
    background-size: 95%;
    max-width: 250px;
    height: 100%;
    float: left;
    @media (max-width: 1240px) {
        width:195px;
        margin: 0 10px;
    }   
`

const NavArea = styled.div`
    width: 80%;  
    float: right;
    max-width: 690px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
 `

const List = styled.ul`
    list-style: none;
 `

 const ListItems = styled.li`
      width: 20%;
      text-align: center;
      font-family: 'NotoB';
      font-size: 18px;
      float: left;
`

function Header() {
    return(
        <HeaderWrapper>
            <HeaderBox>
                <Link to="/"><LogoArea ></LogoArea></Link>
                <NavArea>
                    <List>
                        <ListItems><Link to="/intro">센터소개</Link></ListItems>
                        <ListItems><Link to="/daynightcare">주야간보호 안내</Link></ListItems>
                        <ListItems><Link to="/nursinghome">요양원 안내</Link></ListItems>
                        <ListItems><Link to="/visitcare">방문요양 안내</Link></ListItems>
                        <ListItems><Link to="/counsel">상담신청</Link></ListItems>
                    </List>
                </NavArea>
            </HeaderBox>
        </HeaderWrapper>
    )
}

const renderContent = () => {
    const width = window.innerWidth;
    if(isMobile || width < 1024) {
        return <MobileHeader />
    }else {
        return <Header />
    }
}

export default renderContent;
