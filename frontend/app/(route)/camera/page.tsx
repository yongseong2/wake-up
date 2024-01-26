"use client";
import IconButton from "@/app/_components/common/IconButton";
import { Wrapper } from "@/app/_components/common/Wrapper";
import { useCamera } from "@/app/_hooks/useCamera";
import { useTimer } from "@/app/_hooks/useTimer";
import { useRouter } from "next/navigation";

export default function Camera() {
  const { dateString, timeString } = useTimer(7, 0);
  const {
    videoRef,
    canvasRef,
    isCaptured,
    isCameraReady,
    handleCapture,
    handleRetake,
    handleDownload,
    toggleCamera,
  } = useCamera();
  const router = useRouter();

  return (
    <Wrapper style="">
      <div className="w-full max-h-96">
        {!isCaptured && (
          <video ref={videoRef} autoPlay className="w-full max-h-96" />
        )}
        <canvas
          ref={canvasRef}
          className="w-full max-h-96"
          style={{ display: isCaptured ? "block" : "none" }}
        />
      </div>
      <div className="flex flex-1 items-end py-24">
        <div className="flex items-center gap-10">
          <IconButton name="Back" size={30} onClick={() => router.back()} />
          <div className="border-gray-600 border-2 rounded-full flex items-center justify-center p-2">
            {!isCaptured && (
              <IconButton
                name="Camera"
                size={60}
                onClick={() => handleCapture(dateString, timeString)}
                disabled={!isCameraReady}
              />
            )}
            {isCaptured && (
              <IconButton
                name="Download"
                size={60}
                onClick={() => handleDownload(dateString)}
                disabled={!isCameraReady}
              />
            )}
          </div>
          {!isCaptured && (
            <IconButton name="Change" size={35} onClick={toggleCamera} />
          )}
          {isCaptured && (
            <IconButton name="Refresh" size={35} onClick={handleRetake} />
          )}
        </div>
      </div>
    </Wrapper>
  );
}
