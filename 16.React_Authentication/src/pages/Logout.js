import { redirect } from "react-router-dom";
// 컴포넌트를 리턴하지 않음 => 로그아웃은 페이지가 필요없으니까.
// 대신 액션을 리턴함. 해당 액션을 로컬스토리지에서 토큰을 없애고 redirect()를 사용해서 로그아웃한 뒤 메인으로 이동
export function action() {
  localStorage.removeItem("token");
  localStorage.removeItem('expiration')

  return redirect("/");
}
