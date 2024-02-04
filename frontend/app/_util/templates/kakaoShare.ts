export function kakaoShare(kakaoImageSrc: string) {
  return {
    objectType: "feed",
    content: {
      title: "오늘의 출석",
      imageUrl: kakaoImageSrc,
      link: {
        mobileWebUrl: "https://wake-up-morning.vercel.app",
        webUrl: "https://wake-up-morning.vercel.app",
      },
    },
    itemContent: {
      profileText: "Wake Up",
      profileImageUrl:
        "https://wake-up-morning.vercel.app/_next/image?url=%2Ficons%2Ficon-192x192.png&w=256&q=75",
    },
    buttons: [
      {
        title: "Wake Up으로 이동",
        link: {
          mobileWebUrl: "https://wake-up-morning.vercel.app",
          webUrl: "https://wake-up-morning.vercel.app",
        },
      },
    ],
  };
}
