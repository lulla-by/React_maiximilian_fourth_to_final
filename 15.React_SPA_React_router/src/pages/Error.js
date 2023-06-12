import { MainNavigation } from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <main>
        <MainNavigation/>
        <h1>An error occur</h1>
        <p>could not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
