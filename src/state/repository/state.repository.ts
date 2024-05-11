import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStateDto } from '../dto/create-state.dto';
import { StateEntity } from '../interfaces/state.entity';
import { UpdateStateDto } from '../dto/update-state.dto';

@Injectable()
export class StateRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(state: CreateStateDto): Promise<StateEntity> {
    return await this.prisma.state.create({
      data: state,
    });
  }

  async findAll(): Promise<StateEntity[]> {
    return await this.prisma.state.findMany();
  }

  async findOne(id): Promise<StateEntity> {
    return await this.prisma.state.findUnique({
      where: { id },
    });
  }

  async findStateCity(id: number): Promise<StateEntity> {
    return await this.prisma.state.findUnique({
      where: { id },
      include: { city: true },
    });
  }

  async update(id: number, state: UpdateStateDto): Promise<StateEntity> {
    return await this.prisma.state.update({
      where: { id },
      data: state,
    });
  }

  async remove(id: number): Promise<StateEntity> {
    return await this.prisma.state.delete({
      where: { id },
    });
  }
}
