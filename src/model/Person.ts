import { v4 as uuidV4 } from 'uuid';
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('Person')
class Person {
  //@PrimaryColumn("uuid")
  //id: string;

  @Column()
  name: string;

  @PrimaryColumn({unique : true})
  doc: string;

  @Column()
  birthDate: string;

}

export { Person };
