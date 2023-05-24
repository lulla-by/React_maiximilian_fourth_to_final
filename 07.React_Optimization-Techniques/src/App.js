import React,{useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
 
  const [showParagraph,setShowParagraph] = useState()
 
  console.log("App Running")
  const toggleParagraphHandler = () =>{
    // 이전 스냅샷에 기반해 작업을 하기 때문에 이후의 상태 업데이트에 대한 함수를 사용
    setShowParagraph(prevShowParagraph => !prevShowParagraph)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoOutput show={false}/>
     {/* 컴포넌트가 재실행되면 이의 모든 자식 컴포넌트들 역시 재실행, 재평가 */}
      <Button onClick={toggleParagraphHandler} >Show Paragraph!</Button>
    </div>
  );
}

export default App;
