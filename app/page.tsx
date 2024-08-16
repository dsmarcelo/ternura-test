import Banner from 'components/banner';
import Footer from 'components/layout/footer';
import { ProductCarousel } from 'components/product/product-carousel';
import ProductGrid from 'components/product/product-grid';
import { fakeProducts } from 'lib/fakerData/fake-products';

export const metadata = {
  description: 'Laços em forma de amor',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  // const products =
  //   process.env.NODE_ENV === 'production'
  //     ? await getCollectionProducts({ collection: 'hidden-homepage-carousel' })
  //     : fakeProducts();
  const products = fakeProducts();
  return (
    <div className="flex min-h-screen flex-col gap-4 px-6">
      <Banner />
      <ProductGrid />
      <ProductCarousel
        products={products}
        settings={{ loop: true, autoplay: { delay: 3000, disableOnInteraction: true } }}
      />
      <Footer />
    </div>
  );
}
