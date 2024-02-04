import { colors } from "@/app/_design/colors";
import Icon from "../common/Icon";
import DueTime from "../main/DueTime";

interface Props {
  isCaptured: boolean;
}

export function AttendanceMessage({ isCaptured }: Props) {
  return (
    <div className="flex justify-center">
      {!isCaptured && <DueTime />}
      {isCaptured && (
        <div className="text-xl">
          <div className="text-green-500 flex gap-2">
            <Icon name="Check" color={colors["green-500"]} />
            출석이 완료되었어요
          </div>
        </div>
      )}
    </div>
  );
}
