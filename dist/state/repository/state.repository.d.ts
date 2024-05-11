import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStateDto } from '../dto/create-state.dto';
import { StateEntity } from '../interfaces/state.entity';
import { UpdateStateDto } from '../dto/update-state.dto';
export declare class StateRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(state: CreateStateDto): Promise<StateEntity>;
    findAll(): Promise<StateEntity[]>;
    findOne(id: any): Promise<StateEntity>;
    findStateCity(id: number): Promise<StateEntity>;
    update(id: number, state: UpdateStateDto): Promise<StateEntity>;
    remove(id: number): Promise<StateEntity>;
}
