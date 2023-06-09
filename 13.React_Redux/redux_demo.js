// 서드파트 패키지를 임포트 하기 위한 기본 노드 js 구문
const redux = require('redux')

// 저장소 생성 - 데이터 관리, 데이터는 리듀서 함수에 의해 결정됨(리듀서 함수가 새로운 상태 스냅샷을 생성할 것이기 때문)
const store = redux.createStore();