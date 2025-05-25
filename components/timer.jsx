import React from "react";
import { useTimer } from "react-timer-hook";
import Typography from "@mui/joy/Typography";
function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <span style={{ textAlign: "center" }}>
      <Typography level="h2">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </Typography>
    </span>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10800); // 180 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
