import { IsNotEmpty, IsString } from 'class-validator';
import { CityEntity } from '../interfaces/city.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto extends CityEntity {
  @ApiProperty({
    example: 'Nome',
    description: 'Nome da cidade',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 0,
    description: 'Estado',
  })
  stateId: number;
}
