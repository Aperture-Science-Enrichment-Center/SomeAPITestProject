import { INestApplication } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

export function setupSwagger (app: INestApplication): void {
  const url = process.env.NODE_ENV === 'production' ? 'https' : 'http'
  const options = new DocumentBuilder()
    .setTitle('MyAPI')
    .setDescription('My awesome API')
    .setVersion('1.0')
    .addTag('Endpoints')
    .setContact('', '', 'your_contact@mail.com')
    .addBearerAuth({ type: 'apiKey' })
    .addServer(`${url}://`)
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
}