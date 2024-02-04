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
        <div className="w-full max-h-half-screen">
          <video className="w-full max-h-half-screen" ref={videoRef} autoPlay />
        </div>
      )}
      {isCaptured && (
        <Image
          src={imageSrc}
          width={0}
          height={0}
          className="w-full max-h-half-screen"
          alt="Captured"
        />
      )}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default Lens;
