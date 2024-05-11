import { StateEntity } from '../interfaces/state.entity';
export declare class CreateStateDto extends StateEntity {
    name: string;
    uf: string;
    createdAt: Date;
    updatedAt: Date;
}
