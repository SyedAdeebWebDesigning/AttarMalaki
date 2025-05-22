import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutUserInputObjectSchema } from './ReviewCreateWithoutUserInput.schema';
import { ReviewUncheckedCreateWithoutUserInputObjectSchema } from './ReviewUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReviewCreateWithoutUserInputObjectSchema),
      z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ReviewCreateOrConnectWithoutUserInputObjectSchema = Schema;
