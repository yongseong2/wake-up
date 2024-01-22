"use client";
import { Wrapper } from "@/app/_components/Wrapper";
import { useEffect, useRef } from "react";

export default function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        const width = videoRef.current.videoWidth;
        const height = videoRef.current.videoHeight;
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        context.drawImage(videoRef.current, 0, 0, width, height);
        console.log(canvasRef.current.toDataURL());
      }
    }
  };

  const handleCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing the camera: ", error);

      // 권한이 거부되었을 때 사용자에게 알림
      if (error.name === "NotAllowedError") {
        alert(
          "카메라 접근이 거부되었습니다. 설정에서 카메라 접근을 허용해주세요.",
        );
        // 필요하다면 여기에 권한 재요청 로직을 구현
      } else {
        // 다른 오류에 대한 처리
        setTimeout(handleCameraAccess, 3000);
      }
    }
  };

  useEffect(() => {
    handleCameraAccess();
  }, []);

  console.log(videoRef);

  return (
    <Wrapper>
      <video ref={videoRef} autoPlay style={{ width: "100%" }}></video>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "200px" }}
      ></canvas>
      <button onClick={handleCapture}>캡처</button>
    </Wrapper>
  );
}
