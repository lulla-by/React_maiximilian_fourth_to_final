import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    // Home과 Products의 부모 라우트 역할
    path: "/root",
    element: <RootLayout />,
    // 오류가 발생하면 이 라우트에 대해 폴백 페이지로서 ErrorPage를 렌더링
    errorElement:<ErrorPage />,
    children: [
      // 이 두 라우트의 정의를 RootLayout의 자녀로 만들게 됨
      { index:true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
