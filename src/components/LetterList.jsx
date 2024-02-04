import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StEachLetter = styled.div`
width: 500px;
height: 80px;
background-color: hsl(269, 100%, 26%);
border-radius: 7px;
border: 2px solid white;
color: rgb(218, 218, 218);
font-size: large;
font-weight: 100;
word-break: break-all;
`

export default function LetterList({ selectedMember, wantToEdit }) {
    const { fanLetters } = useSelector(state => state.counter);

    const navigate = useNavigate();
    // 아래에서 나오는 id는 변수명이라 무엇으로 하든 상관없음
    // 조건은 밑에서 사용하는 대상과 일치하게 맞춰주기
    const onClickMoveToEachLetter = (id) => {
        navigate(`/detail/${id}`);
    }


    // [레터 없으면 없다고 메시지] 선언 - 필터 넣어주고, 삼항연산자 0이 아닐 경우에는 맵 돌리기
    const filterData = fanLetters.filter((item) => item.writedTo === selectedMember);

    return (
        <ul>
            {filterData.length === 0 ? (
                <div>아직 작성된 팬레터가 없습니다! 팬레터를 작성해주세요 🔥</div>
            ) : (filterData.map((it) =>
                (it.writedTo === selectedMember)
                    ? <StEachLetter key={it.id} wantToEdit={wantToEdit}
                        onClick={() => onClickMoveToEachLetter(it.id)}
                    >
                        <img src={it.avatar} alt="profile"></img>
                        <div>[작성자] {it.nickname}</div>
                        <div>[작성일시] {it.createdAt}</div>
                        <div>[내용] {
                            it.content.length < 50
                                ? it.content
                                : it.content.slice(0, 50) + '...'
                        }</div>
                    </StEachLetter>
                    : null
            ))}
        </ul>
    );
}

// 위 코드는 멤버 이름 비교해서 같으면 같은 레터를 보여주고
// 아니면 보여지지 않게 함
// 남겨진 팬레터가 있으면 보여주고, 없으면 "아직 작성된 팬레터가 없습니다" 뜨게끔



// alt="profile image"로 작성하면 에러 메시지 뜸