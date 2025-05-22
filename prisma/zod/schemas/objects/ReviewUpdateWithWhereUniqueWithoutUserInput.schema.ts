import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutUserInputObjectSchema } from './ReviewUpdateWithoutUserInput.schema';
import { ReviewUncheckedUpdateWithoutUserInputObjectSchema } from './ReviewUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ReviewUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ReviewUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ReviewUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
