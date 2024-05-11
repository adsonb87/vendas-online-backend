import { StateEntity } from '../interfaces/state.entity';

export class CreateStateDto extends StateEntity {
  name: string;
  uf: string;
  createdAt: Date;
  updatedAt: Date;
}
