import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum([
  'id',
  'slug',
  'name',
  'description',
  'shortDescription',
  'category',
  'tags',
  'image',
  'rating',
  'reviewsCount',
  'isFeatured',
  'isBestSeller',
  'createdAt',
  'updatedAt',
]);
