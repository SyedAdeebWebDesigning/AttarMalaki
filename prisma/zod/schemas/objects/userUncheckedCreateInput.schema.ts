import { z } from 'zod';
import { AddressUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AddressUncheckedCreateNestedManyWithoutUserInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    clerkId: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    isAdmin: z.boolean().optional(),
    imgUrl: z.string(),
    hasCompletedAddresses: z.boolean().optional(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
    addresses: z
      .lazy(() => AddressUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Review: z
      .lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const userUncheckedCreateInputObjectSchema = Schema;
