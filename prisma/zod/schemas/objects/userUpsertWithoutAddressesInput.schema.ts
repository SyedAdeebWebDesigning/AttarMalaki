import { z } from 'zod';
import { userUpdateWithoutAddressesInputObjectSchema } from './userUpdateWithoutAddressesInput.schema';
import { userUncheckedUpdateWithoutAddressesInputObjectSchema } from './userUncheckedUpdateWithoutAddressesInput.schema';
import { userCreateWithoutAddressesInputObjectSchema } from './userCreateWithoutAddressesInput.schema';
import { userUncheckedCreateWithoutAddressesInputObjectSchema } from './userUncheckedCreateWithoutAddressesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userUpsertWithoutAddressesInput> = z
  .object({
    update: z.union([
      z.lazy(() => userUpdateWithoutAddressesInputObjectSchema),
      z.lazy(() => userUncheckedUpdateWithoutAddressesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => userCreateWithoutAddressesInputObjectSchema),
      z.lazy(() => userUncheckedCreateWithoutAddressesInputObjectSchema),
    ]),
  })
  .strict();

export const userUpsertWithoutAddressesInputObjectSchema = Schema;
