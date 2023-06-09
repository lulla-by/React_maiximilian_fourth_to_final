import { useSelector, useDispatch} from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  const incrementHandeler = () => {
      dispatch({ type: "INCREMENT" });
  };
  const increaseHandeler = () =>{
    dispatch({type:"INCREMENT" , amount:5})
  }
  const decrementHandeler = () => {
      dispatch({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show && <div className={classes.value}>{counter}</div>}
      <div>
        <button id="increment" onClick={incrementHandeler}>
          Increment
        </button>
        <button id="increment" onClick={increaseHandeler}>
          Increase by 5
        </button>
        <button id="decrement" onClick={decrementHandeler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component{
//   // react-redux의 connect가 클래스 기반 컴포넌트를 리덕스에 연결하는데 도움을 줌
//   incrementHandeler(){
//     this.props.increment();
//   }

//   decrementHandeler(){
//     this.props.decrement();
//   }

//   toggleCounterHandler(){}
//   render () {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button id="increment" onClick={this.incrementHandeler.bind(this)}>
//             Increment
//           </button>
//           <button id="decrement" onClick={this.decrementHandeler.bind(this)}>
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind()}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // 리덕스 상태를 받는 함수
// const mapStateToProps = state =>{
//  return {
//   counter:state.counter
//  };
// }
// const mapDispatchToProps = dispatch =>{
// return{
//   increment:()=>{dispatch({type:"INCREMENT"})},
//   decrement:()=>{dispatch({type:"DECREMENT"})},
// }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
