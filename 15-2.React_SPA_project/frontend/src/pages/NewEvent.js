import React from 'react'
import EventForm from './../components/EventForm';
import { json, redirect } from 'react-router-dom';

const NewEventPage = () => {
  const submitHandelr = (e) =>{
    e.preventDefault()
  }
  return (
    <EventForm/>
  )
}

export default NewEventPage;

export async function action ({request,params}){
  console.log(request)
  const data = await request.formData();
  console.log(data)
  const eventData = {
    title:data.get('title'),
    image:data.get('image'),
    date:data.get('date'),
    description:data.get('description'),
  }
  console.log(eventData)
  const response = await fetch(`http://localhost:8080/events`,{
    method:"POST",
    headers:{
     "Content-Type":'application/json' 
    },
    body:JSON.stringify(eventData)
  })

  console.log(response)

  if(!response.ok){
    throw json({message:"Could not save event"},{status:500})
  }
  return redirect("/events")
}