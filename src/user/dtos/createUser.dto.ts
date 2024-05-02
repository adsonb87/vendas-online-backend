import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "../intefaces/user.entity";

export interface CreateUserDto extends UserEntity {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
}
