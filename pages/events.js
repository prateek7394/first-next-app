import React, { useState } from "react";
import { useRouter } from "next/router";

// Pre-rendering + Client-side Data Fetching

const EventList = ({ eventList }) => {
  const router = useRouter();
  const [events, setEvents] = useState(eventList);
  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);

    // Shallow Routing : It is used to update the URL without running the code inside getServerSideProps
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <div>
      <button onClick={fetchSportsEvents}> Sports Events </button>
      <h1>List of Events:</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id}. {event.title}
          </h2>
          <h2>Date: {event.date}</h2>
          <h2>Category: {event.category}</h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default EventList;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
};
