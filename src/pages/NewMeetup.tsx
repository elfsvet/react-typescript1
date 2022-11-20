import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';
interface MeetupData {
  title: string;
  image: string;
  address: string;
  description: string;
}

function NewMeetupPage(): JSX.Element {
  const history = useHistory();


  function addMeetupHandler(meetupData: MeetupData) {
    fetch(
      'https://react-getting-started-bc743-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(()=>{
      history.replace('/')
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
