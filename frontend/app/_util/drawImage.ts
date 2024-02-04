import { getCapturedTime } from "./getTime";

export function drawImage(
  videoRef: React.RefObject<HTMLVideoElement>,
  canvasRef: React.RefObject<HTMLCanvasElement>,
): string | null {
  const context = canvasRef.current?.getContext("2d");
  if (context && videoRef.current && canvasRef.current) {
    const width = videoRef.current.videoWidth;
    const height = videoRef.current.videoHeight;
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    context.drawImage(videoRef.current, 0, 0, width, height);
    context.font = "30px Verdana";
    context.fillStyle = "white";
    context.textAlign = "left";
    context.textBaseline = "bottom";
    const { dateString, timeString } = getCapturedTime();
    context.fillText(`${dateString + " " + timeString}`, 10, height - 10);
    return canvasRef.current.toDataURL();
  }
  return null;
}
