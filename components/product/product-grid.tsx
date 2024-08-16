import { fakeProducts } from 'lib/fakerData/fake-products';
import { getCollectionProducts } from 'lib/shopify';
import ProductCard from './product-card';

export default async function ProductGrid() {
  const products =
    process.env.NODE_ENV === 'production'
      ? await getCollectionProducts({ collection: 'hidden-homepage-carousel' })
      : fakeProducts();

  if (!products?.length) return null;

  return (
    <div className="mx-auto mb-8 grid w-full max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.slice(0, 10).map((product, i) => (
        <ProductCard key={`${product.handle}${i}`} product={product} />
      ))}
    </div>
  );
}
