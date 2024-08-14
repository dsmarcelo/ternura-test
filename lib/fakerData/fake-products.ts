import { fakerPT_BR as faker } from '@faker-js/faker';
import { Product, ShopifyProduct } from 'lib/shopify/types';

export function generateFakeShopifyProduct(): ShopifyProduct {
  return {
    id: faker.number.int.toString(),
    handle: faker.commerce.productAdjective(),
    availableForSale: true,
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    featuredImage: {
      url: `/images/products/${Math.floor(Math.random() * 4) + 1}.png`,
      width: 200,
      height: 200,
      altText: 'randomImage'
    },
    images: {
      edges: [
        {
          node: {
            url: `/images/products/${Math.floor(Math.random() * 4) + 1}.png`,
            width: 200,
            height: 200,
            altText: 'randomImage'
          }
        }
      ]
    },
    priceRange: {
      maxVariantPrice: {
        amount: faker.commerce.price({ min: 10, max: 400 }),
        currencyCode: 'BRL'
      },
      minVariantPrice: {
        amount: faker.commerce.price({ min: 90, max: 500 }),
        currencyCode: 'BRL'
      }
    },
    seo: {
      title: '',
      description: ''
    },
    tags: [''],
    variants: {
      edges: []
    },
    descriptionHtml: faker.commerce.productDescription(),
    options: [
      {
        id: faker.number.int.toString(),
        name: faker.commerce.productName(),
        values: [faker.commerce.productMaterial()]
      }
    ],
    updatedAt: faker.date.anytime().toDateString()
  };
}

export function generateFakeProduct(): Product {
  return {
    id: faker.number.int.toString(),
    handle: faker.commerce.productAdjective(),
    availableForSale: true,
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    featuredImage: {
      url: `/images/products/${Math.floor(Math.random() * 4) + 1}.png`,
      width: 200,
      height: 200,
      altText: 'randomImage'
    },
    images: [
      {
        url: `/images/products/${Math.floor(Math.random() * 4) + 1}.png`,
        width: 200,
        height: 200,
        altText: 'randomImage'
      },
      {
        url: `/images/products/${Math.floor(Math.random() * 4) + 1}.png`,
        width: 200,
        height: 200,
        altText: 'randomImage'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: faker.commerce.price({ min: 10, max: 400 }),
        currencyCode: 'BRL'
      },
      minVariantPrice: {
        amount: faker.commerce.price({ min: 90, max: 500 }),
        currencyCode: 'BRL'
      }
    },
    seo: {
      title: '',
      description: ''
    },
    tags: [''],
    variants: [],
    descriptionHtml: faker.commerce.productDescription(),
    options: [
      {
        id: faker.number.int.toString(),
        name: faker.commerce.productName(),
        values: [faker.commerce.productMaterial()]
      }
    ],
    updatedAt: faker.date.anytime().toDateString()
  };
}

export const fakeProduct = generateFakeProduct();

export const fakeShopifyProduct = generateFakeShopifyProduct();

export const fakeProducts = (quantity: number = 20) =>
  Array.from({ length: quantity }, () => generateFakeProduct());

export const fakeShopifyProducts = (quantity: number = 20) =>
  Array.from({ length: quantity }, () => generateFakeShopifyProduct());
