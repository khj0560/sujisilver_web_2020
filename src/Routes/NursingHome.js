import React from "react";
import styled from "styled-components";
import Tab from "../Hooks/Tab";
import ContentTitle from "../Components/Contents/ContentTitle";
import Schedule from "../Components/Contents/Schedule";
import { TopTitle, Div, TitleDiv, SmallP, TableDiv } from "../Components/Contents/ContentsShareSt";

const Title = styled.div`
    ${TopTitle}
`
const ThirdWrapper = styled.div`
    ${Div}
`
const NumberIcon = styled.div`
    ${TitleDiv}
`
const SmallText = styled.p`
    ${SmallP}
`
const TableArea = styled.div`
    ${TableDiv}
`
const SmallWidthTable = styled(TableArea)`
    width: 60%;
    margin: 0 auto;
    @media(max-width: 768px) {
        width: 100%;
    }
`
const TD = styled.td`
    color: ${props => props.theme.pointColor};
`
// ====================== style end ======================= //
const Second = () => {
    const times =["8:30 am","9:00 am","9:30 am","10:00 am","10:30 am","11:00 am","11:30 am","12:00 pm","12:30 pm","1:00 pm","1:30 pm","2:00 pm","2:30 pm","3:00 pm","3:30 pm","4:00 pm","4:30 pm","5:00 pm","5:30 pm","6:00 pm","6:30 pm","7:00 pm","7:30 pm", "8:00 pm", "8:30 pm","9:00 pm"]
    const height = {
        time: "4600px",
        schedule: "4300px"
    }
    const contents =[
        {
            grid:"2",
            color: "subPointColor",
            time:"오전 8:30 ~ 오전 9:30",
            title:"아침식사",
            type:"아침식사 시간입니다. 식사 후 투약 관리와 양치 지도가 진행됩니다."
        },
        {
            grid:"1",
            color: "subPointColor",
            time:"오전 9:30 ~ 오전 10:00",
            title:"건강 체크 시간",
            type:"매일 오전 혈압 측정과 체온 측정이 진행됩니다."
        },
        {
            grid:"1",
            color: "subPointColor",
            time:"오전 10:00 ~ 오전 10:30",
            title:"오전 간식 시간",
            type:"오전 프로그램 활동 전 간식이 제공됩니다."
        },
        {
            grid:"2",
            color: "tempGreen",
            time:"오전 10:30 ~ 오전 11:30",
            title:"오전 프로그램 / 물리치료",
            type:"오전 프로그램 시간입니다. 하루를 상쾌하게 시작하실 수 있도록 체조 프로그램 위주로 진행되며, 프로그램 참여 대신 물리치료를 요청하신 어르신들은 물리 치료실로 안내합니다."
        },
        {
            grid:"2",
            color: "subPointColor",
            time:"오전 11:30 ~ 오후 12:30",
            title:"점심식사",
            type:"점심식사 시간입니다. 식사 후 투약 관리와 양치 지도가 진행됩니다."
        },
        {
            grid:"2",
            color: "subPointColor",
            time:"오후 12:30 ~ 오후 1:30",
            title:"오침 및 휴식",
            type:"식사 후 휴게 시간입니다. 낮잠, 휴식, TV시청 등 자유롭게 활동하실 수 있습니다."
        },
        {
            grid:"2",
            color: "tempGreen",
            time:"오후 1:30 ~ 오후 2:30",
            title:"오후 프로그램 I / 물리치료",
            type:"오후 프로그램 시간입니다. 인지 기능 강화.유지를 위한 인지활동 프로그램 위주로 진행되며, 프로그램 참여 대신 물리치료를 요청하신 어르신들은 물리치료실로 안내합니다."
        },
        {
            grid:"1",
            color: "subPointColor",
            time:"오후 2:30 ~ 오후 3:00",
            title:"오후 간식 시간",
            type:"오후 두번째 프로그램 활동 전 간식이 제공됩니다."
        },
        {
            grid:"3",
            color: "tempGreen",
            time:"오후 3:00 ~ 오후 4:30",
            title:"오후 프로그램 II / 물리치료",
            type:"두번째 오후 프로그램 시간입니다. 미술, 생활체육, 요리 등 체험 프로그램 위주로 진행되며, 프로그램 참여 대신 물리치료를 요청하신 어르신들은 물리치료실로 안내합니다."
        },
        {
            grid:"2",
            color: "subPointColor",
            time:"오후 4:30 ~ 오후 5:30",
            title:"저녁식사",
            type:"저녁식사 시간입니다. 식사 후 투약 관리와 양치 지도가 진행됩니다."
        },
        {
            grid:"7",
            color: "tempBlue",
            time:"오후 5:30 ~ 오후 9:00",
            title:"자유시간 및 취침 준비",
            type:"센터의 프로그램이 끝나고 어르신께서 원하시는 활동을 지유롭게 할 수 있는 시간입니다."
        }
    ]
    return (
        <>
        <ContentTitle text="수지 실버 요양원 어르신들의 하루 일과입니다"/>
        <Schedule 
            times={times}
            contents={contents}
            height={height}
        />
        </>
    )
}
const Third =() => {
    return (
        <>
            <ThirdWrapper flex={true} padding={true}>
                <NumberIcon><h5>01</h5></NumberIcon>
                <h5>이용대상</h5>
            </ThirdWrapper>
            <ThirdWrapper>
                <p>
                1. 장기요양보험 1등급, 2등급을 받은 어르신<br />
                2. 장기요양등급 3~5등급 중 시설급여 이용이 허용된 어르신<br />
                3. 그 외 노인성 질환 등으로 장기요양이 필요한 어르신
                </p>
            </ThirdWrapper>
            <ThirdWrapper textColor={true}>
                <p>
                    <br />
                    수지 실버 주야간보호센터에서는 노인장기요양등급 신청 과정을 도와드리고 있습니다.<br />
                    전화로 문의주시면 친절하게 안내해 드리겠습니다.
                </p>
            </ThirdWrapper>
            <ThirdWrapper flex={true} padding={true}>
                <NumberIcon><h5>02</h5></NumberIcon>
                <h5>입소절차 / 구비서류 / 준비물</h5>
            </ThirdWrapper>
            <ThirdWrapper>
                <p>
                    1. 장기요양인정서<br />
                    2. 표준장기요양이용계획서<br />
                    3. 어르신 주민등록등본<br />
                    4. 건강진단서<br />
                    5. 약물복용시 의사처방전, 복용중인 약<br />
                    6. 간편 의복, 계절용 겉옷, 속옥, 양말 등<br />
                    7. 기타 어르신 애장품, 케어 보조용품 등<br />
                </p>
            </ThirdWrapper>
            <ThirdWrapper flex={true} padding={true}>
                <NumberIcon><h5>03</h5></NumberIcon>
                <h5>비용안내</h5>
            </ThirdWrapper>
            <ThirdWrapper>
                <p>수지실버요양원 이용금액</p>
                <SmallText>30일 이용 기준</SmallText>                
            </ThirdWrapper>
            <TableArea>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">등급</th>
                            <th>30일 기준 본인부담금</th>
                            <th>30일 기준 본인부담금</th>
                            <th>비급여</th>
                            <th>이용금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="3">1등급</th>
                            <th>일반(20%)</th>
                            <td>2,000,000</td>
                            <td>400,000</td>
                            <td>348,000</td>
                            <TD>748,000</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(12%)</th>
                            <td>2,000,000</td>
                            <td>400,000</td>
                            <td>348,000</td>
                            <TD>748,000</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <td>2,000,000</td>
                            <td>400,000</td>
                            <td>348,000</td>
                            <TD>748,000</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">2등급</th>
                            <th>일반(20%)</th>
                            <td>1,800,000</td>
                            <td>360,000</td>
                            <td>348,000</td>
                            <TD>708,000</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(12%)</th>
                            <td>1,800,000</td>
                            <td>360,000</td>
                            <td>348,000</td>
                            <TD>708,000</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(8%)</th>
                            <td>1,800,000</td>
                            <td>360,000</td>
                            <td>348,000</td>
                            <TD>708,000</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">3등급 ~ 5등급</th>
                            <th>일반(20%)</th>
                            <td>1,700,000</td>
                            <td>340,000</td>
                            <td>348,000</td>
                            <TD>688,000</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(12%)</th>
                            <td>1,700,000</td>
                            <td>340,000</td>
                            <td>348,000</td>
                            <TD>688,000</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(8%)</th>
                            <td>1,700,000</td>
                            <td>340,000</td>
                            <td>348,000</td>
                            <TD>688,000</TD>
                        </tr>
                    </tbody>
                </table>
            </TableArea>            
            <ThirdWrapper>
                <p>비급여 항목 상세</p>
            </ThirdWrapper>
            <SmallWidthTable>
                <table>
                    <thead>
                        <tr>
                            <th>구분</th>
                            <th colSpan="2">상세</th>
                            <th>금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>식재료비</td>
                            <td colSpan="2">
                                식사: 3,200원 * 3회<br />
                                간식: 1,000원 * 2회
                            </td>
                            <td>348,000</td>
                        </tr>
                    </tbody>    
                </table>
            </SmallWidthTable>
            <ThirdWrapper textColor={true}
            >
                <p>
                    다양한 요인으로 비용이 달라질 수 있습니다.<br />
                    정확한 비용은 센터로 문의주시면 친절하게 안내해 드리겠습니다.
                </p>
            </ThirdWrapper>
        </>
    )
}
const TabContents = () => {
    const content = [
        {
            tab: "서비스안내",
            content: "none"
        },
        {
            tab: "하루일과안내",
            content: <Second />
        },
        {
            tab: "입소안내",
            content: <Third />
        }
    ];
    return(
        <Tab content={content}/>
    )
}

const NursingHome = () =>{
    return (
        <>
        <Title><h3>수지 실버 요양원</h3></Title>
        <TabContents />
        </>
    )
}

export default NursingHome;