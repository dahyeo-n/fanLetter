import { createGlobalStyle } from 'styled-components';


// 글씨체 전역 스타일링 적용이 안 됨 => 중요한 건 아니니 월요일에 해결하기
// 최상단 컴포넌트에 import 해줘야 한다고 했던 것 같은데 그게 답인가?
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
}

body {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: content-box;
    margin: 0; /* Reset default margin */
}
`;

export default GlobalStyle;