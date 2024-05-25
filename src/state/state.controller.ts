import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('State')
@Controller('/api/v1/state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Post()
  async create(@Body() createStateDto: CreateStateDto) {
    return await this.stateService.create(createStateDto);
  }

  @Get()
  async findAll() {
    return await this.stateService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.stateService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStateDto: UpdateStateDto,
  ) {
    return await this.stateService.update(+id, updateStateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {
      message: 'deletado',
      result: await this.stateService.remove(+id),
    };
  }
}
