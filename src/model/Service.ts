import { v4 as uuidV4 } from 'uuid';
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('Service')
class Service {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  value: number;

  constructor() { /* Ao inicializar, atribui uma chave uuiv4 a entidade */
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Service };
