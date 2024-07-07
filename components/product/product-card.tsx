import { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produto/${product.handle}`} className="min-w-36 w-full max-w-60 flex flex-col p-3 pb-2 bg-white rounded-xl border border-neutral-200 hover:border-primary-500 overflow-hidden">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          alt={product.title}
          src={product.featuredImage?.url}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
          fill
          className="rounded-md"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        />
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-sm h-10 text-ellipsis">{product.title}</p>
        <p className="text-sm font-medium">
          {`${new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: "BRL",
            currencyDisplay: 'narrowSymbol'
          }).format(parseFloat(product.priceRange.maxVariantPrice.amount))}`}
        </p>
      </div>
    </Link>
  )
}
