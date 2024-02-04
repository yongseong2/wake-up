import { useRef, useState, useEffect } from "react";
import { getCapturedTime } from "../_util/getTime";
import { drawImage } from "../_util/drawImage";
import { useAppSelector } from "../_store/store";
// import { useTimer } from "./useTimer";

export const useCamera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [capturedTime, setCapturedTime] = useState("");
  const [isCaptured, setCaptured] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraType, setCameraType] = useState("environment");
  const [imageSrc, setImageSrc] = useState("");
  const [kakaoImageSrc, setKakaoImageSrc] = useState("");
  const { memberName } = useAppSelector(state => state.user);
  // const { isNotDueTime } = useTimer(7, 0);

  const handleCapture = async () => {
    const { dateString, timeString } = getCapturedTime();
    const { file, url } = await drawImage(
      videoRef,
      canvasRef,
      dateString,
      timeString,
    );
    const data = { memberName, time: getCapturedTime().currentTime };
    setCapturedTime(`${dateString + " " + timeString}`);
    if (url) {
      setImageSrc(url);
      setCaptured(true);
      kakaoUploadImage(file);
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

  const kakaoUploadImage = (file: File | null) => {
    const kakao = window.Kakao;
    if (!file) {
      return;
    }
    if (kakao && !kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }
    kakao.Share.uploadImage({
      file: [file],
    })
      .then((res: any) => {
        setKakaoImageSrc(res.infos.original.url);
      })
      .catch((err: any) => {
        console.log(err);
      });
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
    setCameraType(cameraType === "environment" ? "user" : "environment");
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
    imageSrc,
    kakaoImageSrc,
    capturedTime,
  };
};
