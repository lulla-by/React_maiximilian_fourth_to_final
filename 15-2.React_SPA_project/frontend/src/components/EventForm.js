import { Form, json, redirect, useActionData, useNavigate, useNavigation } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  // 가장 가까운 action에 대한 access
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state ==="submitting"

  function cancelHandler() {
    navigate("..");
  }

  return (
    // react-router-dom이 제공하는 특수한 Form으로 변경
    // 백엔드로 요청을 전송하는 브라우저 기본값을 생략하게 만들고
    // 대신 전송되었을 그 요청을 받아서 액션에 주게 됨
    <Form method={method} className={classes.form}>
      {data && data.errors &&<ul>
        {Object.values(data.errors).map(err =>(
          <li key={err}>{err}</li>
        ))}</ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          // name 데이터 추출을 위해 모든 input에 name이 있는지 확인
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting?"isSubmitting":"Save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action ({request,params}){
  // console.log(request)
  const method = request.method;
  const data = await request.formData();
  // console.log(data)
  const eventData = {
    title:data.get('title'),
    image:data.get('image'),
    date:data.get('date'),
    description:data.get('description'),
  }
  // console.log(eventData)
  let url = `http://localhost:8080/events`
  if(method ==="PATCH"){
    const eventId = params.eventId;
    url = `http://localhost:8080/events/` + eventId;
  }
  const response = await fetch(url,{
    method,
    headers:{
      "Content-Type":'application/json' 
    },
    body:JSON.stringify(eventData)
  })
  
  if(response.status === 422){
    return response;
  }

  if(!response.ok){
    throw json({message:"Could not save event"},{status:500})
  }
  return redirect("/events")
}