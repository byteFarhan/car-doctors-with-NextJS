"use client";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import loginSvg from "@/../public/assets/images/login/login.svg";
import Swal from "sweetalert2";
import Image from "next/image";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const Register = () => {
  const router = useRouter();
  const pathName = useSearchParams();
  const path = pathName.get("_redirect");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = {
      name,
      email,
      password,
      role: "user",
      image: "https://i.postimg.cc/ZnVNXs38/2.jpg",
    };
    // console.log(newUser);
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/new-user`,
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    // console.log(resp);
    // console.log(await resp.json());
    if (resp.ok) {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      // console.log(result);
      if (result.ok) {
        router.push(path ? path : "/");
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registation successfull.🎉",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <>
      <section id="login" className="mx-auto max-w-7xl">
        <div className="flex items-center gap-20 px-5 py-10 my-20 md:px-16 lg:px-0">
          <div className="hidden lg:block">
            <Image
              src={loginSvg}
              alt="svg"
              width={460}
              height={502}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <div className="w-full lg:w-4/5">
              <div className="w-full py-5 rounded shadow md:p-10">
                <h3 className="mb-4 text-3xl font-semibold text-center md:mb-8 md:font-bold md:text-4xl">
                  Register
                </h3>
                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="px-10 form-control">
                    <label className="label">
                      <span className="text-lg font-semibold text-secondary">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      className="p-3 rounded-md outline outline-1 outline-secondary focus:outline-2"
                      required
                    />
                  </div>
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
                      className="p-3 rounded-md outline outline-1 outline-secondary focus:outline-2"
                      required
                    />
                  </div>
                  <div className="px-10 form-control">
                    <label className="label">
                      <span className="text-lg font-semibold text-secondary">
                        Confirm Password
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Your password"
                        name="password"
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
                      Register
                    </button>
                  </div>
                </form>
                <SocialLogin />
                <p className="my-3 text-center">
                  {`Already have an account? `}
                  <Link
                    href={`/login`}
                    className="text-primary hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
