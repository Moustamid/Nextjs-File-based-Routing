import EventItem from './event-item';
import classes from './event-list.module.css';

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
          id={event.id}
          key={event.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
