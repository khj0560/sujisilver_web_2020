import React from 'react';
import styled from 'styled-components';
import { imageBox,flexBox,flexColumn, flexSpaceBetween } from "../../Styles/SharedStyles";
import Title from "../Title";
import Text from "../Text";
import Button from "../Button";
import Icon from "../Icon";
import main003Icon01 from "../../images/main/main003_icon_01.png";
import main003Icon02 from "../../images/main/main003_icon_02.png";

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
const FlexBox = styled.div`
    ${flexBox};
    width: ${props => props.width || "100%" };
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "center"};
`
const ItemBox = styled.div`
    ${flexBox};
    margin: 20px 0;

    @media(max-width: 900px) {
        flex-direction: column;
        width: 600px;
        margin: 20px auto;
    }

    @media(max-width: 600px) {
        width: 100%;
        padding: 0 30px;
    }
`

const Main003Icon = styled(Icon)`
    @media(max-width: 900px) {
        margin: 0 auto;
    }

    @media(max-width: 600px) {
        width: 150px;
        height: 150px;
    }
`
const Main003Text = styled(Text)`
    text-align: left;
    width: 370px;
    padding: 0 30px;
    & h5 {
        color : ${props => props.theme.pointColor};
    }
    @media(max-width: 900px) {
        width: 100%;
        margin: 0 auto;
        padding: 20px 0;
        text-align: center;
    }
`

const Main003 = () => {
    return(
        <MainBox color="bg">
                <Title 
                    title1={{title: "24시간 간병은 ", color:"black"}}
                    title2={{title: "수지 실버 요양원", color:"red"}}
                    subTitle={["노인성 질환으로 거동이나 일상생활 도움이 필요하신 어르신께",
                    "24시간 간병과 케어를 해드립니다"]}
                />
                <FlexBox direction="column">
                    <ItemBox>
                        <Main003Icon image={main003Icon01}/>
                        <Main003Text
                            title = "매일 행복한 치유 프로그램"
                            text = {["매일 다양한 프로그램 제공을 통해 적절한 자극과 훈련으로 남아있는 인지 기능을 최대한 유지 합니다."]}
                        />
                    </ItemBox>    
                    <ItemBox>
                        <Main003Icon image={main003Icon02}/>
                        <Main003Text 
                            title = "촉탁의, 방문간호 시행 중"
                            text = {["2주에 한 번 의사가 방문하여 어르신들의  건강 상태를 꼼꼼히 체크합니다. 또한 필요시 간호사 선생님이 수시로 방문합니다."]}
                        />
                    </ItemBox>  
                </FlexBox>
                <Button text="요양원 상담 문의" />
        </MainBox>
    ) 
}

export default Main003;