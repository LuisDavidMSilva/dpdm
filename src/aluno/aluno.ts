import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  @Column()
  matricula: number;

  @Column()
  telefone: number;
}
