"use client";
import IconButton from "./IconButton";
import { useDispatch } from "react-redux";
import { logout } from "@/app/_store/modules/userSlice";
import { useRouter } from "next/navigation";

interface Props {
  path?: string;
  topNavSpace: string;
}

export function TopNavBar({ path, topNavSpace }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  const pathToTitle: { [key: string]: string } = {
    "/camera": "카메라",
  };

  return (
    <div
      className="bg-gray-50 w-full shadow-bottom-shadow rounded-b-md flex justify-between items-center px-6"
      style={{ height: topNavSpace }}
    >
      {!(path && pathToTitle[path]) && (
        <div
          className="text-gold font-bold"
          onClick={() => router.push("/main")}
        >
          WAKE UP
        </div>
      )}
      <div className="font-bold">{path && pathToTitle[path]}</div>

      <IconButton name="Logout" onClick={handleLogout} />
    </div>
  );
}
