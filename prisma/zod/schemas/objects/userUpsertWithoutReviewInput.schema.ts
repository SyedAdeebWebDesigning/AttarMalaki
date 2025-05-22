import { z } from 'zod';
import { userUpdateWithoutReviewInputObjectSchema } from './userUpdateWithoutReviewInput.schema';
import { userUncheckedUpdateWithoutReviewInputObjectSchema } from './userUncheckedUpdateWithoutReviewInput.schema';
import { userCreateWithoutReviewInputObjectSchema } from './userCreateWithoutReviewInput.schema';
import { userUncheckedCreateWithoutReviewInputObjectSchema } from './userUncheckedCreateWithoutReviewInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userUpsertWithoutReviewInput> = z
  .object({
    update: z.union([
      z.lazy(() => userUpdateWithoutReviewInputObjectSchema),
      z.lazy(() => userUncheckedUpdateWithoutReviewInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => userCreateWithoutReviewInputObjectSchema),
      z.lazy(() => userUncheckedCreateWithoutReviewInputObjectSchema),
    ]),
  })
  .strict();

export const userUpsertWithoutReviewInputObjectSchema = Schema;
