import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './product/product.module';
import { UserService } from './login/user.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/user-nest', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
