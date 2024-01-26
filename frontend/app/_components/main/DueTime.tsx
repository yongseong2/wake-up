import { useTimer } from "../../_hooks/useTimer";

export function DueTime() {
  const { timeLeft } = useTimer(7, 0);
  const isTimeLow = parseInt(timeLeft.seconds, 10) <= 10;
  return (
    <div className="text-center flex flex-col gap-2">
      <div className="text-xl">
        <div className="text-l">출석 07시 00분까지</div>
        <span className="font-mono w-3">{timeLeft.hours}</span>시간{" "}
        <span className="font-mono w-3">{timeLeft.minutes}</span>분{" "}
        <span className={`font-mono w-3 ${isTimeLow ? "text-red-500" : ""}`}>
          {timeLeft.seconds}
        </span>
        초 남았어요
      </div>
    </div>
  );
}

export default DueTime;
