"use client";
import { Button } from "@/app/_components/Button";
import { CurrentTime } from "@/app/_components/CurrentTime";
import { PenaltyList } from "@/app/_components/PenaltyList";

export default function Main() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-20 px-10 bg-gray-100">
      <CurrentTime />
      <PenaltyList />
      <div>
        <Button color="gold">출석하기</Button>
      </div>
    </div>
  );
}
