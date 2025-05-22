import { z } from 'zod';
import { ProductCreateNestedOneWithoutReviewInputObjectSchema } from './ProductCreateNestedOneWithoutReviewInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    rating: z.number(),
    comment: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
    product: z.lazy(() => ProductCreateNestedOneWithoutReviewInputObjectSchema),
  })
  .strict();

export const ReviewCreateWithoutUserInputObjectSchema = Schema;
