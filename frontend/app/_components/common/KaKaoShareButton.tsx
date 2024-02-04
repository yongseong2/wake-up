import React from "react";
import IconButton from "./IconButton";
import { kakaoShare } from "@/app/_util/templates/kakaoShare";
import { useAppSelector } from "@/app/_store/store";

interface Props {
  kakaoImageSrc: string;
  capturedTime: string;
}

const KakaoShareButton = ({ kakaoImageSrc, capturedTime }: Props) => {
  const memberName = useAppSelector(state => state.user.memberName);
  const share = () => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }
    if (kakaoImageSrc) {
      window.Kakao.Share.sendDefault(
        kakaoShare(kakaoImageSrc, capturedTime, memberName),
      );
    }
  };

  return <IconButton size={35} name="Share" onClick={share} />;
};

export default KakaoShareButton;
