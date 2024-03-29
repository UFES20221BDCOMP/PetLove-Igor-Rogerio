/* import { Expose } from 'class-transformer';
import {
  Column, CreateDateColumn, Entity, PrimaryColumn,
} from 'typeorm'; */
import { v4 as uuidV4 } from 'uuid';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinTable } from "typeorm";
import { Person } from './Person';

@Entity('Animal')
class Animal {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  // @Column({nullable:true})
  // cost: number;

  @Column()
  type: string;

  @ManyToOne(type=>Person,{ onDelete: 'CASCADE' })
  owner: string;

  constructor() { /* Ao inicializar, atribui uma chave uuiv4 a entidade */
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Animal };
