'use client';
import { Product } from 'lib/shopify/types';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import ProductCard from './product-card';

export function ProductCarousel({
  products,
  settings
}: {
  products: Product[];
  settings?: SwiperOptions;
}) {
  return (
    <Swiper
      modules={[Scrollbar, Autoplay]}
      {...settings}
      spaceBetween={16}
      breakpoints={{
        320: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 5
        }
      }}
      className="mx-auto w-full"
    >
      {products.map((product, i) => (
        <SwiperSlide key={i}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
