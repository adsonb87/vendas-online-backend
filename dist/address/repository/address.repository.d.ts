import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from '../dto/create-address.dto';
import { AddressEntity } from '../interfaces/address.entity';
import { UpdateAddressDto } from '../dto/update-address.dto';
export declare class AddressRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(address: CreateAddressDto): Promise<AddressEntity>;
    findAll(): Promise<AddressEntity[]>;
    findOne(id: number): Promise<AddressEntity>;
    update(id: number, updateAddressDto: UpdateAddressDto): Promise<AddressEntity>;
    remove(id: number): Promise<AddressEntity>;
}
