import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Kaam API')
  .setVersion('1.0')
  .build();

export default swaggerConfig;
