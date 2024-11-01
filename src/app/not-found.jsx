import Image from "next/image";
import notFoundImg from "@/../public/assets/not-found.png";

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:h-[calc(100%-100px)]">
        <Image
          src={notFoundImg}
          alt="Not found img"
          className="px-5 md:px-0 md:h-[500px] w-auto object-cover bg-blend-multiply"
        />
      </div>
    </>
  );
};

export default NotFound;
