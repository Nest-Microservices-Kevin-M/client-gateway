import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ProductsController } from './products.controller';
import { PRODUCT_SERVICE } from '../config/constants/services';
import { envs } from 'src/config/envs';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.PRODUCTS_MICROSERVICE_HOST,
          port: envs.PRODUCTS_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class ProductsModule {}
