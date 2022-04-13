import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Aluno } from './aluno';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AlunoService extends TypeOrmCrudService<Aluno> {
  constructor(@InjectRepository(Aluno) repo){
    super(repo);
}
}
