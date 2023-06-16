import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
function NewMeetUpPage(params) {
  const addMeetupHandelr =(data)=>{
    console.log(data);

  }
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandelr}/>
    </>
  );
}

export default NewMeetUpPage;
