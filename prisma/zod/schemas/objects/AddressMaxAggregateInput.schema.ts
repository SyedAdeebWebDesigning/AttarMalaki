import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    label: z.literal(true).optional(),
    street: z.literal(true).optional(),
    city: z.literal(true).optional(),
    state: z.literal(true).optional(),
    country: z.literal(true).optional(),
    zipCode: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const AddressMaxAggregateInputObjectSchema = Schema;
