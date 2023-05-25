import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(){
    super()
    this.state = {
      hasError:false
    }
  }
  componentDidCatch(error) {
    // componentDidCatch 메서드는 어느 클래스 컴포넌트에도 추가할 수 있으며 컴포넌트에 이를  추가하게 되면
    // 클래스 컴포넌트를 오류경계로 만들게 됨(현재는 try-catch로 에러 핸들링이 불가능한 상황=> 일반적인 js가 아니라 jsx를 사용하고 있기 때문)
    // 하위 컴포넌트 중 하나가 오류를 만들거나 전달할 때 발동
    console.log(error)
    this.setState({hasError:true})

  }

  render() {
    if(this.state.hasError){
      return <p>Something went worog!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
