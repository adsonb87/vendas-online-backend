import { State } from '@prisma/client';
export declare class StateEntity implements State {
    id: number;
    name: string;
    uf: string;
    createdAt: Date;
    updatedAt: Date;
}
