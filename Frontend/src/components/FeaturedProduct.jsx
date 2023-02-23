import useProductContext from "../hooks/useProductContext";
import Product from "./Product";

export default function FeaturedProduct() {
  const { featuredProducts, isLoading } = useProductContext();

  return (
    <section className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto my-20 md:my-28">
        <h1 className="text-2xl text-center mb-9 font-bold md:text-4xl md:mb-12">
          Featured Products
        </h1>
        <div>
          {isLoading ? (
            <div>Loading Data</div>
          ) : (
            <div className="grid gap-4 grid-cols-1 max-w-xs mx-auto md:grid-cols-3 md:gap-8 md:max-w-5xl">
              {featuredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}