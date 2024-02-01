import { useParams } from "react-router-dom";

function DetailedPage({ letters }) {
    const { id } = useParams()

    const letter = letters.find(letters => (
        letters.id === id
    ))
    console.log(letter);

    // 팬레터 클릭하면 이동되게 해야 함
    return (
        <div>DetailedPage
            <div className="eachLetter">
                <div>[작성자] {letter.nickname}</div>
                <div>[작성일시] {letter.createdAt}</div>
                <div>[내용] {
                    letter.content.length < 50
                        ? letter.content
                        : letter.content.slice(0, 50) + '...'
                }</div>
                <button>수정</button>
                <button>삭제</button>
            </div>
        </div>
    )
}

export default DetailedPage;