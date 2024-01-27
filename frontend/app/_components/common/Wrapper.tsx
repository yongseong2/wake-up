import React, { ReactNode, useMemo } from "react";
import { BottomNavBar } from "./BottomNavBar";
import { TopNavBar } from "./TopNavBar";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
  style?: string;
}
interface NavConfig {
  showTopNav: boolean;
  showBottomNav: boolean;
  navBarHeight: string;
}

type NavConfigMap = {
  [path: string]: NavConfig;
};

const Wrapper = ({
  style = "justify-between py-20 px-10",
  children,
}: Props) => {
  const path = usePathname();
  const { topNavSpace, bottomNavSpace, allSpace, noneSpace } = useMemo(() => {
    const noneSpace = "0vh";
    const topSpace = "7vh";
    const bottomSpace = "7.5vh";
    const totalSpace = `${parseFloat(topSpace) + parseFloat(bottomSpace)}vh`;
    return {
      topNavSpace: topSpace,
      bottomNavSpace: bottomSpace,
      allSpace: totalSpace,
      noneSpace: noneSpace,
    };
  }, []);

  const navConfig: NavConfigMap = {
    "/": { showTopNav: false, showBottomNav: false, navBarHeight: noneSpace },
    "/main": { showTopNav: true, showBottomNav: true, navBarHeight: allSpace },
    "/camera": {
      showTopNav: true,
      showBottomNav: false,
      navBarHeight: topNavSpace,
    },
    default: {
      showTopNav: false,
      showBottomNav: false,
      navBarHeight: noneSpace,
    },
  };

  // 현재 경로에 맞는 설정을 가져옴 (경로가 없으면 'default' 사용)
  const { showTopNav, showBottomNav, navBarHeight } =
    navConfig[path] || navConfig["default"];

  return (
    <>
      {showTopNav && <TopNavBar topNavSpace={topNavSpace} path={path} />}
      <div
        className={`flex flex-col items-center ${style}`}
        style={{ minHeight: `calc(100vh - ${navBarHeight})` }}
      >
        {children}
      </div>
      {showBottomNav && <BottomNavBar bottomNavSpace={bottomNavSpace} />}
    </>
  );
};

export default React.memo(Wrapper);
