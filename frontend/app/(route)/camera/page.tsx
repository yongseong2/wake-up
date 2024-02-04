"use client";
import Wrapper from "@/app/_components/common/Wrapper";
import { useCamera } from "@/app/_hooks/useCamera";
import Controller from "@/app/_components/camera/Controller";
import Lens from "@/app/_components/camera/Lens";

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
    kakaoImageSrc,
    capturedTime,
  } = useCamera();

  return (
    <Wrapper style="h-full flex flex-col justify-between">
      <Lens
        isCaptured={isCaptured}
        videoRef={videoRef}
        canvasRef={canvasRef}
        imageSrc={imageSrc}
      />
      <Controller
        isCaptured={isCaptured}
        handleCapture={handleCapture}
        handleRetake={handleRetake}
        handleDownload={handleDownload}
        toggleCamera={toggleCamera}
        isCameraReady={isCameraReady}
        kakaoImageSrc={kakaoImageSrc}
        capturedTime={capturedTime}
      />
    </Wrapper>
  );
}
