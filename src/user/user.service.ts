import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";
import { User } from "./intefaces/user.interface";

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    this.users.push({
      ...createUserDto,
      id: this.users.length + 1,
    });

    return {
      ...createUserDto,
      id: this.users.length,
    };
  }

  async findAllUsers() {
    const retornoMap = this.users.map((user) => {
      return {
        ...user,
        password: undefined,
      };
    });
    return retornoMap;
  }
}
