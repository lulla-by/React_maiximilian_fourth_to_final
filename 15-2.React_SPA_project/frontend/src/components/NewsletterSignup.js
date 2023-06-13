import { useEffect } from "react";
import classes from "./NewsletterSignup.module.css";
import { useFetcher, Form } from "react-router-dom";

function NewsletterSignup() {
  // loader나 액션이 속한 페이지 또는 라우트를 로딩하지 않고 그것들을 트리거하고 싶을 때
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  // console.log(fetcher)

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data,state]);
  return (
    // 이 form은 MainNavigation의 일부분이기 때문에 모든 라우트에 포함되어 있음
    // NewwletterSignup 컴포넌트는MainNavigation의 일부분 => action을 모든 라우트에 추가
    <fetcher.Form
      method="post"
      className={classes.newsletter}
      action="/newsletter"
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
