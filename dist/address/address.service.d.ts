import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressRepository } from './repository/address.repository';
import { AddressEntity } from './interfaces/address.entity';
export declare class AddressService {
    private readonly repository;
    constructor(repository: AddressRepository);
    create(createAddressDto: CreateAddressDto): Promise<AddressEntity>;
    findAll(): Promise<AddressEntity[]>;
    findOne(id: number): Promise<AddressEntity>;
    update(id: number, updateAddressDto: UpdateAddressDto): Promise<AddressEntity>;
    remove(id: number): Promise<AddressEntity>;
}
