import { useLetters } from "context/LetterContext";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

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

function DetailedPage() {
    const { letters, setLetters } = useLetters();
    const { id } = useParams();

    const navigate = useNavigate();

    const letter = letters.find(letters => (
        letters.id === id
    ));

    // 삭제 기능
    const onClickDeleteBtn = (idToDelete) => {
        const wantToDelete = window.confirm("삭제 원하세요?");
        if (wantToDelete) {
            const notWantToDelete = letters.filter(function (letters) {
                if (letters.id !== idToDelete) {
                    navigate("/");
                    return true;
                } else {
                    return false;
                }
            });
            setLetters(notWantToDelete);
        } else {
            alert("취소하셨습니다.");
            return;
        }
    };

    // 수정 기능
    const [toggleBtn, setToggleBtn] = useState(false);
    const [editValue, setEditValue] = useState(letter?.content || "");
    const [originalContent, setOriginalContent] = useState(letter?.content || "");

    const onClickEditBtn = () => {
        setToggleBtn(true);
    };

    const onClickEditCancleBtn = () => {
        setToggleBtn(false);
        setEditValue(originalContent);
    };

    const onchangeEditValue = (e) => {
        setEditValue(e.target.value);
    };

    const onClickEditCompleteBtn = () => {
        if (editValue.trim() === originalContent.trim()) {
            alert("수정사항이 없습니다.");
            return;
        }

        setLetters((prevData) => {
            return prevData.map((item) => {
                if (item.id === id) {
                    return { ...item, content: editValue };
                }
                return item;
            });
        });
        setToggleBtn(false);
        setOriginalContent(editValue);
    };

    // 팬레터 클릭하면 이동되게 해야 함
    const goToMainPage = () => {
        navigate("/");
    };

    return letter ? (
        <div>
            <button onClick={goToMainPage}>Main Page</button>
            <StEachLetter>
                {toggleBtn === true ? (
                    <>
                        <textarea
                            defaultValue={editValue}
                            onChange={onchangeEditValue}
                        />
                    </>
                ) : (
                    <>
                        <div>{letter.avartar}</div>
                        <div>
                            [작성자] {letter.nickname}
                        </div>
                        <div>
                            [작성일시] {letter.createdAt}
                        </div>
                        <div>
                            [내용] {letter.content.length < 50
                                ? letter.content
                                : letter.content.slice(0, 50) + '...'}
                        </div>
                    </>
                )}
                {toggleBtn === true ? (
                    <>
                        <button onClick={onClickEditCancleBtn}>수정 취소</button>
                        <button onClick={onClickEditCompleteBtn}>수정 완료</button>
                    </>
                ) : (
                    <>
                        <button onClick={onClickEditBtn}>수정</button>
                        <button onClick={() => onClickDeleteBtn(letter.id)}>삭제</button>
                    </>
                )}
            </StEachLetter>
        </div>
    ) : null;
}

export default DetailedPage;