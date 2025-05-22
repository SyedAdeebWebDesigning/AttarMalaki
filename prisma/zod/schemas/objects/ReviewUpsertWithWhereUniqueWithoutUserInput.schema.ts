import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutUserInputObjectSchema } from './ReviewUpdateWithoutUserInput.schema';
import { ReviewUncheckedUpdateWithoutUserInputObjectSchema } from './ReviewUncheckedUpdateWithoutUserInput.schema';
import { ReviewCreateWithoutUserInputObjectSchema } from './ReviewCreateWithoutUserInput.schema';
import { ReviewUncheckedCreateWithoutUserInputObjectSchema } from './ReviewUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ReviewUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ReviewUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ReviewCreateWithoutUserInputObjectSchema),
      z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ReviewUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
