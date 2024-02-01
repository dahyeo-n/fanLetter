export default function LetterList({ letters, selectedMember }) {

    return (
        <ul>
            {letters.map((it) =>
                (it.writedTo === selectedMember)
                    ? <div className="eachLetter" key={it.id}>
                        <img src={it.avatar} alt="profile"></img>
                        <div>[작성자] {it.nickname}</div>
                        <div>[작성일시] {it.createdAt}</div>
                        <div>[내용] {
                            it.content.length < 50
                                ? it.content
                                : it.content.slice(0, 50) + '...'
                        }</div>
                    </div>
                    : null
            )}
        </ul>
    );
}

// alt="profile image"로 작성하면 에러 메시지 뜸