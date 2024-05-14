import { ApiProperty } from '@nestjs/swagger';
import { AddressEntity } from '../interfaces/address.entity';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAddressDto extends AddressEntity {
  @ApiProperty({
    example: 'complement',
    description: 'Endereço',
  })
  @IsString()
  @IsNotEmpty()
  complement: string;

  @ApiProperty({
    example: 0,
    description: 'Número do endereço',
  })
  @IsString()
  @IsNotEmpty()
  number: number;

  @ApiProperty({
    example: '##.###-###',
    description: 'Cep do endereço',
  })
  @IsString()
  @IsNotEmpty()
  cep: string;

  @ApiProperty({
    example: 0,
    description: 'Id do usuário',
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    example: 0,
    description: 'Id da cidade',
  })
  @IsString()
  @IsNotEmpty()
  cityId: number;
}
