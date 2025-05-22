import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'clerkId',
  'firstName',
  'lastName',
  'email',
  'isAdmin',
  'imgUrl',
  'hasCompletedAddresses',
  'createdAt',
  'updatedAt',
]);
