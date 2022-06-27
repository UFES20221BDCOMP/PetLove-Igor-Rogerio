import { v4 as uuidV4 } from 'uuid';
import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Service } from './Service';
import { Animal } from './Animal';


@Entity('Schedule')
class Schedule {
  @PrimaryColumn("uuid")
  id: string;

  @ManyToOne(type=>Animal,{ onDelete: 'CASCADE' })
  animal: string;

  @ManyToOne(type=>Service,{ onDelete: 'CASCADE' })
  service: string;

  @Column({type: 'date'})
  date: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Schedule };
