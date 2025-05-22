import { z } from 'zod';
import { userCreateWithoutAddressesInputObjectSchema } from './userCreateWithoutAddressesInput.schema';
import { userUncheckedCreateWithoutAddressesInputObjectSchema } from './userUncheckedCreateWithoutAddressesInput.schema';
import { userCreateOrConnectWithoutAddressesInputObjectSchema } from './userCreateOrConnectWithoutAddressesInput.schema';
import { userUpsertWithoutAddressesInputObjectSchema } from './userUpsertWithoutAddressesInput.schema';
import { userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateWithoutAddressesInputObjectSchema } from './userUpdateWithoutAddressesInput.schema';
import { userUncheckedUpdateWithoutAddressesInputObjectSchema } from './userUncheckedUpdateWithoutAddressesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userUpdateOneRequiredWithoutAddressesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => userCreateWithoutAddressesInputObjectSchema),
          z.lazy(() => userUncheckedCreateWithoutAddressesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => userCreateOrConnectWithoutAddressesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => userUpsertWithoutAddressesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => userUpdateWithoutAddressesInputObjectSchema),
          z.lazy(() => userUncheckedUpdateWithoutAddressesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const userUpdateOneRequiredWithoutAddressesNestedInputObjectSchema =
  Schema;
