// Challenge / Exercise
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventLoader } from "./pages/Events";
import { loader as eventDetailLoader } from "./pages/EventDetail";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage,{action as newEventAction} from "./pages/NewEvent";
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
      errorElement: <ErrorPage />,
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
            {
              path: ":eventId",
              // 상위 라우트에 설정된 loader
              loader: eventDetailLoader,
              // 특수한 키값
              id: "event-detail",
              children: [
                // 로더가 설정된 상위 라우트에 id라는 특수한 키캆 설정이 되어있으면 
                // 라우트에서 더 높은 수준의 loader에 useRouteLoaderDate("키값")로 접근 가능
                {
                  index: true,
                  element: <EventDetailPage />,
                },
                { path: "edit", element: <EditEventPage /> },
              ],
            },
            { path: "new", element: <NewEventPage />,action:newEventAction },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
