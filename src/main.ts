import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ProductsModule } from './products/product.module';

async function bootstrap() {
  const product = await NestFactory.create(ProductsModule);

  product.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    }
  }))

  await product.listen(3000);
}
bootstrap();
