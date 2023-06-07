import { useReducer } from "react";
const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return state;
};

//상태를 다루는 훅과 입력에 대한 로직

// 입력창과 입력값이 건드려졌는지에 대한 상태를 다룸
const useInput = (validateValue) => {
  const [inputState, disaptch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // 검증 로직은 하드코딩이 되면 안되고 훅이 사용되는 곳에더 어떤 로직을 사용할지 가져와야 함
  // validateValue라는 함수를 매개변수로 가져와서 유효성을 통과하는지 검증
  const valueIsValid = validateValue(inputState.value);

  //에러가 보여져야 하는지에 대한 변수가 되므로  hasError로 이름을 변경
  const hasError = !valueIsValid && inputState.isTouched;
  //valueIsValid가 false이면서 isTouched가 true인 경우

  // 훅에서 정의된 함수들은 훅이 사용되는 곳에서 호출될 수 있음 => 훅을 사용하는 컴포넌트에서 호출이 가능
  const valueChangeHandler = (e) => {
    disaptch({ type: "INPUT", value: e.target.value });
  };
  const inputBlurHandeler = (e) => {
    disaptch({ type: "BLUR" });
  };
  //초기화 함수
  const reset = () => {
    disaptch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandeler,
    reset,
  };
};

export default useInput;
