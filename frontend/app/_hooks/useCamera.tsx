import { useRef, useState, useEffect } from "react";
import { getCapturedTime } from "../_util/getCapturedTime";

export const useCamera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isCaptured, setCaptured] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraType, setCameraType] = useState("user");

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        const width = 400;
        const height = 300;
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        context.drawImage(videoRef.current, 0, 0, width, height);
        context.font = "30px Arial";
        context.fillStyle = "white";
        context.textAlign = "left";
        context.textBaseline = "bottom";
        const { dateString, timeString } = getCapturedTime();
        context.fillText(`${dateString + " " + timeString}`, 10, height - 10);
        console.log(canvasRef.current.toDataURL());
        setCaptured(true);
      }
    }
  };

  const handleCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: cameraType },
      });
      streamRef.current = stream; // 스트림을 ref에 저장
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      const err = error as Error;
      // 권한이 거부되었을 때 사용자에게 알림
      if (err.name === "NotAllowedError") {
        alert(
          "카메라 접근이 거부되었습니다. 설정에서 카메라 접근을 허용해주세요.",
        );
        // 필요하다면 여기에 권한 재요청 로직을 구현
      } else {
        // 다른 오류에 대한 처리를 위해 재연결
        setTimeout(handleCameraAccess, 3000);
      }
    }
  };
  const handleCameraLoad = () => {
    setIsCameraReady(true); // 비디오가 로드되면 버튼 활성화
  };

  const handleRetake = () => {
    setCaptured(false);
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height,
        );
      }
    }
    handleCameraAccess();
  };

  const handleDownload = () => {
    if (canvasRef.current) {
      const image = canvasRef.current
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const link = document.createElement("a");
      const { dateString } = getCapturedTime();
      link.download = `captured-image_${dateString}.png`;
      link.href = image;
      link.click();
    }
  };

  useEffect(() => {
    handleCameraAccess();

    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", handleCameraLoad);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", handleCameraLoad);
      }

      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [cameraType]);

  const toggleCamera = () => {
    setCameraType(cameraType === "user" ? "environment" : "user");
  };

  return {
    videoRef,
    canvasRef,
    isCaptured,
    isCameraReady,
    handleCapture,
    handleRetake,
    handleDownload,
    toggleCamera,
  };
};
