import React,{useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
 
  const [showParagraph,setShowParagraph] = useState()
 
  console.log("1. App Running")
  const toggleParagraphHandler = () =>{
    setShowParagraph(prevShowParagraph => !prevShowParagraph)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoOutput show={false}/>
      <Button onClick={toggleParagraphHandler} >Show Paragraph!</Button>
    </div>
  );
}

export default App;
