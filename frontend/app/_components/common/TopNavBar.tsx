"use client";
import Image from "next/image";
import IconButton from "./IconButton";
import { useDispatch } from "react-redux";
import { logout } from "@/app/_store/modules/userSlice";
import { useRouter } from "next/navigation";

export function TopNavBar() {
  const title = "타이틀";
  const dispatch = useDispatch();

  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div
      className="bg-gray-50 w-full shadow-bottom-shadow rounded-b-md flex items-center justify-between px-6"
      style={{ height: "7vh" }}
    >
      <div className="text-gold font-bold" onClick={() => router.push("/main")}>
        WAKE UP
      </div>
      <IconButton name="Logout" onClick={handleLogout} />
    </div>
  );
}
