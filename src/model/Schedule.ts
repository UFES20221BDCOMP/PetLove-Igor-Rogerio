/* import { Expose } from 'class-transformer';
import {
  Column, CreateDateColumn, Entity, PrimaryColumn,
} from 'typeorm'; */
import { v4 as uuidV4 } from 'uuid';

// @Entity('person')
class Schedule {
  // @PrimaryColumn()
  id: string;

  // @Column()
  owner: string;

  // @Column()
  animal: string;

  // @Column()
  service: number;

  // @Column()
  date: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Schedule };
