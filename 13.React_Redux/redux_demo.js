// 서드파트 패키지를 임포트 하기 위한 기본 노드 js 구문
const redux = require('redux')

// 코드를 실행할 때 리듀서도 실행되고 기본적인 액션을 진행할 것 => 초기 상태를 뱉어냄 => 리듀서함수 추가
// 상태 파라미터에 기본 값 추가
const counterReducer = (state = {counter:0},aciton) =>{

  // 일반적으로 출력값은 상태 객체, 이론적으로는 어떤 유형도 가능
  return {
    counter: state.counter + 1
  };
}

// 저장소 생성 - 데이터 관리, 데이터는 리듀서 함수에 의해 결정됨(리듀서 함수가 새로운 상태 스냅샷을 생성할 것이기 때문)
const store = redux.createStore(counterReducer);  // 어떤 리듀서가 그 저장소를 변경하는지 저장소에 알려줌

console.log(store.getState())

//구독
const counterSubscriber = ()=>{
 const latesState =  store.getState()
  //getState()는 createStore()로 생성된 저장소에서 사용할 수 있는 메서드, 업데이트 이후의 최신 스냅샷 제공
  console.log(latesState);
}

// 리덕스가 이 구독함수를 인식하도록 하고 변경될 때마다 이 함수를 실행하라고 말해줘야 함
store.subscribe(counterSubscriber);