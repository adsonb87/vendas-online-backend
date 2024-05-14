import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from '../dto/create-address.dto';
import { AddressEntity } from '../interfaces/address.entity';
import { UpdateAddressDto } from '../dto/update-address.dto';

@Injectable()
export class AddressRepository {
  constructor(private readonly prisma: PrismaService) {}

  //   async create(address, city, userId) {
  //     return await this.prisma.address.create({
  //       data: {
  //         ...address,
  //         city: {
  //           connect: {
  //             name: city.name,
  //           },
  //         },
  //         user: {
  //           connect: {
  //             id: userId,
  //           },
  //         },
  //       },
  //       include: {
  //         city: true,
  //         user: true,
  //       },
  //     });
  //   }

  async create(address: CreateAddressDto): Promise<AddressEntity> {
    return await this.prisma.address.create({
      data: address,
      include: {
        city: true,
        user: true,
      },
    });
  }

  async findAll(): Promise<AddressEntity[]> {
    return await this.prisma.address.findMany();
  }

  async findOne(id: number): Promise<AddressEntity> {
    return await this.prisma.address.findUnique({
      where: { id },
      include: {
        city: true,
        user: true,
      },
    });
  }

  async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
  ): Promise<AddressEntity> {
    return await this.prisma.address.update({
      where: { id },
      data: {
        ...updateAddressDto,
      },
      include: {
        city: true,
        user: true,
      },
    });
  }

  async remove(id: number): Promise<AddressEntity> {
    return await this.prisma.address.delete({
      where: { id },
      include: {
        city: true,
        user: true,
      },
    });
  }
}
