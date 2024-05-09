import { UserEntity } from '../intefaces/user.entity';
export declare class CreateUserDto extends UserEntity {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
    type_user: number;
}
