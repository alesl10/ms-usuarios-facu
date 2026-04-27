import 'dotenv/config'; // Carga las variables de tu archivo .env
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors({ origin: '*' });

  const port = process.env.PORT ?? 3000;
  
  await app.listen(port);
  
  console.log(`Aplicación corriendo en el puerto: ${port}`);
}
bootstrap();