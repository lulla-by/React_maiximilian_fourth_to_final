//서버사이드 코드를 포함하는 함수를 정의할 것
//api라우트는 서버에서만 돌아감, 클라이언트에서는 아님
// api 라우트에서 인증서를 사용할 수 있고 이 함수들은 라우트에 요청이 들어올 때마다 트리거되어 /api/new-meetup을 입력함

// 이 페이지의 URL: /api/new-meetup

// req: 들어오는 요청에 관한 데이터
// res: 응답을 보낼때 필요함
function handler(req, res) {
  //req에서 헤더나 요청 바디를 받을 수 있음
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    
  }
}

export default handelr;
