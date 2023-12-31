"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { loginRequest } from "@/utils";
import { AuthContext } from "@/context/AuthContext";
import { UserType } from "@/types";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";


export default function Login() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserType>();

  const router = useRouter();

  const { fetchCurrentUser } = useContext(AuthContext);

  const onSubmit: SubmitHandler<UserType> = async (data) => {
    try {
      const response = await loginRequest(data.email, data.password);
      if (response && response.status === 200) {
        const token = response.data.token;
        Cookies.set("token", token);
        toast("Successfully logged in", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        fetchCurrentUser(token);
        router.push("/");
      } else {
        toast.error("Invalid credentials", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      className="flex flex-col justify-center gap-6 items-center text-xl w-[700px] border-black transition"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="text-5xl text-black/70 mb-3 font-bold">Login</h1>
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true })}
        className="pb-3 rounded-l py-3 px-2 outline-none flex-1 w-full bg-inherit border-black/10 border focus:shadow-md focus:drop-shadow-md"
      />
      {errors.email && "Email is required"}
      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
        className="pb-3 rounded-l py-3 px-2 outline-none flex-1 w-full bg-inherit border-black/10 border focus:shadow-md  focus:drop-shadow-md"
      />
      {errors.password && "Password is required"}
      <div className="flex gap-3 justify-start mr-auto items-center">
        <button
          className="py-2 px-4 bg-blue-500 rounded text-white"
          type="submit"
        >
          Sign in
        </button>
        <p>
          New customer?{" "}
          <Link href={"signup"} className="text-blue-500">
            Create account
          </Link>
        </p>
      </div>
    </form>
  );
}
