import Banner from 'components/banner';
import { Carousel } from 'components/carousel';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      {/* <ThreeItemGrid /> */}
      <Banner />
      <Carousel />
      <Footer />
    </>
  );
}
