"use client";
import IconButton from "@/app/_components/common/IconButton";
import KakaoShareButton from "@/app/_components/common/KaKaoShareButton";
import Wrapper from "@/app/_components/common/Wrapper";
import { useCamera } from "@/app/_hooks/useCamera";

import { useRouter } from "next/navigation";

export default function Camera() {
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
      <div>
        {!isCaptured && (
          <video
            style={{ width: "400px", height: "300px" }}
            ref={videoRef}
            autoPlay
          />
        )}
        <canvas
          ref={canvasRef}
          style={{
            display: isCaptured ? "block" : "none",
          }}
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
                onClick={() => handleCapture()}
                disabled={!isCameraReady}
              />
            )}
            {isCaptured && (
              <IconButton
                name="Download"
                size={60}
                onClick={() => handleDownload()}
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
