import React from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  
  const params = useParams();
  const id = params.eventId
  return (
    <h1> 
    </h1>
  );
};

export default EventDetailPage;
