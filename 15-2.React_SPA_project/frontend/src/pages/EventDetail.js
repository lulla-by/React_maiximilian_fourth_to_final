import React from "react";
import { json, useLoaderData } from "react-router-dom";
import EventItem from './../components/EventItem';

const EventDetailPage = () => {
  const data = useLoaderData();
  return <EventItem event={data.event}/>;
};

export default EventDetailPage;

export async function loader({params,request}) {
  const id = params.eventId;
  
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json(
      { message: "could not fetch details for seleceted event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
  return response;
}
