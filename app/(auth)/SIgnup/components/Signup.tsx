"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { signupRequest } from "@/utils";
import { useContext } from "react";
import { UserType } from "@/types";
import { AuthContext } from "@/providers/auth";

export default function Signup() {
  const router = useRouter();
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserType>();

  const onSubmit: SubmitHandler<UserType> = async (data: UserType) => {
    try {
      const { username, email, password } = data;
      const response = await signupRequest(username, email, password);
      if (response && response.status === 200) {
        const { data } = response;
        Cookies.set("token", data.token, {
          expires: 1,
          secure: true,
          sameSite: "strict",
        });
        setCurrentUser(data.token);
        reset();
        router.push("/");
      }else{

      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      className="flex flex-col max-w-3xl mx-auto justify-center gap-6 items-center text-xl border-black transition"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-5xl text-black/70 mb-3 font-bold">Create Account</h1>

      <input
        type="text"
        placeholder="Username"
        {...register("username", { required: true, maxLength: 20 })}
        className="pb-3 rounded-l py-3 px-2 outline-none flex-1 w-full bg-inherit border-black/10 border focus:shadow-md focus:drop-shadow-md"
      />
      {errors.username && "Username is required"}
      <div className="flex md:flex-row flex-col gap-4 w-full">
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="pb-3 rounded-l py-3 px-2 outline-none flex-1 flex-grow w-full bg-inherit border-black/10 border focus:shadow-md focus:drop-shadow-md"
        />
        {errors.email && "Email is required"}
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="pb-3 rounded-l py-3 px-2 outline-none flex-1 w-full bg-inherit border-black/10 border focus:shadow-md  focus:drop-shadow-md"
        />
        {errors.password && "Password is required"}
      </div>
      <div className="flex gap-3 justify-center xl:justify-start w-full mr-auto items-center">
        <button
          className="py-2 px-4 bg-blue-500 rounded text-white"
          type="submit"
        >
          Create
        </button>
        <p>
          Returning customer?
          <Link href={"login"} className="text-blue-500 ml-2">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}
