import { getFeaturedEvents } from '../data';
import EventList from '../components/events/event-list';

const HomePage = () => {
  const FeaturedEvents = getFeaturedEvents();
  return <EventList items={FeaturedEvents} />;
};

export default HomePage;
