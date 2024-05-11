import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltRounds = 10;

    const passwordHashed = await hash(createUserDto.password, saltRounds);

    return this.repository.create({
      ...createUserDto,
      password: passwordHashed,
    });
  }

  async findAllUsers(): Promise<UserEntity[]> {
    return this.repository.findAll();
  }
}
