import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produto/${product.handle}`}
      className="flex w-full min-w-32 max-w-96 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white p-3 pb-2 hover:border-primary-500 focus:bg-primary-100"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          unoptimized
          alt={product.title}
          src={product.featuredImage?.url}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          fill
          className="rounded-md"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        />
      </div>
      <div className="mt-2 flex flex-col gap-1">
        <p className="h-10 overflow-clip text-ellipsis text-sm">{product.title}</p>
        <p className="text-sm font-medium">
          {`${new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(parseFloat(product.priceRange.maxVariantPrice.amount))}`}
        </p>
      </div>
    </Link>
  );
}
