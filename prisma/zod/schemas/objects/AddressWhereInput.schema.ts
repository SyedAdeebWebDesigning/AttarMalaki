import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { userWhereInputObjectSchema } from './userWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AddressWhereInputObjectSchema),
        z.lazy(() => AddressWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AddressWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AddressWhereInputObjectSchema),
        z.lazy(() => AddressWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    label: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    street: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    city: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    state: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    country: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    zipCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => userWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const AddressWhereInputObjectSchema = Schema;
