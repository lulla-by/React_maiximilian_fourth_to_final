import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    // Home과 Products의 부모 라우트 역할
    path: "/",
    element: <RootLayout />,
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
