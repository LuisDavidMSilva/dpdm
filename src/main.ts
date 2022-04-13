import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Swagger } from '@nestjsx/crud/lib/crud';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const opcoes = new DocumentBuilder()
    .setTitle('Alunos')
    .setDescription('gerenciamento de alunos')
    .setVersion('1.0')
    .addTag('Alunos')
    .build();

  const Document = SwaggerModule.createDocument(app, opcoes);
  let documento;
  SwaggerModule.setup('docs', app, documento);
}
bootstrap();
