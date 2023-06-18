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

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(context);
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
