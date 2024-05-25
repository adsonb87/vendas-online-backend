import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { StateRepository } from './repository/state.repository';
import { StateEntity } from './interfaces/state.entity';

@Injectable()
export class StateService {
  constructor(private readonly repository: StateRepository) {}

  async create(createStateDto: CreateStateDto): Promise<StateEntity> {
    return await this.repository.create(createStateDto);
  }

  async findAll(): Promise<StateEntity[]> {
    return await this.repository.findAll();
  }

  async findOne(id: number): Promise<StateEntity> {
    return await this.repository.findOne(id);
  }

  async update(
    id: number,
    updateStateDto: UpdateStateDto,
  ): Promise<StateEntity> {
    return await this.repository.update(id, updateStateDto);
  }

  async remove(id: number): Promise<StateEntity> {
    return await this.repository.remove(id);
  }
}
