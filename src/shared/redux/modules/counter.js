import dummy from "dummy.json";


// 초기 상태값(state)
// 값 넣어둠
const CREATE_FAN_LETTER = "fanLetters/addNewLetter" // "" 이건 주석
export const addLetter = (letter) => {
    return {
        type: CREATE_FAN_LETTER,
        payload: letter,
    }
}

// 여기에 위처럼 새로운 (기능)action create 추가



const initialState = {
    fanLetters: dummy
}

// reducer: state에 변화를 일으키는 함수
// state를 action의 type에 따라 변경하는 함수
// input: state와 action
const counter = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FAN_LETTER:
            return {
                fanLetters: [...state.fanLetters, action.payload]
            }
        default:
            return state;
    }
};

export default counter;