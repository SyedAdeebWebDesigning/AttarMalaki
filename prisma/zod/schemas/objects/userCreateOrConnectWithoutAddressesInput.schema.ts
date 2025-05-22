import { z } from 'zod';
import { userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userCreateWithoutAddressesInputObjectSchema } from './userCreateWithoutAddressesInput.schema';
import { userUncheckedCreateWithoutAddressesInputObjectSchema } from './userUncheckedCreateWithoutAddressesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userCreateOrConnectWithoutAddressesInput> = z
  .object({
    where: z.lazy(() => userWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => userCreateWithoutAddressesInputObjectSchema),
      z.lazy(() => userUncheckedCreateWithoutAddressesInputObjectSchema),
    ]),
  })
  .strict();

export const userCreateOrConnectWithoutAddressesInputObjectSchema = Schema;
