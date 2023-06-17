import "../styles/globals.css";
import Layout from "./../components/layout/Layout";
// NextJS의 특수 컴포넌트
//NextJS가 렌더링하는 최상위 컴포넌트처럼 작동
function MyApp({ Component, pageProps }) {
  // 프로퍼티를 받고 구조 분해 할당을 해서 정보를 꺼냄, NextJS가 자동으로 이 프로퍼티를 MyApp으로 보냄
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
