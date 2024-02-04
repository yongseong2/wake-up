interface Props {
  isCaptured: boolean;
}

export function AttendanceMessage({ isCaptured }: Props) {
  return <div className="flex justify-center">출석이 완료되었어요!</div>;
}
