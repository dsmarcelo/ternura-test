import Banner from 'components/banner';
import { Carousel } from 'components/carousel';
import Footer from 'components/layout/footer';
import ProductGrid from 'components/product/product-grid';

export const metadata = {
  description: 'Laços em forma de amor',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Banner />
      <ProductGrid />
      <Carousel />
      <Footer />
    </>
  );
}
