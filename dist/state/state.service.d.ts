import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { StateRepository } from './repository/state.repository';
import { StateEntity } from './interfaces/state.entity';
export declare class StateService {
    private readonly repository;
    constructor(repository: StateRepository);
    create(createStateDto: CreateStateDto): Promise<StateEntity>;
    findAll(): Promise<StateEntity[]>;
    findStateCity(id: number): Promise<StateEntity>;
    findOne(id: number): Promise<StateEntity>;
    update(id: number, updateStateDto: UpdateStateDto): Promise<StateEntity>;
    remove(id: number): Promise<StateEntity>;
}
