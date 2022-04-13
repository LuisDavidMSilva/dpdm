import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Crud({
  model: {
    type: Aluno,
  },
})

@Controller('aluno')
export class AlunoController {
  constructor(public service: AlunoService) {
  }
}
