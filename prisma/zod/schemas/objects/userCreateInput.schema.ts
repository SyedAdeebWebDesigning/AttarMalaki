import { z } from 'zod';
import { AddressCreateNestedManyWithoutUserInputObjectSchema } from './AddressCreateNestedManyWithoutUserInput.schema';
import { ReviewCreateNestedManyWithoutUserInputObjectSchema } from './ReviewCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userCreateInput> = z
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
    Review: z
      .lazy(() => ReviewCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const userCreateInputObjectSchema = Schema;
