"use client";
import { Button } from "@/app/_components/Button";
import { CurrentTime } from "@/app/_components/CurrentTime";
import DueTime from "@/app/_components/DueTime";
import IconButton from "@/app/_components/IconButton";
import { PenaltyList } from "@/app/_components/PenaltyList";
import { Wrapper } from "@/app/_components/Wrapper";
import { useTimer } from "@/app/_hooks/useTimer";
import { logout } from "@/app/_store/modules/userSlice";
import { useAppSelector } from "@/app/_store/store";
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
      <IconButton
        name="Logout"
        onClick={handleLogout}
        className="fixed top-10 right-10"
      />
      <CurrentTime />
      <PenaltyList />
      <DueTime />
      <div className="flex flex-col gap-3">
        <Button
          color="gold"
          onClick={() => {
            console.log(data);
          }}
        >
          출석하기
        </Button>
        <Button
          color="emerald"
          onClick={() => {
            router.push("/camera");
          }}
        >
          카메라인증
        </Button>
      </div>
    </Wrapper>
  );
}
