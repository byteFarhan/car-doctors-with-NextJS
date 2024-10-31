import Image from "next/image";
import notFoundImg from "@/../public/assets/not-found.png";

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <Image
          src={notFoundImg}
          alt="Not found img"
          className="px-5 md:px-0 md:size-[500px] object-cover bg-blend-multiply lg:h-[calc(100%-420px)]"
        />
      </div>
    </>
  );
};

export default NotFound;
