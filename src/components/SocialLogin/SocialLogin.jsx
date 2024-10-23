"use client";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import googleIcon from "@/../public/assets/icons/google-icon.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
// import { useContext } from "react";
// import { AuthContext } from "../../../Providers/AuthProvider";
// import swal from "sweetalert";
// import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  //   const { signInwithGoogle } = useContext(AuthContext);
  //   const navigate = useNavigate();
  //   const handleFacebookLogin = () => {
  //     // console.log("feature Comming Soon...");
  //     swal("feature Comming Soon...");
  //   };
  //   const handleLinkedInLogin = () => {
  //     // console.log("feature Comming Soon...");
  //     swal("feature Comming Soon...");
  //   };
  //   const handleGoogleLogin = () => {
  //     signInwithGoogle()
  //       .then((result) => {
  //         swal("Good job!", "Sing In Successfull.", "success");
  //         navigate(location?.state ? location.state : "/");
  //       })
  //       .catch((error) => {
  //         swal({
  //           title: error.message,
  //         });
  //       });
  //   };
  return (
    <div>
      {/* divder */}
      {/* <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <div className="divider">Or Sign In With</div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div> */}
      <div className="my-5">
        <p className="mb-3 text-center">Or Sign In with</p>
        <ul className="flex justify-center *:cursor-pointer gap-5 items-center my-3 text-2xl  [&>*]:p-2 [&>*]:text-blue-600 [&>*]:bg-slate-100 [&>*]:rounded-full">
          <li onClick={() => signIn("google", { redirect: false })}>
            <Image
              src={googleIcon}
              alt="google-icon..."
              className="w-6"
              width={24}
              height={24}
            />
          </li>
          <li
          //   onClick={handleFacebookLogin}
          >
            <FaFacebookF />
          </li>
          <li
          //   onClick={handleLinkedInLogin}
          >
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialLogin;
