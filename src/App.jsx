import Router from "shared/Router";
import GlobalStyle from "Globalstyle";
import { useSelector } from "react-redux";

function App() {
  // 여기서 store에 접근해, letters의 값 읽어올 거임
  // useSelector
  const data = useSelector((state) => {
    return state;
  });
  console.log(data)

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App;