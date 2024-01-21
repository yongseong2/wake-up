"use client";
import React, { useState, useEffect } from "react";

export function CurrentTime() {
  const [time, setTime] = useState(new Date());
  const [dateString, setDateString] = useState("1월 01일");
  const [timeString, setTimeString] = useState("00:00:00");
  const [amPm, setAmPm] = useState("오후");

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      setDateString(
        currentTime.toLocaleDateString("ko-KR", {
          month: "long",
          day: "numeric",
        }),
      );
      setTimeString(
        currentTime.toLocaleTimeString("ko-KR", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
      setAmPm(currentTime.getHours() >= 12 ? "오후" : "오전");
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center flex flex-col gap-2">
      <div className="text-xl">{dateString}</div>
      <div className="text-2xl">{amPm}</div>
      <div className="text-5xl font-mono">{timeString}</div>
    </div>
  );
}
