import { z } from 'zod';
import { AddressScalarWhereInputObjectSchema } from './AddressScalarWhereInput.schema';
import { AddressUpdateManyMutationInputObjectSchema } from './AddressUpdateManyMutationInput.schema';
import { AddressUncheckedUpdateManyWithoutAddressesInputObjectSchema } from './AddressUncheckedUpdateManyWithoutAddressesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => AddressScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => AddressUpdateManyMutationInputObjectSchema),
      z.lazy(() => AddressUncheckedUpdateManyWithoutAddressesInputObjectSchema),
    ]),
  })
  .strict();

export const AddressUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
