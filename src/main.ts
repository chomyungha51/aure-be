import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const cors = require('cors');
  const app = await NestFactory.create(AppModule);

  app.use(
    cors({
      origin: [
        'https://port-0-aure-be-4c7jj2blhfis6sk.sel4.cloudtype.app',
        'https://localhost:3000',
      ],
      Credential: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
