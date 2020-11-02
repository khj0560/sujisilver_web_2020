import React from 'react';
import styled from "styled-components";
/* import { Link } from "react-router-dom"; */
import { flexBox, flexColumn, clear } from "../../Styles/SharedStyles"
import logo from "../../images/header/logo.png"

const HeaderWrapper = styled.header`
    ${flexBox}
    min-width: 1200px;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.whiteColor};
    z-index: 10;
    display: flex;
    justify-content: center;
    
    @media (max-width: 1200px) {
        min-width: 250px;
    }
 `

const HeaderBox = styled.div`
    width: 80%;
    max-width: 980px;
    ${clear}
    @media (max-width: 1240px) {
        width: 100%; 
    }
 `

const LogoArea = styled.div`
    width:20%;
    background: url(${logo}) no-repeat 0 -3px;
    background-size: 95%;
    max-width: 250px;
    height: 100%;
    float: left;
    @media (max-width: 1000px) {
        width:195px;
        margin: 0 10px;
    }   
`

const NavArea = styled.div`
      width: 80%;  
      float: right;
      max-width: 690px;
      ${flexBox}
      ${flexColumn}
      @media (max-width: 900px) {
        display: none;
    }         
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
                <LogoArea ></LogoArea>
                <NavArea>
                    <List>
                        <ListItems>센터소개</ListItems>
                        <ListItems>주야간보호 안내</ListItems>
                        <ListItems>요양원 안내</ListItems>
                        <ListItems>방문요양 안내</ListItems>
                        <ListItems>상담신청</ListItems>
                    </List>
                </NavArea>
            </HeaderBox>
        </HeaderWrapper>
    )
}

export default Header;
