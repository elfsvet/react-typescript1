import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

interface MeetupListProp {
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
}

interface MeetupListProps {
    meetups: MeetupListProp[]
}

function MeetupList({ meetups }:MeetupListProps) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup: MeetupListProp) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
export default MeetupList;
