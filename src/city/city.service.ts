import { Injectable } from '@nestjs/common';
import { CityRepository } from './repository/city.repository';
import { CityEntity } from './interfaces/city.entity';

@Injectable()
export class CityService {
  constructor(private readonly repository: CityRepository) {}

  async create(createCityDto): Promise<CityEntity> {
    const { state, ...city } = createCityDto;

    return await this.repository.create(city, state);
  }

  async findAll(): Promise<CityEntity[]> {
    return await this.repository.findAll();
  }

  async findOne(id: number): Promise<CityEntity> {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateCityDto): Promise<CityEntity> {
    const { state, ...city } = updateCityDto;

    if (!state) {
      return await this.repository.updateCity(id, city);
    } else {
      return await this.repository.updateCityState(id, city, state);
    }

    //return await this.repository.update(id, city, state);
  }

  async remove(id: number): Promise<CityEntity> {
    return await this.repository.remove(id);
  }
}
