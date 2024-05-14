import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CityEntity } from '../interfaces/city.entity';

@Injectable()
export class CityRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(city, state): Promise<CityEntity> {
    return await this.prisma.city.create({
      data: {
        ...city,
        state: {
          connect: {
            name: state.name,
          },
        },
      },
      include: { state: true },
    });
  }

  async findAll(): Promise<CityEntity[]> {
    return await this.prisma.city.findMany();
  }

  async findOne(id: number): Promise<CityEntity> {
    return await this.prisma.city.findUnique({
      where: { id },
      include: { state: true },
    });
  }

  async updateCity(id: number, city): Promise<CityEntity> {
    return await this.prisma.city.update({
      where: { id },
      data: {
        ...city,
      },
      include: { state: true },
    });
  }

  async updateCityState(id: number, city, state): Promise<CityEntity> {
    return await this.prisma.city.update({
      where: { id },
      data: {
        ...city,
        state: {
          connect: {
            name: state.name,
          },
        },
      },
      include: { state: true },
    });
  }

  async remove(id: number): Promise<CityEntity> {
    return await this.prisma.city.delete({ where: { id } });
  }
}
