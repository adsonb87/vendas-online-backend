import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
export declare class StateController {
    private readonly stateService;
    constructor(stateService: StateService);
    create(createStateDto: CreateStateDto): Promise<import("./interfaces/state.entity").StateEntity>;
    findAll(): Promise<import("./interfaces/state.entity").StateEntity[]>;
    findOne(id: string): Promise<import("./interfaces/state.entity").StateEntity>;
    update(id: string, updateStateDto: UpdateStateDto): Promise<import("./interfaces/state.entity").StateEntity>;
    remove(id: string): Promise<{
        message: string;
        result: import("./interfaces/state.entity").StateEntity;
    }>;
}
