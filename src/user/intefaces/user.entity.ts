import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
  type_user: number;
  createdAt: Date;
  updatedAt: Date;
}
