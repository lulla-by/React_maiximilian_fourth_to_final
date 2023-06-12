import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    // Home과 Products의 부모 라우트 역할
    path: "/",
    element: <RootLayout />,
    // 오류가 발생하면 이 라우트에 대해 폴백 페이지로서 ErrorPage를 렌더링
    errorElement:<ErrorPage />,
    children: [
      // 이 두 라우트의 정의를 RootLayout의 자녀로 만들게 됨
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
