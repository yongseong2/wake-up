"use client";
import { Button } from "@/app/_components/common/Button";
import { CurrentTime } from "@/app/_components/main/CurrentTime";
import DueTime from "@/app/_components/main/DueTime";
import { PenaltyList } from "@/app/_components/PenaltyList";
import { Wrapper } from "@/app/_components/common/Wrapper";
import { useTimer } from "@/app/_hooks/useTimer";
import { useAppSelector } from "@/app/_store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Main() {
  const { time } = useTimer(7, 0);
  const { memberName, isLogined } = useAppSelector(state => state.user);

  const router = useRouter();

  useEffect(() => {
    if (!isLogined) {
      router.push("/");
    }
  }, [isLogined, router]);

  // 차후 서버에 보낼 데이터
  const data = { time, memberName };

  return (
    <Wrapper>
      <CurrentTime />
      <PenaltyList />
      <DueTime />
      <Button
        color="gold"
        onClick={() => {
          console.log(data);
        }}
      >
        출석하기
      </Button>
    </Wrapper>
  );
}
