// 서드파트 패키지를 임포트 하기 위한 기본 노드 js 구문
const redux = require('redux')

// 코드를 실행할 때 리듀서도 실행되고 기본적인 액션을 진행할 것 => 초기 상태를 뱉어냄 => 리듀서함수 추가
const counterReducer = (state,aciton) =>{

  // 일반적으로 출력값은 상태 객체, 이론적으로는 어떤 유형도 가능
  return {
    counter: state.counter+1
  };
}

// 저장소 생성 - 데이터 관리, 데이터는 리듀서 함수에 의해 결정됨(리듀서 함수가 새로운 상태 스냅샷을 생성할 것이기 때문)
const store = redux.createStore(counterReducer);  // 어떤 리듀서가 그 저장소를 변경하는지 저장소에 알려줌