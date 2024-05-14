import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressRepository } from './repository/address.repository';
import { AddressEntity } from './interfaces/address.entity';

@Injectable()
export class AddressService {
  constructor(private readonly repository: AddressRepository) {}

  async create(createAddressDto: CreateAddressDto): Promise<AddressEntity> {
    //const { city, userId, ...address } = createAddressDto;
    //return await this.repository.create(address, city, userId);
    return await this.repository.create(createAddressDto);
  }

  async findAll(): Promise<AddressEntity[]> {
    return await this.repository.findAll();
  }

  async findOne(id: number): Promise<AddressEntity> {
    return await this.repository.findOne(id);
  }

  async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
  ): Promise<AddressEntity> {
    return await this.repository.update(id, updateAddressDto);
  }

  async remove(id: number): Promise<AddressEntity> {
    return await this.repository.remove(id);
  }
}
