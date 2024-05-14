import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCityDto } from '../dto/create-city.dto';
import { CityEntity } from '../interfaces/city.entity';
import { UpdateCityDto } from '../dto/update-city.dto';
import { connect } from 'http2';

@Injectable()
export class CityRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCityDto: CreateCityDto): Promise<CityEntity> {
    return await this.prisma.city.create({ data: createCityDto });
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

  async update(id: number, city: UpdateCityDto): Promise<CityEntity> {
    // return await this.prisma.city.update({
    //   where: { id },
    //   data: {
    //     ...city,
    //     state: {
    //       connect: {
    //         name: state.name,
    //       },
    //     },
    //   },
    // });
    return await this.prisma.city.update({
      where: { id },
      data: city,
    });
  }

  async remove(id: number): Promise<CityEntity> {
    return await this.prisma.city.delete({ where: { id } });
  }
}
