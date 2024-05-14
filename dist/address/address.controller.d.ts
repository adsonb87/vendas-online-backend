import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(createAddressDto: CreateAddressDto): Promise<import("./interfaces/address.entity").AddressEntity>;
    findAll(): Promise<import("./interfaces/address.entity").AddressEntity[]>;
    findOne(id: string): Promise<import("./interfaces/address.entity").AddressEntity>;
    update(id: string, updateAddressDto: UpdateAddressDto): Promise<import("./interfaces/address.entity").AddressEntity>;
    remove(id: string): Promise<import("./interfaces/address.entity").AddressEntity>;
}
