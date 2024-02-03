import styled, { css } from "styled-components";
import LetterList from "components/LetterList";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


// styled-components = 조건부 스타일링
// [사용법] 선언 변수명 = styled.바꿀태그명`CSS`
// 배경 이미지 임포트 하기
const StbackGroundImg = styled.header`
width: 100%;
height: 300px;
position: relative;
background-image: url("https://pbs.twimg.com/media/FUGGRguaAAIslVA?format=jpg&name=900x900");
background-size: cover;
background-position: center;
margin-bottom: 25px;
`


const StTitleName = styled.h1`
top: 90px;
position: absolute;
color: white;
left: 50%;
transform: translateX(-50%);
font-size: 40px;
font-weight: 600;
`

const MemberChoose = styled.div`
position: absolute;
bottom: 16px;
left: 50%;
transform: translateX(-50%);
display: flex;
justify-content: space-between;
border-radius: 10px;
list-style: none;
padding: 15px;
width: 500px;
background-color: black;
margin-bottom: 10px;
`

const StMemberBtn = styled.button`
font-size: 20px;
border: 1px solid black;
border-radius: 5px;
width: 100px;
padding: 5px;
text-align: center;
background-color: hsl(269, 100%, 26%);
// hover prop 안 줬는데 왜 작동되지?.. [나중에 조건부 스타일링]
&:hover {
    ${backgroundColor => backgroundColor.done && css`color: hsl(269, 100%, 26%);`} background-color: hsl(269.30232558139534, 100%, 16.862745098039216%);}
// 클릭해서 활성화돼 있을 때 스타일 주는 CSS: active
// 나중에 id 값 가져와서 클릭 이벤트랑 연결해야 하나? 암튼 나중에 하기. 중요한 건 아님
&.active {
    color: yellow;
    position: relative;
    top: 2px;}
color: white;
user-select: none;
cursor: pointer;
`;

const StMain = styled.main`
background-color: white;
`

const StFanLetterWriteBox = styled.div`
width: 500px;
height: 160px;
margin: auto;
padding: 20px;
background-color: rgb(235, 235, 235);
border-radius: 7px;
display: flex;
flex-direction: column;
margin-bottom: 25px;
`
const StReadFanLetter = styled.div`
width: 500px;
height: 300px;
margin: auto;
padding: 20px;
background-color: rgb(235, 235, 235);
border-radius: 7px;
`


// 컴포넌트 분리 및 추후 각각의 파일로 옮기는 작업 필요
// useState 작성
// 일회성 필터 해결하기 ⇒ 해결했음 (주말에 복습 필요)
function MainPage({ letters, setLetters }) {
    const [selectedMember, setSelectedMember] = useState("카리나");
    const [selectedData, setSelectedData] = useState("");
    const [test, setTest] = useState(false);

    // TODO: 1번째
    // (1) 최초 렌더링 시에만 호출됨(callback 함수가)
    useEffect(() => {
        console.log(1)
    }, [letters]);

    // TODO: 2번째
    //(1) 최초 렌더링 시 호출
    //(2) letters가 변경될 때
    useEffect(function () {
        console.log(2)
        // setLetters(~~~~); // 무한 렌더링
        // setTest(true);
        // setTest(prev => !prev);
        setTest((prev) => !prev);
    }, [letters]);

    useEffect(() => {
        console.log(test);
    }, [test])

    // TODO: 3번째
    // (1) 최초 렌더링 시 호출
    // (2) 그 이후 항상, 어떤 state가 변경되더라도 호출
    // (3) 사실상 없는 것과 동일
    // useEffect(() => {
    //     console.log(3)
    // })
    console.log(3)


    const filteredCard = (memberName) => {
        setSelectedMember(memberName);
    }

    const [nickname, setNickname] = useState('');
    // content 선언했던 자리
    const [content, setContent] = useState('');


    // 유효성 검사: 아무것도 작성 안 할 시
    const nickNameMessage = () => {
        if (nickname.length === 0 || content.length === 0) {
            alert("닉네임과 내용을 모두 입력해주세요.");
            return true;
        }
    };

    // 팬레터 등록 버튼 클릭
    const onClickAddBtn = () => {
        if (nickNameMessage()) {
            return
        }

        alert("추가됐습니다.")
        const newLetter = {
            avatar: "https://img1.daumcdn.net/thumb/R1280x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/1QCu/image/nBh652nTXVvnBX79kaAmagYfpUc.png",
            nickname: nickname,
            id: uuidv4(),
            createdAt: new Date().toISOString(),
            content: content,
            writedTo: selectedData,
            isDone: false,
        }
        setLetters([...letters, newLetter]);
        setNickname("");
        setContent("");
    }

    // <form /> 태그 사용해서 한꺼번에 data 관리!!! (창식 튜터님 to-do list 영상 보기)
    return (
        <div className="App">
            <StbackGroundImg>
                <audio src="https://drive.google.com/file/d/1hi-IP1Xv1wT4q2XxPxWIm9_hMc9ZvtW9/view?usp=sharing" controls="controls"></audio>
                <StTitleName className="titleName">aespa Fan Letter Collection</StTitleName>
                <MemberChoose>
                    <StMemberBtn onClick={() => filteredCard("카리나")}>카리나</StMemberBtn>
                    <StMemberBtn onClick={() => filteredCard("지젤")}>지젤</StMemberBtn>
                    <StMemberBtn onClick={() => filteredCard("윈터")}>윈터</StMemberBtn>
                    <StMemberBtn onClick={() => filteredCard("닝닝")}>닝닝</StMemberBtn>
                </MemberChoose>
            </StbackGroundImg>
            <StMain>
                <StFanLetterWriteBox>
                    닉네임: <input type="text" value={nickname} onChange={(event) => {
                        setNickname(event.target.value)
                    }} maxLength="8" />
                    내용: <input type="text" value={content} onChange={(event) => {
                        setContent(event.target.value)
                    }} maxLength="40" />
                    누구에게 작성하실 건가요? <select className="members" onChange={(event) => {
                        setSelectedData(event.target.value)
                    }} >
                        <option value="">멤버 선택</option>
                        <option value="카리나">카리나</option>
                        <option value="지젤">지젤</option>
                        <option value="윈터">윈터</option>
                        <option value="닝닝">닝닝</option>
                    </select>
                    <button onClick={(uuidv4) => onClickAddBtn(uuidv4)}>팬레터 등록</button>
                </StFanLetterWriteBox>
                <StReadFanLetter>
                    <div>
                        <LetterList letters={letters} selectedMember={selectedMember} />
                    </div>
                </StReadFanLetter>
            </StMain>
        </div>
    );
}


export default MainPage;