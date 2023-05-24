import React from 'react'
import Myparagraph from './Myparagraph';

const DemoOutput = (props) => {
  console.log("2. DemoOutput Running")

  return (
  <Myparagraph>{props.show ? 'This is new!':""}</Myparagraph>
  )
}

// export default DemoOutput;
export default React.memo(DemoOutput);
// React.memo()는 인자로 들어간 컴포넌트에 어떤 props가 입력되는지 확인하고
// 입력되는 모든 props의 신규 값을 확인한 뒤 이를 기존의 props의 값과 비교하도록 리액트에게 전달

// 모든 컴포넌트를 React.memo로 래핑할 필요는 없음
// 그 대신, 컴포넌트 트리에서 잘라낼 수 있는 몇가지의 주요 컴포넌트 부분을 선택해서 사용하면 됨