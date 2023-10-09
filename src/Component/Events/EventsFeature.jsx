import { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";


const EventsFeature = () => {
    const [Events, setEvents] = useState([]);

    useEffect(() => {
      fetch("Events.json")
        .then((res) => res.json())
        .then((data) => setEvents(data));
    }, []);
  
    return (
      <div>
        <div className="text-center">
          <h2 className="text-5xl p-14 mb-5">Up coming Events......</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {Events.map((Event) => (
            <EventCard key={Event.id} Event={Event}></EventCard>
          ))}
        </div>
      </div>
    );
  };

export default EventsFeature;