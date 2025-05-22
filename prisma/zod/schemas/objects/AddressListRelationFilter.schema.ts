import { z } from 'zod';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressListRelationFilter> = z
  .object({
    every: z.lazy(() => AddressWhereInputObjectSchema).optional(),
    some: z.lazy(() => AddressWhereInputObjectSchema).optional(),
    none: z.lazy(() => AddressWhereInputObjectSchema).optional(),
  })
  .strict();

export const AddressListRelationFilterObjectSchema = Schema;
