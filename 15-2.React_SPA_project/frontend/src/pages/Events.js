import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return(
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
    <Await resolve={events}>
      {
        (loadedEvents) =><EventsList events={loadedEvents}/>
      }
    </Await>
    </Suspense>
  )
}

export default EventsPage;
async function loadEvents (){
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return {isError:true,message:"Could not fetch events."}
    // new Response()를 생성해서 이것을 throw
    // throw new Response(JSON.stringify({message:"could not fetch events."}),{status:500})
    throw json({ message: "could not fetch events." }, { status: 500 });
  } else {
   
    const resData = await response.json();
    return resData.events
    // const resData = await response.json();
    // return resData.events;
  }
}
export function loader() {
return defer({
 events:loadEvents()
})
}
