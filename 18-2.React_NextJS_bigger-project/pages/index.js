import MeetupList from "../components/meetups/MeetupList";

function HomePage() {
  console.log("확인");
  const DUMMY_MEETUPS = [
    {
      id:"m1",title:"first",description:"firs",address:"...1",image:"https://image.newsis.com/2022/06/01/NISI20220601_0001011091_web.jpg"
    },
    {
      id:"m2",title:"second",description:"second",address:"...2",image:"https://i.namu.wiki/i/VOh8auDwOK56oeXI6nmEeHjYNUJ2uW-oio5Otb-jB7PK5hxnUEvKz-8ItNsKuPSKyfJCP5I1nsn2iaSm9Z2CYA.webp"
    },
  ]

  return (
    <MeetupList meetups={DUMMY_MEETUPS}/>
  );
}

export default HomePage;
