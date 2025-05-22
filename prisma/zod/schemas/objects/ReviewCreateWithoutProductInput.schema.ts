import { z } from 'zod';
import { userCreateNestedOneWithoutReviewInputObjectSchema } from './userCreateNestedOneWithoutReviewInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    rating: z.number(),
    comment: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
    user: z.lazy(() => userCreateNestedOneWithoutReviewInputObjectSchema),
  })
  .strict();

export const ReviewCreateWithoutProductInputObjectSchema = Schema;
