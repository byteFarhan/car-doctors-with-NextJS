"use client";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import googleIcon from "@/../public/assets/icons/google-icon.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";

const SocialLogin = () => {
  const pathName = useSearchParams();
  const path = pathName.get("_redirect");
  const handleLinkedInLogin = () => {
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "Feature Comming Soon. Try another way!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <div className="w-2/3 mx-auto mb-3 divider">Or Sign In With</div>
      <div className="my-5">
        {/* <p className="mb-3 text-center">Or Sign In with</p> */}
        <ul className="flex justify-center *:cursor-pointer gap-5 items-center my-3 text-2xl  [&>*]:p-2 [&>*]:text-blue-600 [&>*]:bg-slate-100 [&>*]:rounded-full">
          <li
            onClick={() =>
              signIn("google", {
                redirect: true,
                callbackUrl: path ? path : "/",
              })
            }
          >
            <Image
              src={googleIcon}
              alt="google-icon..."
              className="w-6"
              width={24}
              height={24}
            />
          </li>
          <li
            onClick={() =>
              signIn("facebook", {
                redirect: true,
                callbackUrl: path ? path : "/",
              })
            }
          >
            <FaFacebookF />
          </li>
          <li onClick={handleLinkedInLogin}>
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialLogin;
