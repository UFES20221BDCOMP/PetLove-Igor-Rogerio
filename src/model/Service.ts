/* import { Expose } from 'class-transformer';
import {
  Column, CreateDateColumn, Entity, PrimaryColumn,
} from 'typeorm'; */
import { v4 as uuidV4 } from 'uuid';

// @Entity('person')
class Service {
  // @PrimaryColumn()
  id: string;

  // @Column()
  name: string;

  // @Column()
  value: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Service };
