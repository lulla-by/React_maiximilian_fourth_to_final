import { useState,useCallback } from "react";

// 이 훅은 어떠한 종류의 요청이든 받아서 모든 종류의 url로 보낼 수 있어야 하며
// 어떠한 데이터 변환도 할 수 있어야 함
// 동시에 로딩과 오류라는 상태를 관리하고 모든 과정을 순서대로 실행해야 함

const useHttp = () => {
  
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    //requestConfig: url을 포함한 어떤 종류의 설정 사항도 포함할 수 있는 객체
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        // coutom hook에 유연성 추가
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      // console.log(typeof data)
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[])
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
