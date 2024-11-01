"use client";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import loginSvg from "@/../public/assets/images/login/login.svg";
import Swal from "sweetalert2";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    // console.log(resp);
    if (resp.ok) {
      form.reset();
      router.push("/");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Loged in successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <section id="login" className="mx-auto max-w-7xl">
        <div className="flex items-center gap-20 px-5 py-10 my-20 md:px-16 lg:px-0">
          <div className="hidden lg:block">
            <Image
              src={loginSvg}
              alt="Login SVG"
              height={460}
              width={502}
              className="w-full"
            />
          </div>
          {/* <div> */}
          <div className="flex-1">
            {/* <div className="px-5 py-6 md:px-0"> */}
            {/* <div className=""></div> */}
            <div className="w-full lg:w-4/5">
              <div className="w-full py-5 rounded shadow md:p-10">
                <h3 className="mb-4 text-3xl font-semibold text-center md:mb-8 md:font-bold md:text-4xl">
                  Login
                </h3>
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="px-10 form-control">
                    <label className="label">
                      <span className="text-lg font-semibold text-secondary">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      defaultValue={"admin@gmail.com"}
                      className="p-3 rounded-md outline outline-1 outline-secondary focus:outline-2"
                      required
                    />
                  </div>
                  <div className="px-10 form-control">
                    <label className="label">
                      <span className="text-lg font-semibold text-secondary">
                        Password
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Your password"
                        name="password"
                        defaultValue={"@secret"}
                        className="w-full p-3 rounded-md outline outline-1 outline-secondary focus:outline-2"
                        required
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-4 right-3 md:text-lg"
                      >
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </span>
                    </div>
                  </div>
                  <div className="px-10 mt-2">
                    <button
                      // style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
                      className="w-full rounded-md btn-fill"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <SocialLogin />
                <p className="my-3 text-center">
                  {`Don't have any account? `}
                  <Link
                    href={"/register"}
                    className="text-primary hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Login;
