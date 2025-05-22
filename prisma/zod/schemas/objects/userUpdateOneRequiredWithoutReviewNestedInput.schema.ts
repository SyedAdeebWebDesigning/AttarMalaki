import { z } from 'zod';
import { userCreateWithoutReviewInputObjectSchema } from './userCreateWithoutReviewInput.schema';
import { userUncheckedCreateWithoutReviewInputObjectSchema } from './userUncheckedCreateWithoutReviewInput.schema';
import { userCreateOrConnectWithoutReviewInputObjectSchema } from './userCreateOrConnectWithoutReviewInput.schema';
import { userUpsertWithoutReviewInputObjectSchema } from './userUpsertWithoutReviewInput.schema';
import { userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateWithoutReviewInputObjectSchema } from './userUpdateWithoutReviewInput.schema';
import { userUncheckedUpdateWithoutReviewInputObjectSchema } from './userUncheckedUpdateWithoutReviewInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userUpdateOneRequiredWithoutReviewNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => userCreateWithoutReviewInputObjectSchema),
          z.lazy(() => userUncheckedCreateWithoutReviewInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => userCreateOrConnectWithoutReviewInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => userUpsertWithoutReviewInputObjectSchema).optional(),
      connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => userUpdateWithoutReviewInputObjectSchema),
          z.lazy(() => userUncheckedUpdateWithoutReviewInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const userUpdateOneRequiredWithoutReviewNestedInputObjectSchema = Schema;
