import { z } from 'zod';
import { userCreateNestedOneWithoutReviewInputObjectSchema } from './userCreateNestedOneWithoutReviewInput.schema';
import { ProductCreateNestedOneWithoutReviewInputObjectSchema } from './ProductCreateNestedOneWithoutReviewInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateInput> = z
  .object({
    id: z.string().optional(),
    rating: z.number(),
    comment: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
    user: z.lazy(() => userCreateNestedOneWithoutReviewInputObjectSchema),
    product: z.lazy(() => ProductCreateNestedOneWithoutReviewInputObjectSchema),
  })
  .strict();

export const ReviewCreateInputObjectSchema = Schema;
