import IconButton from "@/app/_components/common/IconButton";
import { AttendanceMessage } from "./AttendanceMessage";
import { useTimer } from "@/app/_hooks/useTimer";
import KakaoShareButton from "../common/KaKaoShareButton";

interface Props {
  isCaptured: boolean;
  isCameraReady: boolean;
  kakaoImageSrc: string;
  handleCapture: () => void;
  handleRetake: () => void;
  handleDownload: () => void;
  toggleCamera: () => void;
}

function Controller({
  isCaptured,
  isCameraReady,
  kakaoImageSrc,
  handleCapture,
  handleRetake,
  handleDownload,
  toggleCamera,
}: Props) {
  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-10">
      <AttendanceMessage isCaptured={isCaptured} />
      <div className="flex items-center gap-10 h-36">
        {!isCaptured ? (
          <>
            <div id="something-new" style={{ width: 35, height: 35 }} />
            <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center p-2 bg-gold">
              <IconButton
                name="Camera"
                size={50}
                onClick={handleCapture}
                disabled={!isCameraReady}
              />
              <span className="text-xs text-gray-500 font-bold">출석</span>
            </div>
            <IconButton name="Change" size={35} onClick={toggleCamera} />
          </>
        ) : (
          <>
            <KakaoShareButton kakaoImageSrc={kakaoImageSrc} />
            <IconButton
              name="Download"
              size={50}
              onClick={handleDownload}
              disabled={!isCameraReady}
            />
            <IconButton name="Refresh" size={35} onClick={handleRetake} />
          </>
        )}
      </div>
    </div>
  );
}

export default Controller;
