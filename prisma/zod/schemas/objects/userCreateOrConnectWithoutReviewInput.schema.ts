import { z } from 'zod';
import { userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userCreateWithoutReviewInputObjectSchema } from './userCreateWithoutReviewInput.schema';
import { userUncheckedCreateWithoutReviewInputObjectSchema } from './userUncheckedCreateWithoutReviewInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userCreateOrConnectWithoutReviewInput> = z
  .object({
    where: z.lazy(() => userWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => userCreateWithoutReviewInputObjectSchema),
      z.lazy(() => userUncheckedCreateWithoutReviewInputObjectSchema),
    ]),
  })
  .strict();

export const userCreateOrConnectWithoutReviewInputObjectSchema = Schema;
