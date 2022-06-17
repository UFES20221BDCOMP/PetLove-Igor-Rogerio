/* import { Expose } from 'class-transformer';
import {
  Column, CreateDateColumn, Entity, PrimaryColumn,
} from 'typeorm'; */
import { v4 as uuidV4 } from 'uuid';

// @Entity('person')
class Animal {
  // @PrimaryColumn()
  id: string;

  // @Column()
  name: string;

  // @Column()
  cost: number;

  // @Column()
  type: string;

  // @Column()
  owner: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Animal };
