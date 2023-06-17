import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first",
    description: "firs",
    address: "...1",
    image:
      "https://image.newsis.com/2022/06/01/NISI20220601_0001011091_web.jpg",
  },
  {
    id: "m2",
    title: "second",
    description: "second",
    address: "...2",
    image:
      "https://i.namu.wiki/i/VOh8auDwOK56oeXI6nmEeHjYNUJ2uW-oio5Otb-jB7PK5hxnUEvKz-8ItNsKuPSKyfJCP5I1nsn2iaSm9Z2CYA.webp",
  },
];

function HomePage() {
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    // DUMMY_MEETUPS를 백엔드에 http요청하여 가져온다고 가정
    setLoadedData(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedData} />;
  // 렌더링한 결과는 같을 것. 다만 useEffect는 사이드이펙트로서 컴포넌트가 한번 실행된 다음에 실행되는 부수적인 효과임
  // 이럴경우에 NextJS가 원하는 사전렌더링이 제대로 작동되지 않음
  // NextJS에서 제공하는 기능으로 해결가능
}

export default HomePage;
