import { z } from 'zod';
import { userCreateWithoutReviewInputObjectSchema } from './userCreateWithoutReviewInput.schema';
import { userUncheckedCreateWithoutReviewInputObjectSchema } from './userUncheckedCreateWithoutReviewInput.schema';
import { userCreateOrConnectWithoutReviewInputObjectSchema } from './userCreateOrConnectWithoutReviewInput.schema';
import { userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userCreateNestedOneWithoutReviewInput> = z
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
    connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const userCreateNestedOneWithoutReviewInputObjectSchema = Schema;
