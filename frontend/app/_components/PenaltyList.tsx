"use client";
import { Penalty } from "./PenaltyList/Penalty";

export function PenaltyList() {
  return (
    <div className="w-full">
      <div className="text-center text-lg font-bold">지각 비용</div>
      <div>
        <Penalty price="1000" condition="30분안에 출석하면" />
        <Penalty price="2000" condition="30분 이후" />
      </div>
    </div>
  );
}
