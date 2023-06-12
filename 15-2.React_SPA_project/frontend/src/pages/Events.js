import React from "react";
import { Link} from "react-router-dom";

const DUMMY = [
  { id: "0", title: "0번째" },
  { id: "1", title: "1번째" },
  { id: "2", title: "2번째" },
];

const EventsPage = () => {
  return (
    <ul>
      {DUMMY.map((event) => (
        <li  key={event.id}>
          <Link to={`${event.id}`}>
            {event.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default EventsPage;
