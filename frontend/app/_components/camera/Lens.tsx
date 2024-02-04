import Image from "next/image";
import { RefObject } from "react";

interface Props {
  isCaptured: boolean;
  videoRef: RefObject<HTMLVideoElement>;
  canvasRef: RefObject<HTMLCanvasElement>;
  imageSrc: string;
}

const Lens = ({ isCaptured, videoRef, canvasRef, imageSrc }: Props) => {
  return (
    <div>
      {!isCaptured && (
        <video
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
  );
};

export default Lens;
