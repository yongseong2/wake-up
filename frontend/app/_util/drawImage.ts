import { getCapturedTime } from "./getTime";

export async function drawImage(
  videoRef: React.RefObject<HTMLVideoElement>,
  canvasRef: React.RefObject<HTMLCanvasElement>,
): Promise<{ file: File | null; url: string | null }> {
  if (videoRef.current && canvasRef.current) {
    const context = canvasRef.current.getContext("2d");
    if (context) {
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

      const blob = await new Promise<Blob | null>(resolve =>
        canvasRef.current?.toBlob(resolve, "image/png"),
      );

      if (blob) {
        const file = new File([blob], "capture.png", { type: "image/png" });
        const url = URL.createObjectURL(blob);
        return { file, url };
      }
    }
  }
  return { file: null, url: null };
}
