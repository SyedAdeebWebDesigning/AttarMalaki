import { z } from 'zod';
import { ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';
import { ReviewUpdateManyMutationInputObjectSchema } from './ReviewUpdateManyMutationInput.schema';
import { ReviewUncheckedUpdateManyWithoutReviewInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutReviewInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => ReviewScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ReviewUpdateManyMutationInputObjectSchema),
      z.lazy(() => ReviewUncheckedUpdateManyWithoutReviewInputObjectSchema),
    ]),
  })
  .strict();

export const ReviewUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
