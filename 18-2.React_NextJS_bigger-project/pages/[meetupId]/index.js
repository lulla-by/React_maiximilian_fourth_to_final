import MeetupDetail from "../../components/meetups/MeetupDetail";
import { useRouter } from "next/router";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://image.newsis.com/2022/06/01/NISI20220601_0001011091_web.jpg"
      title=" A First Meetup"
      address="Some"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths() {
  // 동적페이지에서 필요한 함수
  // NextJS에게 어떤 동적 매개변수 밸류의 어떤 페이지가 프리제너레이트 되어야 하는지 말해줌
  return {
    // 모든 동적 세그먼트 밸류가 있는 객체를 리턴
    fallback: false,
    // false로 설정하면 유효하지 않은 페이지에 대해 404error를 보여줌
    // true로 설정하면  유효하지 않은 페이지에 대해 동적으로 페이지를 생성해서 보여줌
    paths: [
      //paths는 array, array안에는 여러 객체가 있어야함, 동적 페이지 버전당 객체가 하나씩
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(context);
  // 잠겨져 있어서 클라이언트 콘솔에서 확인 x, 터미널에서 확인 가능
  return {
    props: {
      meetupData: {
        image:
          "https://image.newsis.com/2022/06/01/NISI20220601_0001011091_web.jpg",
        id: meetupId,
        title: " A First Meetup",
        address: "Some",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
