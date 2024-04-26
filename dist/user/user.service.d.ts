import { CreateUserDto } from "./dtos/createUser.dto";
import { User } from "./intefaces/user.interface";
export declare class UserService {
    private users;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAllUsers(): Promise<{
        password: any;
        id: number;
        name: string;
        email: string;
        phone: string;
        cpf: string;
    }[]>;
}
