import React from 'react';
import styled from "styled-components";
import mbLogo from "../../images/header/mobileLogo.png";
import mbFoldIcon from "../../images/header/mobileFoldIcon.png";
import arrowLeft from "../../images/header/arrowL.png";
import arrowRight from "../../images/header/arrowR.png";
import {Link} from "react-router-dom";

const MBHeader = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${props => props.theme.whiteColor};
    border-bottom: 1px solid ${props => props.theme.bgColor};
    box-shadow: 0 0 0 #333, 0 1px 5px rgba(0,0,0,0.05);
    z-index: 10;
`
const TopArea = styled.div`
    width: 100%;
    height: 64px;
    position: relative;
    display: block;
`
const MBLogoArea = styled.div`
    position: relative;
    width: 130px;
    background: url(${mbLogo}) no-repeat 0 3px;
    background-position: center;
    background-size: 85%;
    max-width: 250px;
    height: 100%;
    margin: 0 auto;
    float: center;
`
const FoldIcon = styled.div`
    position: absolute;
    display: block;
    width: 28px;
    height: 100%;
    background: url(${mbFoldIcon}) no-repeat center;
    background-size: 80%;
    top: 8px;
    left: 20px;

    @media (min-width: 580px) {
        display: none;
    }   
`
const SubArea = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding:0;
    transition-duration:.1s;

    & > span {
        display:none;
        position:absolute;
        top:-2px;
        width:20px;
        height:100%;
        transition-duration:0;
    }
`
const MBList = styled.ul`
    overflow-y:hidden;
    overflow-x:auto;
    position:relative;
    width:100%;
    padding:7px 10px;
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
const MBItems = styled.li`
    display:inline-block;
    position:relative;
    min-width:58px;
    padding:0 16px;
    transition-duration:.3s;
    &:first-child {
        margin: 0 8px 0 0;
    }
    &:last-child {
        margin: 0 0 0 8px;
    }
`
const ArrowL = styled.span`
    left:0;
    background:#fff url(${arrowLeft}) no-repeat 80% center / 8px auto;
    transform:translateX(-100%);
`
const ArrowR = styled.span`
    right:0;
    background:#fff url(${arrowRight}) no-repeat 20% center / 8px auto;
    transform:translateX(100%);
`

function MobileHeader() {
    return(
        <MBHeader>
            <TopArea>
                <Link to="/"><MBLogoArea></MBLogoArea></Link>
                {/* <FoldIcon></FoldIcon> */}
            </TopArea>    
            <SubArea>
                <MBList>
                    <MBItems><Link to="/intro">센터소개</Link></MBItems>
                    <MBItems><Link to="/daynightcare">주야간보호 안내</Link></MBItems>
                    <MBItems><Link to="/nursinghome">요양원 안내</Link></MBItems>
                    <MBItems><Link to="/visitcare">방문요양 안내</Link></MBItems>
                    <MBItems><Link to="/counsel">상담신청</Link></MBItems>
                </MBList>
                <ArrowL />
                <ArrowR />
            </SubArea>
        </MBHeader>    
    )
}
export default MobileHeader;