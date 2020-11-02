import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import NotoREot from '../font/NotoSansKR-Regular.eot';
import NotoREotIe from '../font/NotoSansKR-Regular.eot?#iefix';
import NotoRWoff2 from '../font/NotoSansKR-Regular.woff2';
import NotoRWoff from '../font/NotoSansKR-Regular.woff';
import NotoROtf from '../font/NotoSansKR-Regular.otf';

import NotoBEot from '../font/NotoSansKR-Bold.eot';
import NotoBEotIe from '../font/NotoSansKR-Bold.eot?#iefix';
import NotoBWoff2 from '../font/NotoSansKR-Bold.woff2';
import NotoBWoff from '../font/NotoSansKR-Bold.woff';
import NotoBOtf from '../font/NotoSansKR-Bold.otf';

import TREot from '../font/TmoneyRoundWindRegular.eot';
import TREotIe from '../font/TmoneyRoundWindRegular.eot?#iefix';
import TRWoff2 from '../font/TmoneyRoundWindRegular.woff2';
import TRWoff from '../font/TmoneyRoundWindRegular.woff';
import TROtf from '../font/TmoneyRoundWindRegular.otf';

import TBEot from '../font/TmoneyRoundWindExtraBold.eot';
import TBEotIe from '../font/TmoneyRoundWindExtraBold.eot?#iefix';
import TBWoff2 from '../font/TmoneyRoundWindExtraBold.woff2';
import TBWoff from '../font/TmoneyRoundWindExtraBold.woff';
import TBOtf from '../font/TmoneyRoundWindExtraBold.otf';

export default createGlobalStyle`

    ${reset};

    @font-face {
        font-family:'NotoR';
        font-weight: normal;
        font-style: normal;
        src: url(${NotoREot});
        src: url(${NotoREotIe}),
            url(${NotoRWoff2}),
            url(${NotoRWoff}),
            url(${NotoROtf}),
            local("※");
        }
        @font-face {
        font-family:'NotoB';
        font-weight: normal;
        font-style: normal;
        src: url(${NotoBEot});
        src: url(${NotoBEotIe}) format('embedded-opentype'),
            url(${NotoBWoff2}) format('woff2'),
            url(${NotoBWoff}) format('woff'),
            url(${NotoBOtf}) format('opentype'),
            local("※");
        }
        @font-face {
        font-family:'TR';
        font-weight: normal;
        font-style: normal;
        src: url(${TREot});
        src: url(${TREotIe}) format('embedded-opentype'),
            url(${TRWoff2}) format('woff2'),
            url(${TRWoff}) format('woff'),
            url(${TROtf}) format('opentype'),
            local("※");
        }
        @font-face {
        font-family:'TB';
        font-weight: normal;
        font-style: normal;
        src: url(${TBEot});
        src: url(${TBEotIe}) format('embedded-opentype'),
            url(${TBWoff2}) format('woff2'),
            url(${TBWoff}) format('woff'),
            url(${TBOtf}) format('opentype'),
            local("※");
        }

        *{
            /* width: 100%일 경우 패딩 돌출 방지를 위함 */
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: 'NotoR', dotum, '돋움', sans-serif;
            font-weight:normal;
            font-size:18px;
            color:#555;
            line-height:35px;
            background-color: #fff;
            height: 100%;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family:'NotoB';
            font-weight:normal;
            word-break: keep-all;
        }

        h1 {
            font-size: 40px;
            line-height: 48px;
            @media(max-width: 900px) {
                font-size: 30px;
            }
        }
        h2 {
            font-size: 36px;
            line-height: 48px;
            @media(max-width: 900px) {
                font-size: 28px;
            }
        }
        h3 {
            font-size: 30px;
            @media(max-width: 900px) {
                font-size: 22px;
            }
        }
        h4 {
            font-size: 22px;
            line-height: 38px;
            @media(max-width: 900px) {
                font-size: 20px;
            }
        }
        h5 {
            font-size: 20px;
            @media(max-width: 900px) {
                font-size: 20px;
            }
        }
        p {
            font-size: 18px;
            word-break: keep-all;
        }

        img, button {border:0 none;vertical-align:middle}
`;