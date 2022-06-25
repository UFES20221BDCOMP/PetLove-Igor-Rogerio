import { v4 as uuidV4 } from 'uuid';
import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Service } from './Service';
import { Animal } from './Animal';
import { Person } from './Person';
import { type } from 'os';

@Entity('Schedule')
class Schedule {
  @PrimaryColumn("uuid")
  id: string;

  @ManyToOne(type=>Person)
  owner: Person;

  @ManyToOne(type=>Animal)
  animal: Animal;

  @ManyToOne(type=>Service)
  service: Service;

  @Column({type: 'date'})
  date: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Schedule };
