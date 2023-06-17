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

function HomePage(props) {
  console.log(props)
  return <MeetupList meetups={props.meetups} />;
}


// 데이터를 기다려야 한다면, 즉 페이지 컴포넌트에 데이터를 가져와서 추가해야한다면
// 페이지 컴포넌트 파일 안에서 특수함수를 export, pages폴더안에 있는 컴포넌트 파일들에서만 가능함
// 반드시 getStaticProps이여야하고 NextJS는 이 이름을 가진 함수를 찾을 것
// 컴포넌트 함수를 호출하기 전에 실행되는 함수
// 이 함수는 실제로 이 페이지에서 사용할 props를 준비함
export async function getStaticProps(){
  // async를 사용하여 비동기처리 가능. NextJS는 이 promise가 해결될 때까지 기다릴 것
 //fetch data from an API
 return {
  // 반드시 객체를 반환
  props:{
    //props라는 키가 있어야 함 => 페이지 컴포넌트의 props를 여기서 설정
    meetups: DUMMY_MEETUPS
  },
  // 몇초 간격으로 생성
  revalidate:10
 }
}

// getStaticProps의 단점
// 이 데이터에 최신정보는 없을 수 있음 => 빌드 단계에서 프로세스에서 생성되기 때문에
//  데이터베이스에 더 많은 정보를 추가해도 이 사전에 생성된 페이지는 모를것 
// 클라이언트쪽에더 데이터를 가져오지 않는다면 항상 예전 모임만 보게 되는 것
//데이터가 자주 변한다면 반환된 객체에 revalidate를 추가하여 점진적 정적 생성이라는 기능 사용
export default HomePage;
