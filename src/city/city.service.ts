import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { CityRepository } from './repository/city.repository';
import { CityEntity } from './interfaces/city.entity';

@Injectable()
export class CityService {
  constructor(private readonly repository: CityRepository) {}

  async create(createCityDto: CreateCityDto): Promise<CityEntity> {
    return await this.repository.create(createCityDto);
  }

  async findAll(): Promise<CityEntity[]> {
    return await this.repository.findAll();
  }

  async findOne(id: number): Promise<CityEntity> {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<CityEntity> {
    //const { state, ...city } = updateCityDto;
    return await this.repository.update(id, updateCityDto);
  }

  async remove(id: number): Promise<CityEntity> {
    return await this.repository.remove(id);
  }
}
