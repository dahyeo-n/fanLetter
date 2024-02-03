import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "pages/MainPage";
import DetailedPage from "pages/DetailedPage";
import { useState } from "react";
import dummy from "dummy.json";

const Router = () => {
    const [letters, setLetters] = useState(dummy);
    const [updateContent, setUpdateContent] = useState();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage letters={letters} setLetters={setLetters} />} />
                <Route path="/detail/:id" element={<DetailedPage letters={letters} setLetters={setLetters} updateContent={updateContent} setUpdateContent={setUpdateContent} />} />
                {/* 상태 관리 */}
            </Routes>
        </BrowserRouter>
    )
};

export default Router;


// 없던 일로 하기........
// 조건부 필터링을 썼어야지... 닦달 금지..
// 성격이 급했네..... 라우터 늦게 등장하기...
// 잘 모르겠으면...... 일단 해.. 이래가지고 했는데...
// 접근 잘못... 빠르게 다른 거 하기.......
// 컴포넌트 미리 분리 금지... 사이좋게 두기
// 명확한 니즈 있어야 분리.. 급하기 금지...
// 멋있지 말기. 선망 금지. 하지만 끝내기...
// 할 수 있다...! 휴..... 실기/이론..... 병행...
// 요구사항 있는 그대로 받아들이기........ 추측 금지....

// 기능적으로 접근하기. useState, useEffect 위주로 반복해서 코드 작성해보기
// 그 이후에 클로저나 고급함수 공부하기!
// [이번 주말] 스탠다드반 1월 30일 강의(리덕스 제외한 전체 내용)
// & 2월 2일 특강(리덕스 총 복습): 산책하면서 듣기