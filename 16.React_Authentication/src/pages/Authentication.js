import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

// AuthForm이 전송될 때마다 작업이 트리거 될 것
export async function action({ request }) {
  //  쿼리 정보를 기반으로 가입요청인지 회원가입 요청인지 보내야 함
  const serachParsms = new URL(request.url).searchParams;
  const mode = serachParsms.get("mode") || "login";
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode!" }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not authentication user" }, { status: 500 });
  }
  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
  return redirect("/");
}
