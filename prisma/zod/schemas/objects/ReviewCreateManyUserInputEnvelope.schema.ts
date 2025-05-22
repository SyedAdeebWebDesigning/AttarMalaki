import { z } from 'zod';
import { ReviewCreateManyUserInputObjectSchema } from './ReviewCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReviewCreateManyUserInputObjectSchema),
      z.lazy(() => ReviewCreateManyUserInputObjectSchema).array(),
    ]),
  })
  .strict();

export const ReviewCreateManyUserInputEnvelopeObjectSchema = Schema;
