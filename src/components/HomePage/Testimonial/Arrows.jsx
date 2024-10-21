import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function NextArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} block z-10`}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

export function PrevArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} block z-10`}
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}
