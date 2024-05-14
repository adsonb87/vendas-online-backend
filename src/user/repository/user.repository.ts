import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from '../interfaces/user.entity';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: CreateUserDto): Promise<UserEntity> {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<UserEntity> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, user: UpdateUserDto): Promise<UserEntity> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: user,
    });
  }

  async delete(id: number): Promise<UserEntity> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
