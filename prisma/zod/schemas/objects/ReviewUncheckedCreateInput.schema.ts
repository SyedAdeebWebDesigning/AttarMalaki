import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    productId: z.string(),
    rating: z.number(),
    comment: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
  })
  .strict();

export const ReviewUncheckedCreateInputObjectSchema = Schema;
