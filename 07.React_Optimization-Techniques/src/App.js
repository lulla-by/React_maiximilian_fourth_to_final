import React,{useState,useCallback} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
 
  const [showParagraph,setShowParagraph] = useState()
  const [allowToggle,setAllowToggle] = useState()
 
  console.log("1. App Running")

  // useCallback
  // 컴포넌트 실행 전반에 걸쳐 함수를 저장할 수 있게하는 훅
  // 리액트에 원하는 함수를 저장하고 매번 실행때마다 이 함수를 재생성할 필요가 없다는 것을 알림
  // => 동일한 함수객체가 메모리의 동일한 위치에 저장, 이를 통한 비교작업이 가능
  const toggleParagraphHandler = useCallback(() =>{
    if(allowToggle){
      setShowParagraph(prevShowParagraph => !prevShowParagraph)
    }
  },[allowToggle])


  const allowToggleHandler = () =>{
    if(allowToggle === true) {
      console.log("setAllowToggle을 false로")
      setAllowToggle(!allowToggle)
    } else {
      console.log("setAllowToggle을 true로")
      setAllowToggle(!allowToggle)
    }
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler} >Allow Toggling!</Button>
      {allowToggle && <Button onClick={toggleParagraphHandler} >Show Paragraph!</Button>}
    </div>
  );
}

export default App;
