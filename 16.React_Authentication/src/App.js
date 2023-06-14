import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import {action as logoutAction} from './pages/Logout'
import { checkAuthLoader, tokenLoader } from "./utils/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader:tokenLoader,
    id:"root",
    children: [
      { index: true, element: <HomePage /> },
      { path: "auth", element: <AuthenticationPage />, action: authAction },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              // 로그인 상태가 아니라면 접근 x
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader:checkAuthLoader
              },
            ],
          },
          // 로그인 상태가 아니라면 접근 x
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader:checkAuthLoader
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },{
        // 컴포넌트를 구성한것은 아니여서 element를 리턴하지 않고 액션만 설정
        path:"logout",action:logoutAction
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
