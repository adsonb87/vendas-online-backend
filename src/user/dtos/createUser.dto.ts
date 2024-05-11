import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../interfaces/user.entity';
import { IsNotEmpty, IsNumber, IsString, maxLength } from 'class-validator';

export class CreateUserDto extends UserEntity {
  @ApiProperty({
    example: 'Nome',
    description: 'Nome do usuário',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'email@mail.com',
    description: 'E-mail do usuário',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '81-999999999',
    description: 'Telefone do usuário',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    example: '000.000.000-00',
    description: 'CPF do usuário',
  })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({
    example: '#######',
    description: 'Senha do usuário',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 1,
    description: 'Tipo do usuário',
  })
  @IsNumber()
  @IsNotEmpty()
  type_user: number;
}
