import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import로 불러오면 항상 실행
// import BlogPage, { loader as postsLoader } from './pages/Blog';
// import PostPage, { loader as postLoader } from "./pages/Post";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import { lazy, Suspense } from "react";

const BlogPage = lazy(() => import("./pages/Blog"));
// lazy 함수는 동적으로 임포트하는 함수를 인자로 받음
const PostPage = lazy(() => import("./pages/Post"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ),
            // 이 loader함수는 블로그페이지의 loader가 호출될 때만 실행
            loader: () =>
              import("./pages/Blog").then((module) => module.loader()),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/Post").then((module) => module.loader(meta)),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
