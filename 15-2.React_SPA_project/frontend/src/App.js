// Challenge / Exercise
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventLoader } from "./pages/Events";
import { loader as eventDetailLoader } from "./pages/EventDetail";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventRootLayout from "./pages/EventRoot";
import ErrorPage from "./pages/Error";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // 에러 엘리먼트는 폴백 페이지 표시만을 위한 기능이 아님
      // loader도 포함해서 라우트 관련 코드에 오류가 발생할 때마다 화면에 표시
      errorElement:<ErrorPage />,
      children: [
        { path: "", element: <HomePage /> },
        {
          path: "events",
          element: <EventRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventLoader,
            },
            { path: ":eventId", element: <EventDetailPage />,loader:eventDetailLoader},
            { path: ":eventId/edit", element: <EditEventPage /> },
            { path: "new", element: <NewEventPage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
