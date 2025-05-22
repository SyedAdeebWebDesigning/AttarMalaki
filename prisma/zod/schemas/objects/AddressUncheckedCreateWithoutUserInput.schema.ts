import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    label: z.string(),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    zipCode: z.string(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
  })
  .strict();

export const AddressUncheckedCreateWithoutUserInputObjectSchema = Schema;
