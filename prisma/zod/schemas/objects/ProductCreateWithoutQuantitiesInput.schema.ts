import { z } from 'zod';
import { ProductCreatetagsInputObjectSchema } from './ProductCreatetagsInput.schema';
import { ReviewCreateNestedManyWithoutProductInputObjectSchema } from './ReviewCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutQuantitiesInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string(),
    name: z.string(),
    description: z.string(),
    shortDescription: z.string().optional().nullable(),
    category: z.string(),
    tags: z
      .union([
        z.lazy(() => ProductCreatetagsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    image: z.string(),
    rating: z.number().optional().nullable(),
    reviewsCount: z.number().optional().nullable(),
    isFeatured: z.boolean().optional(),
    isBestSeller: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Review: z
      .lazy(() => ReviewCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductCreateWithoutQuantitiesInputObjectSchema = Schema;
