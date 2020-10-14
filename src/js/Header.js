import React from 'react';
import "../css/Header.css";

function Header() {
    return(
        <div className="header flex_wrapper">
            <div className="header_box clear">
                <div className="logo_area"></div>
                <div className="nav_area flex_column_wrapper">
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
    )
}

export default Header;