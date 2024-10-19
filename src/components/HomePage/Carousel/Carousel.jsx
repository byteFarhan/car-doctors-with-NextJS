// import img1 from "../../../assets/images/banner/5.jpg";
// import img2 from "../../../assets/images/banner/1.jpg";
// import img3 from "../../../assets/images/banner/2.jpg";
// import img4 from "../../../assets/images/banner/3.jpg";
// import img5 from "../../../assets/images/banner/4.jpg";
// import img6 from "../../../assets/images/banner/6.jpg";
import carouselItems from "../../../../public/data/carouselItems";
import CarouselItem from "./CarouselItem/CarouselItem";

const Carousel = () => {
  return (
    <>
      <section className="w-full my-5 text-white rounded-md md:rounded-xl carousel p-0 lg:max-h-[700px]">
        {carouselItems &&
          carouselItems.map((item) => (
            <CarouselItem
              key={item.sliderNo}
              sliderNo={item.sliderNo}
              img={item.img}
              title={item.title}
              description={item.description}
              rightBtnText={item.rightBtnText}
              rightBtnPath={item.rightBtnPath}
              leftBtnText={item.leftBtnText}
              leftBtnPath={item.leftBtnPath}
              rightSlideIconPath={item.rightSlideIconPath}
              leftSlideIconPath={item.leftSlideIconPath}
            />
          ))}
      </section>
    </>
  );
};

export default Carousel;
