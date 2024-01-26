import { useRouter } from "next/navigation";
import * as Icons from "@/app/_asset/icons/iconIndex";
import Icon from "./Icon";

interface ButtonObject {
  name: keyof typeof Icons;
  title: string;
  func: () => void;
}

export function BottomNavBar() {
  const router = useRouter();
  const bottomMenu: ButtonObject[] = [
    {
      name: "Camera",
      title: "카메라 인증",
      func: () => router.push("/camera"),
    },
    {
      name: "Profile",
      title: "마이페이지",
      func: () => router.push("/"),
    },
  ];
  return (
    <div
      className="bg-gold w-full shadow-top-shadow rounded-t-md flex items-center justify-around"
      style={{ height: "9vh" }}
    >
      {bottomMenu.map(item => {
        return (
          <button key={item.name} className="w-fit" onClick={() => item.func()}>
            <div className="flex items-center justify-center">
              <Icon name={item.name} />
            </div>
            <p className="text-xs text-center font-bold mt-1">{item.title}</p>
          </button>
        );
      })}
    </div>
  );
}
