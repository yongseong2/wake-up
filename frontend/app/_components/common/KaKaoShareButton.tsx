import React from "react";
import IconButton from "./IconButton";
import { kakaoShare } from "@/app/_util/templates/kakaoShare";

interface Props {
  kakaoImageSrc: string;
}

const KakaoShareButton = ({ kakaoImageSrc }: Props) => {
  const share = () => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }
    if (kakaoImageSrc) {
      window.Kakao.Share.sendDefault(kakaoShare(kakaoImageSrc));
    }
  };

  return <IconButton size={35} name="Share" onClick={share} />;
};

export default KakaoShareButton;
