import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';


@Module({
  imports: [CustomersModule,       
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'3.108.19.157',
      port: 3306,
      username:'interns',
      password:'interns@!@#$%^&*(',
      database: 'interns_ecommerce',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }), CustomersModule, CustomersModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
