import IconButton from "@/app/_components/common/IconButton";
import { AttendanceMessage } from "./AttendanceMessage";

interface Props {
  isCaptured: boolean;
  isCameraReady: boolean;
  handleCapture: () => void;
  handleRetake: () => void;
  handleDownload: () => void;
  toggleCamera: () => void;
}

function Controller({
  isCaptured,
  handleCapture,
  handleRetake,
  handleDownload,
  toggleCamera,
  isCameraReady,
}: Props) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-10">
      <AttendanceMessage isCaptured={isCaptured} />
      <div className="flex items-center gap-10 h-36">
        <div id="something-new" style={{ width: 35, height: 35 }} />
        {!isCaptured ? (
          <>
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
            <IconButton
              name="Download"
              size={35}
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
