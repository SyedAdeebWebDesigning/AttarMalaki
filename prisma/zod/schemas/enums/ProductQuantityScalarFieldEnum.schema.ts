import { z } from 'zod';

export const ProductQuantityScalarFieldEnumSchema = z.enum([
  'id',
  'productId',
  'size',
  'price',
  'discountPrice',
  'stock',
]);
