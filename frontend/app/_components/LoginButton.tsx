"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./Button";
import { useAppDispatch, useAppSelector } from "../_store/store";
import { setIsLogined, setUserInfo } from "../_store/modules/userSlice";

interface Props {
  href: string;
  profile: string;
  password: string;
}

export function LoginButton({ href, profile, password }: Props) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const infoPassword = useAppSelector(state => state.user.password);

  const handleLogin = () => {
    if (infoPassword === password) {
      router.push(href);
      setIsModalOpen(false);
      dispatch(
        setIsLogined({
          isLogined: true,
        }),
      );
    } else {
      setError("비밀번호가 일치하지 않습니다");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  const handleClose = () => {
    dispatch(
      setUserInfo({
        memberName: "",
        password: "",
      }),
    );
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="font-bold bg-yellow-400 text-black border border-black border-solid px-6 py-2 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        {profile}
      </button>
      {isModalOpen && (
        <div
          onClick={() => handleClose()}
          className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50"
        >
          <form onSubmit={handleSubmit}>
            <div
              onClick={e => e.stopPropagation()}
              className="bg-white p-6 rounded-lg"
            >
              <h2 className="text-l font-semibold mb-4">
                {profile}님<br />
                비밀번호를 입력하세요
              </h2>
              <input
                type="password"
                value={infoPassword}
                onChange={e =>
                  dispatch(
                    setUserInfo({
                      memberName: profile,
                      password: e.target.value,
                    }),
                  )
                }
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
              />
              <div className="flex items-center flex-col">
                <Button type="submit" color="gold">
                  로그인
                </Button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
