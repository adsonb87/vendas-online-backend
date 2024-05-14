import { AddressEntity } from '../interfaces/address.entity';
export declare class CreateAddressDto extends AddressEntity {
    complement: string;
    number: number;
    cep: string;
    userId: number;
    cityId: number;
}
