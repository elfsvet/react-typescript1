import React, { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/20160803_-_Meiktila%2C_Myanmar_-_Phaung_Daw_U_Pagoda_-_7321.jpg/1920px-20160803_-_Meiktila%2C_Myanmar_-_Phaung_Daw_U_Pagoda_-_7321.jpg',
    address: 'Meetupstreet 6, 12345 Meetup City',
    description:
      'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

interface MeetupListProp {
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
}

interface MeetupListProps {
  meetups: MeetupListProp[];
}

function AllMeetupsPage(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([] as any);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-bc743-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups: MeetupListProps[] = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        console.log(data);
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
