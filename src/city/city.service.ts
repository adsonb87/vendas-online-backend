import { Injectable } from '@nestjs/common';
import { CityRepository } from './repository/city.repository';
import { CityEntity } from './interfaces/city.entity';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {
  constructor(
    private readonly repository: CityRepository,
    private readonly cacheService: CacheService,
  ) {}

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

  async findCityForState(id: number): Promise<CityEntity[]> {
    return this.cacheService.getCache<CityEntity[]>(`state_${id}`, () =>
      this.repository.findCityForState(id),
    );
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
