import { z } from 'zod';
import { userCreateWithoutAddressesInputObjectSchema } from './userCreateWithoutAddressesInput.schema';
import { userUncheckedCreateWithoutAddressesInputObjectSchema } from './userUncheckedCreateWithoutAddressesInput.schema';
import { userCreateOrConnectWithoutAddressesInputObjectSchema } from './userCreateOrConnectWithoutAddressesInput.schema';
import { userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userCreateNestedOneWithoutAddressesInput> = z
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
    connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const userCreateNestedOneWithoutAddressesInputObjectSchema = Schema;
