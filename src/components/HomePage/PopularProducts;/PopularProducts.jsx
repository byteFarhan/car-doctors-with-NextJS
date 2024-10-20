import SectionIntro from "@/components/SectionIntro/SectionIntro";
import ProductCard from "./ProductCard";

const PopularProducts = async () => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/popular-products`
  );
  const products = await resp.json();
  //   console.log(products);
  return (
    <>
      <section id="popularProducts" className="my-40">
        <SectionIntro
          sectionCategory="Popular Products"
          sectionTitle="Browse Our Products"
          sectionDescription="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products &&
            products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <button className="block mx-auto my-10 btn-transparent btn-transparent-red">
          More Products
        </button>
      </section>
    </>
  );
};

export default PopularProducts;
