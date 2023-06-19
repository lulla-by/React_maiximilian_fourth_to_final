import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { useRouter } from "next/router";
import { Fragment } from "react";

function MeetupDetails(props) {
  const { image, title, address, description } = props.meetupData;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="descrition" content={description} />
      </Head>
      <MeetupDetail
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.REACT_MONGODB);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); //_id:1 => ID만 포함하고 다른 필드값은 포함하지 않는다는 뜻

  client.close();

  return {
    // 모든 동적 세그먼트 밸류가 있는 객체를 리턴
    fallback: false,
    // false로 설정하면 유효하지 않은 페이지에 대해 404error를 보여줌
    // true로 설정하면  유효하지 않은 페이지에 대해 동적으로 페이지를 생성해서 보여줌
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(process.env.REACT_MONGODB);
  const db = await client.db();
  const meetupsCollection = await db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  return {
    props: {
      meetupData: {
        image: selectedMeetup.image,
        id: meetupId,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
