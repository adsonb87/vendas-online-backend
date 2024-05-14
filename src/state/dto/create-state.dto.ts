import { ApiProperty } from '@nestjs/swagger';
import { StateEntity } from '../interfaces/state.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStateDto extends StateEntity {
  @ApiProperty({
    example: 'State',
    description: 'Estado',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'UF',
    description: 'Sigla UF',
  })
  @IsString()
  @IsNotEmpty()
  uf: string;
}
