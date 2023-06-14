import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}


// 토큰이 없으며 redirect()하는 loader생성
export function checkAuthLoader ( ){
const token = getAuthToken()
if(!token){
  return redirect("/auth")
}
return null
}