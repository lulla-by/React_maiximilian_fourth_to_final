import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';
function NewMeetUpPage(params) {
 const router = useRouter()
  const fetchUrl = '/api/new-meetup'
  async function addMeetupHandelr(enteredData) {
    const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
    const data = await response.json();
    router.push("/")
    
  }
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandelr} />
    </>
  );
}

export default NewMeetUpPage;
