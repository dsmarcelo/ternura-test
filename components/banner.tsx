import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative mx-auto mb-6 aspect-[2/1] w-full max-w-7xl overflow-hidden sm:aspect-[4/1] sm:rounded-3xl sm:px-6">
      <Image
        src="/images/ternura-banner-3x1.jpg"
        alt="Banner"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
