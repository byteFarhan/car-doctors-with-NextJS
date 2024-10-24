import logo from "../../../public/assets/logo.svg";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import SocialIcon from "../SocialIcon/SocialIcon";
const Footer = () => {
  return (
    <footer id="footer" className=" py-20 bg-[#151515] text-[#E8E8E8]">
      <div className="container footer">
        <aside className="[&>*]:max-w-[200px] lg:[&>*]:max-w-[250px]">
          <Image src={logo} alt="logo..." />
          <h4 className="mb-3 text-sm font-bold text-white">Car Doctors</h4>
          <p className="text-[#E8E8E8]">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial.
          </p>
          <div className="flex gap-3 text-lg my-1 text-white [&>*]:p-2 [&>*]:rounded-full  [&>*]:bg-slate-800">
            <SocialIcon>
              <FaGoogle />
            </SocialIcon>
            <SocialIcon>
              <FaTwitter />
            </SocialIcon>
            <SocialIcon>
              <FaInstagram />
            </SocialIcon>
            <SocialIcon>
              <FaLinkedin />
            </SocialIcon>
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
