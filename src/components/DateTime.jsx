import { useEffect, useState } from "react";

function formatDateTime(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${hours}:${minutes} ${ampm}`;
}

export default function DateTime() {
  const [time, setTime] = useState(formatDateTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatDateTime(new Date()));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
      <p>{time}</p>
  );
}