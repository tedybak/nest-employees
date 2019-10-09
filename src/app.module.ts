import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema} from './test/schemas/user.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mohtadi:Estocolmo1@cluster0-jgsjz.mongodb.net/users?retryWrites=true&w=majority'),
MongooseModule.forFeature([{name:'Users', schema:UserSchema}])],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
