export function getCapturedTime() {
  const currentTime = new Date();
  const dateString = currentTime.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timeString = currentTime.toLocaleTimeString("ko-KR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return { currentTime, dateString, timeString };
}
