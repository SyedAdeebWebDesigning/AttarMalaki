import { z } from 'zod';

export const AddressScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'label',
  'street',
  'city',
  'state',
  'country',
  'zipCode',
  'createdAt',
  'updatedAt',
]);
