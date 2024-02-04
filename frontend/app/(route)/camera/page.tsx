"use client";
import IconButton from "@/app/_components/common/IconButton";
import KakaoShareButton from "@/app/_components/common/KaKaoShareButton";
import Wrapper from "@/app/_components/common/Wrapper";
import { useCamera } from "@/app/_hooks/useCamera";
import Image from "next/image";

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
    imageSrc,
  } = useCamera();
  const router = useRouter();

  return (
    <Wrapper style="h-full">
      <div className="max-h-96">
        {!isCaptured && (
          <video
            // className="w-full"
            style={{ width: "100vh", maxHeight: "50vh" }}
            ref={videoRef}
            autoPlay
          />
        )}
        {isCaptured && (
          <Image
            src={imageSrc}
            width={0}
            height={0}
            className="w-full"
            style={{ maxHeight: "50vh" }}
            alt="Captured"
          />
        )}
        <canvas
          ref={canvasRef}
          className="w-full max-h-96"
          style={{
            display: "none",
          }}
        />
      </div>
      <div className="flex flex-1 items-end py-24 h-1/2">
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
