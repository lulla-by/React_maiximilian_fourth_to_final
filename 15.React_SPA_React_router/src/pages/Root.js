import { Outlet } from "react-router-dom";
import { MainNavigation } from './../components/MainNavigation';
import classes from "./Root.module.css"

// 자녀라우트 컴포넌트와 요소가 어디 있는지 정의해야 함 => 그래야 home과 product의 페이지가 렌더링
const RootLayout = () => {
  return (
    <>
    <MainNavigation/>
    {/* 자녀 라우트 요소들이 렌더링 되어야 할 장소를 표시하는 역할 */}
    <main className={classes.content}>
    <Outlet/>
    </main>
    </>
  );
};

export default RootLayout;
