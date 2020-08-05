import React from "react";

export const CalendarEvent = ({ event }) => {
  const { title, user } = event;
  return (
    <div>
      <span>{title}</span>
      <p>
        <strong>{user.name}</strong>
      </p>
    </div>
  );
};
