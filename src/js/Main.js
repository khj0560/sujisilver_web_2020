import React from 'react';
//import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import "../css/Main.css";
const Main = () => (
    <ReactFullpage
      //fullpage options
      licenseKey = {'9925D61B-12FD4194-8F8304F5-4C55C4CA'}
      scrollingSpeed = {1000} /* Options here */
      /*scrollHorizontally = {true}   
      scrollHorizontallyKey = {'9925D61B-12FD4194-8F8304F5-4C55C4CA'}*/
      scrollOverflow = {true}
      paddingTop = "70px"

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
                <div className="main_001 flex_column_wrapper">
                    <div className="">
                        <div className="main_title_area flex_column_wrapper">
                            <p>어르신에게 재활의 의지를, 가족은 삶의 여유를</p>
                            <span className="bold_text">수지 실버 주야간보호센터 <span className="dot">.</span> 요양원</span>
                        </div>
                        <div className="main_btn_area flex_wrapper">
                            <div className="btn_box flex_wrapper">
                                <div className="main_btn">
                                    <div className="btn_01"><p>주야간보호센터</p></div>
                                    <button>센터 소개 바로가기</button>
                                </div>
                                <div className="main_btn">
                                    <div className="btn_02"><p>요양원</p></div>
                                    <button>센터 소개 바로가기</button>
                                </div>
                                <div className="main_btn">
                                    <div className="btn_03"><p>방문요양</p></div>
                                    <button>센터 소개 바로가기</button>
                                </div>
                            </div>  
                        </div>    
                    </div>
                    <div className="arrow_bottom"><a href="#"></a></div>
                </div>
            </div>
            <div className="section">
                <div className="main_002 flex_column_wrapper">
                    <div className="title_area">
                        <h1 className="color_point_01">수지 실버 주야간보호센터</h1>
                        <h1 className="color_gray_01">와 함께하세요</h1>
                        <p>
                        월요일 ~ 일요일까지 365일 다양한 인지, 재활, 일상생활 프로그램으로 <br />
                        하루하루 건강하고 행복한 일상을 함께하세요    
                        </p>
                    </div>
                    <div className="slider_area"></div>
                    <div className="btn_area"><button className="btn btn_type1">주야간보호센터 상담 문의</button></div>
                    {/* <div className="arrow_bottom"><a href="#"></a></div> */}
                </div>
            </div>
            <div className="section">
                <div className="main_003 flex_column_wrapper">
                    <div className="title_area">
                        <h1 className="color_gray_01">24시간 간병은 </h1>
                        <h1 className="color_point_01">수지 실버 요양원</h1>
                        <p>
                        노인성 질환으로 거동이나 일상생활 도움이 필요하신 어르신께 <br />
                        24시간 간병과 케어를 해드립니다.  
                        </p>
                    </div>
                    <div className="item_area flex_column_wrapper">
                        <div className="item flex_wrapper">
                            <div className="first"></div>
                            <div className="flex_column_wrapper">
                                <h5>매일 행복한 치유 프로그램</h5>
                                <p>매일 다양한 프로그램 제공을 통해 적절한 자극과 훈련으로 남아있는 인지 기능을 최대한 유지 합니다.</p>
                            </div>
                        </div>    
                        <div className="item flex_wrapper">
                            <div className="second"></div>
                            <div className="flex_column_wrapper">
                                <h5>촉탁의 <span className="dot">.</span> 방문간호 시행 중</h5>
                                <p>2주에 한 번 의사가 방문하여 어르신들의  건강 상태를 꼼꼼히 체크합니다. 또한 필요시 간호사 선생님이 수시로 방문합니다.</p>
                            </div>
                        </div>  
                    </div>
                    <div className="btn_area"><button className="btn btn_type1">요양원 상담 문의</button></div>
                </div>
            </div>
            <div className="section">
                <div className="main_004 flex_column_wrapper">
                    <div className="title_area">
                        <h1 className="color_gray_01">일상 생활 도움은 </h1>
                        <h1 className="color_point_01">수지 실버 방문요양센터</h1>
                        <p>
                        노인성 질환으로 거동이나 일상생활 도움이 필요하신 어르신<br />
                        장기요양등급 1등급 ~ 5등급을 받은 어르신
                        </p>
                    </div>
                    <div className="item_area flex_column_wrapper">
                        <div className="flex_wrapper space">
                            <div className="item">
                                <div className="first"></div>
                                <div>
                                    <h5>신체활동 지원 서비스</h5>
                                    <p>재활운동보조, 목욕, 병원 동행, <br />식사도움, 산책, 운동 동행</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="second"></div>
                                <div>
                                    <h5>일상생활 지원 서비스</h5>
                                    <p>식사준비, 취사도움, 청소 및 세탁 등</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex_wrapper space">
                            <div className="item">
                                <div className="third"></div>
                                <div>
                                    <h5>개인활동 지원 서비스</h5>
                                    <p>외출시 동행, 장보기, 약 타오기</p>
                                </div>
                            </div>
                            <div className="item">
                               <div className="forth"></div>
                               <div>
                                    <h5>정신 지원 서비스</h5>
                                    <p>말벗, 격려 및 위로, 생활 상담</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn_area"><button className="btn btn_type1">방문요양 상담 문의</button></div>
                </div>
            </div>
            <div className="section">
                <div className="main_005 flex_column_wrapper">
                    <div className="title_area">
                        <h1 className="color_point_01">센터 위치 </h1>
                        <h1 className="color_gray_01">안내</h1>
                    </div>
                    <div className="map_area">
                        <div>map</div>
                        <p>용인시 수지구 신봉2로 73-2 아트프라자 3층
                            <br />
                            신봉동엘지자이2차@ 정문 맞은편 / 엘지자이5차@ 후문 옆
                        </p>
                    </div>
                    <div className="call_area">
                        <div></div>
                        <div>
                            <h5>전화문의</h5>
                            <p>031 - 272 - 0047</p>
                            <p>010 - 7941 - 8430</p>
                        </div>
                    </div>
                </div>
            </div>                        
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

export default Main;

