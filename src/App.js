import React from 'react';
import "./css/App.css";

function App() {
  return (
    <div className="App">
      
      <div class="header flex_wrapper">
        <div class="header_box clear">
          <div class="logo_area"></div>
          <div class="nav_area flex_column_wrapper">
            <ul>
              <li>센터소개</li>
              <li>주야간보호 안내</li>
              <li>요양원 안내</li>
              <li>방문요양 안내</li>
              <li>상담신청</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="main_contents">
        <div class="main_001 flex_column_wrapper">
          <div class="text_area flex_column_wrapper">
              <p>어르신에게 재활의 의지를, 가족은 삶의 여유를</p>
              <span class="bold_text">수지 실버 주야간보호센터 <span class="dot">.</span> 요양원</span>
          </div>
          <div class="btn_area flex_wrapper">
            <div class="btn_box flex_wrapper">
              <div class="main_btn">
                <div class="btn_01"><p>주야간보호센터</p></div>
                <button>센터 소개 바로가기</button>
              </div>
              <div class="main_btn">
              <div class="btn_02"><p>요양원</p></div>
                <button>센터 소개 바로가기</button>
              </div>
              <div class="main_btn">
                <div class="btn_03"><p>방문요양</p></div>
                <button>센터 소개 바로가기</button>
              </div>
            </div>  
          </div>
          <div class="arrow_bottom"><a href="#"></a></div>
        </div>
        
        

      </div>
      
    </div>
  );
}

export default App;
