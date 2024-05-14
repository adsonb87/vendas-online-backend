import { AddressEntity } from '../interfaces/address.entity';

export class CreateAddressDto extends AddressEntity {
  complement: string;
  number: number;
  cep: string;
  userId: number;
  cityId: number;
}
