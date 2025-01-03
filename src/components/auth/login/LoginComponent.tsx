"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import LoginApi from "@/app/services/auth/loginApi";
import { useStorage } from "@/app/providers/context/userInfo";
import Cookies from "js-cookie";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
  username: z
    .string()
    .min(6, { message: "username must be at least 6 characters long" }),
});

type LoginForm = z.infer<typeof loginSchema>; // استخراج تایپ فرم از اسکیمای Zod
export default function LoginComponent() {
  const [isViewPassword, setIsViewPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const { saveData } = useStorage();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  // submit info from server
  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    setIsSubmitting(true);
    setErrorMessage(""); // Resetting previous error message
    setSuccessMessage(""); // Resetting previous success message

    try {
      const result = await LoginApi(data);
      console.log(result);
      if (result.status === 201) {
        toast.success(result.data.message);
        Cookies.set("authToken", result?.data?.token, { expires: 1 });
        saveData(result?.data);
        if (result?.data?.data?.role == "ADMIN") {
          router.push("/admin");
        } else {
          router.push("/panel-user");
        }
      }
    } catch (error) {
      toast.error(error.message || "An unknown error occurred");
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col w-[75%] mt-10 mx-auto">
        <ToastContainer />

        <div className="flex text-black/55 text-sm">
          <Link href={"/"}>Home/ </Link>{" "}
          <Link href={"/auth/login"}> Login</Link>
        </div>
        <div className="text-2xl text-primary font-semibold  tracking-wider mt-4">
          Login
        </div>

        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
              Email :
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="john.doe@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          {/* username Input  */}
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm mb-2"
            >
              Username :
            </label>
            <div className="">
              <input
                {...register("username")}
                type="text"
                id="username"
                placeholder="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* <button
              onClick={() => setIsViewPassword(!isViewPassword)}
              type="button"
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {isViewPassword ? <FaEye /> : <FaEyeSlash />}
            </button> */}
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
          {/* Password Input */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm mb-2"
            >
              Password :
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type={isViewPassword ? "text" : "password"}
                id="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => setIsViewPassword(!isViewPassword)}
                type="button"
                className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {isViewPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-700">
              <input
                {...register("termsAccepted")}
                type="checkbox"
                className="form-checkbox text-blue-600 border-gray-300 rounded  outline-0 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">Remember me</span>
            </label>

            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          {errors.termsAccepted && (
            <p className="text-red-500 text-sm mb-4 ">
              {errors.termsAccepted.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 mt-2 rounded-lg text-white transition ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Login
          </button>
          {isLoading && <div>loading ....</div>}
        </form>

        {/* Sign Up */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <Link href={"/register"} className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
