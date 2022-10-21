import { useState, useEffect } from "react";
const Clock = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let strTime = hours + ":" + minutes + " " + ampm;
      setClockState(strTime);
    }, 1000);
  }, []);
  return <span>{clockState}</span>;
};

export default Clock;
