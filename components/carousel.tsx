import { fakeProducts } from 'lib/fakerData/fake-products';
import { getCollectionProducts } from 'lib/shopify';
import ProductCard from './product/product-card';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  //TODO: Translate collection name in shopify

  const products =
    process.env.NODE_ENV === 'production'
      ? await getCollectionProducts({ collection: 'hidden-homepage-carousel' })
      : fakeProducts();

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className=" w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li key={`${product.handle}${i}`} className="md:w-48 lg:w-60">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
