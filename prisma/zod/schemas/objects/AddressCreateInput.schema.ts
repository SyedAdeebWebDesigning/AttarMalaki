import { z } from 'zod';
import { userCreateNestedOneWithoutAddressesInputObjectSchema } from './userCreateNestedOneWithoutAddressesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressCreateInput> = z
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
    user: z.lazy(() => userCreateNestedOneWithoutAddressesInputObjectSchema),
  })
  .strict();

export const AddressCreateInputObjectSchema = Schema;
