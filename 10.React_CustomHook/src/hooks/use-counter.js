import { useEffect, useState } from "react";


// 매개변수와 인자를 받아서 custom hook이 사용되도록
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
    // 의존성이 변경될때마다 useEffect함수가 재실행되도록
  }, [forwards]);

  return counter;
};

export default useCounter;
