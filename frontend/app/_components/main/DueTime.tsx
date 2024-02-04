import { colors } from "@/app/_design/colors";
import { useTimer } from "../../_hooks/useTimer";
import Icon from "../common/Icon";

export function DueTime() {
  const { timeLeft, isTimeLow, isNotDueTime } = useTimer(7, 0);

  return (
    <div className="text-center flex flex-col gap-2">
      {isNotDueTime ? (
        <div className="text-xl">
          <div className="text-red-500 flex gap-2">
            <Icon name="Block" color={colors["red-500"]} />
            출석시간이 아니에요
          </div>
        </div>
      ) : (
        <div className="text-xl">
          <div>출석 07시 00분까지</div>
          <span className="font-mono w-3">{timeLeft.hours}</span>시간{" "}
          <span className="font-mono w-3">{timeLeft.minutes}</span>분{" "}
          <span
            className={`font-mono w-3 ${isTimeLow ? colors["red-500"] : ""}`}
          >
            {timeLeft.seconds}
          </span>
          초 남았어요
        </div>
      )}
    </div>
  );
}

export default DueTime;
