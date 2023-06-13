import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  // if(data.isError){
  //   return <p>{data.message}</p>
  // }
  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return {isError:true,message:"Could not fetch events."}
    // new Response()를 생성해서 이것을 throw
    // throw new Response(JSON.stringify({message:"could not fetch events."}),{status:500})
    throw json({ message: "could not fetch events." }, { status: 500 });
  } else {
    return response;
    // const resData = await response.json();
    // return resData.events;
  }
}
