import 'App.css';

function App() {
  return (
    <div className="App">
      <header className="backGroundImg">
        <h1 className="titleName">aespa Fan Letter Collection</h1>
        <div className='memberChoose'>
          <div className="eachMember">카리나</div>
          <div className="eachMember">지젤</div>
          <div className="eachMember">윈터</div>
          <div className="eachMember">닝닝</div>
        </div>
      </header>
      <body>
        <div className="fanLetterWriteBox">
          닉네임: <input></input>
          내용: <input></input>
          누구에게 작성하실 건가요? <select className="members">
            <option value="">멤버 선택</option>
            <option value="카리나">카리나</option>
            <option value="지젤">지젤</option>
            <option value="윈터">윈터</option>
            <option value="닝닝">닝닝</option>
          </select>
          <button>팬레터 등록</button>
        </div>
        <div className='readFanLetter'>
          <div className='eachLetter'>
            Fan Letter 유저사진, 닉네임, 작성일시, 내용
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;