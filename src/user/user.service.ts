import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';
import { UserRepository } from './repository/user.repository';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const passwordHashed = await this.hashPassword(createUserDto.password);

    return await this.repository.create({
      ...createUserDto,
      password: passwordHashed,
    });
  }

  async findAllUsers(): Promise<UserEntity[]> {
    return await this.repository.findAll();
  }

  async findOne(id: number): Promise<UserEntity> {
    return await this.repository.findOne(id);
  }

  async update(id: number, user: UpdateUserDto): Promise<UserEntity> {
    if (user.password) {
      const passwordHashed = await this.hashPassword(user.password);
      user.password = passwordHashed;
    }

    return await this.repository.update(id, user);
  }

  async delete(id: number): Promise<UserEntity> {
    return await this.repository.delete(id);
  }

  async hashPassword(password: string) {
    const saltRounds = 10;
    const passwordHashed = await hash(password, saltRounds);

    return passwordHashed;
  }
}
