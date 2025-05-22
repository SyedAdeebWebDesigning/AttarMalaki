import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { AddressListRelationFilterObjectSchema } from './AddressListRelationFilter.schema';
import { ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => userWhereInputObjectSchema),
        z.lazy(() => userWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => userWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => userWhereInputObjectSchema),
        z.lazy(() => userWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    clerkId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    firstName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    isAdmin: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    imgUrl: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    hasCompletedAddresses: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
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
    addresses: z.lazy(() => AddressListRelationFilterObjectSchema).optional(),
    Review: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const userWhereInputObjectSchema = Schema;
