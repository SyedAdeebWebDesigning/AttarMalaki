import { z } from 'zod';
import { AddressCreateNestedManyWithoutUserInputObjectSchema } from './AddressCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userCreateWithoutReviewInput> = z
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
      .lazy(() => AddressCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const userCreateWithoutReviewInputObjectSchema = Schema;
