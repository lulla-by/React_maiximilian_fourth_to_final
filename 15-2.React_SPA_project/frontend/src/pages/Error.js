import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occured";
  let message = "Something went wrong!";

  //  유효하지 않은 주소를 입력할 경우
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  // /events를 방문해서 오류가 날 경우
  if (error.status === 404) {
    message = "Could not find resource or page!";
  }
  return (
    <>
    <MainNavigation />
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
    </>
  );
};

export default ErrorPage;
