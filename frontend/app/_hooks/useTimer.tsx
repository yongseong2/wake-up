import { useState, useEffect } from "react";

export function useTimer(targetHour: number, targetMinute: number) {
  const [time, setTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [dateString, setDateString] = useState("1월 01일");
  const [timeString, setTimeString] = useState("00:00:00");
  const [amPm, setAmPm] = useState("오후");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      setTime(currentTime);

      // 현재 날짜 및 시간 업데이트
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

      // 타겟 시간 설정
      const targetTime = new Date();
      targetTime.setHours(targetHour, targetMinute, 0, 0);

      // 다음 날로 설정 (필요한 경우)
      if (currentTime > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
      }

      // 남은 시간 계산
      const difference = targetTime.getTime() - currentTime.getTime();
      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0");
        const minutes = Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0");
        const seconds = Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0");

        setTimeLeft({
          hours,
          minutes,
          seconds,
        });
      }
    };

    const timer = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(timer);
  }, [targetHour, targetMinute]);

  return {
    time,
    timeLeft,
    dateString,
    timeString,
    amPm,
  };
}
