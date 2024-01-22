"use client";
import { Button } from "@/app/_components/Button";
import { CurrentTime } from "@/app/_components/CurrentTime";
import DueTime from "@/app/_components/DueTime";
import { PenaltyList } from "@/app/_components/PenaltyList";
import { Wrapper } from "@/app/_components/Wrapper";
import { useTimer } from "@/app/_hooks/useTimer";
import { logout } from "@/app/_store/modules/userSlice";
import { useAppSelector } from "@/app/_store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

export default function Main() {
  const { time } = useTimer(7, 0);
  const { memberName, isLogined } = useAppSelector(state => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  useEffect(() => {
    if (!isLogined) {
      router.push("/");
    }
  }, [isLogined, router]);

  // 차후 서버에 보낼 데이터
  const data = { time, memberName };

  return (
    <Wrapper>
      <button onClick={handleLogout} className="fixed top-10 right-10">
        <Image src="/image/logout.png" width={20} height={20} alt="logout" />
      </button>
      <CurrentTime />
      <PenaltyList />
      <DueTime />
      <Button
        color="gold"
        onClick={() => {
          console.log(data);
          router.push("/camera");
        }}
      >
        출석하기
      </Button>
    </Wrapper>
  );
}
