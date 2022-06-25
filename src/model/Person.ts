import { v4 as uuidV4 } from 'uuid';
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('Person')
class Person {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  doc: string;

  @Column({type: 'date'})
  birthDate: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Person };
