"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const RegisterSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  username: z
    .string()
    .min(6, { message: "username must be at least 6 characters long" }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
  role: z.enum(["FARMER", "ADMIN"], {
    errorMap: () => ({ message: "Role must be selected." }), // پیام خطا سفارشی برای انتخاب نقش
  }),
});

type RegisterForm = z.infer<typeof RegisterSchema>; // استخراج تایپ فرم از اسکیمای Zod
export default function RegisterComponent() {
  const [isViewPassword, setIsViewPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  console.log(successMessage);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterSchema), // اتصال Zod به فرم
  });

  // submit info from server
  const onSubmit = async (data: RegisterForm) => {
    console.log("Form submitted:", data);
    setIsSubmitting(true);
    setErrorMessage(""); // Resetting previous error message
    setSuccessMessage(""); // Resetting previous success message

    try {
      const res = await fetch(
        "https://silo-order-management-system.vercel.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        // اگر وضعیت پاسخ درست نباشد
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const resUser = await res.json();
      // console.log(resUser);
      setSuccessMessage(resUser.message); // نمایش پیام موفقیت
      router.push("/auth/login");
    } catch (error) {
      // console.error("Error submitting the form:", error);
      setErrorMessage(error.message || "An unknown error occurred"); // نمایش پیام خطا
    } finally {
      setIsSubmitting(false); // پایان loading
    }
  };

  //show toast
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]);

  return (
    <>
      <div className="flex flex-col w-[75%]  mt-2 mx-auto">
        <div className="flex text-black/55 text-sm">
          <Link href={"/"}>Home/ </Link>{" "}
          <Link href={"/auth/login"}> Register</Link>
        </div>
        <div className="text-2xl text-primary font-semibold  tracking-wider mt-4">
          Sign Up
        </div>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <ToastContainer />

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
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {isViewPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          {/* Confirm Password Input */}
          <div className="mb-2">
            <label
              htmlFor="password"
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

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-700">
              <input
                {...register("termsAccepted")}
                type="checkbox"
                className="form-checkbox text-blue-600 border-gray-300 rounded  outline-0 focus:border-primary "
              />
              <span className="ml-2 text-sm">
                I agree to all the <span className="text-primary">Terms</span>{" "}
                and <span className="text-primary">Privacy Policies</span>
              </span>
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-red-500 text-sm">
              {errors.termsAccepted.message}
            </p>
          )}
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 text-sm mb-2">
              Role:
            </label>
            <select
              {...register("role")}
              id="role"
              name="role"
              className={`block w-[30%] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.role ? "border-red-500" : ""
              }`}
            >
              <option value="">Select a role</option>{" "}
              <option value="FARMER">FARMER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p> // نمایش پیام خطا در صورت وجود
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white transition ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Create new Account
          </button>
        </form>

        {/* Sign Up */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Already have an account?
            <Link
              href={"/auth/login"}
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
