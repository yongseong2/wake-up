"use client";
import React from "react";
import { useTimer } from "../_hooks/useTimer";

export function CurrentTime() {
  const { dateString, amPm, timeString } = useTimer(7, 0);

  return (
    <div className="text-center flex flex-col gap-2">
      <div className="text-xl">{dateString}</div>
      <div className="text-2xl">{amPm}</div>
      <div className="text-5xl font-mono">{timeString}</div>
    </div>
  );
}
