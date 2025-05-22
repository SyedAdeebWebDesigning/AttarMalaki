import { z } from 'zod';
import { ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewListRelationFilter> = z
  .object({
    every: z.lazy(() => ReviewWhereInputObjectSchema).optional(),
    some: z.lazy(() => ReviewWhereInputObjectSchema).optional(),
    none: z.lazy(() => ReviewWhereInputObjectSchema).optional(),
  })
  .strict();

export const ReviewListRelationFilterObjectSchema = Schema;
