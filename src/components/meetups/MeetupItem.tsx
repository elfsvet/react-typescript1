import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

interface MeetupListProp {
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
}

function MeetupItem(meetup:MeetupListProp) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
