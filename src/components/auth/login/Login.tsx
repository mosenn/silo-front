import Image from "next/image";
import LoginComponent from "./LoginComponent";
import Link from "next/link";
import Authbutton from "@/components/providers/AuthButton";

export default function Login() {
  return (
    <>
      <div className="flex justify-between ">
        <section className="img w-full hidden lg:block">
          <Image
            width={650}
            height={500}
            src="/assets/phons.jpg"
            alt="img-login"
            className="h-[607px] "
          />
        </section>
        <section className="login w-full mx-auto">
          <Link
            href={"/"}
            className="logo text-3xl font-semibold text-primary tracking-wider "
          >
            <h2 className="text-right mr-4 mt-1 ">carto</h2>{" "}
          </Link>
          <LoginComponent />
          <div className="flex  justify-center w-[75%] mx-auto items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-neutral-600">Or Login with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Authbutton />
        </section>
      </div>
    </>
  );
}