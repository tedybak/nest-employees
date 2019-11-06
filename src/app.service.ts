import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserI } from './test/interfaces/User';
import { TaskDto } from './test/dto/task_dto';

@Injectable()
export class AppService {
  constructor(@InjectModel('Users') private userModel: Model<UserI>) {}

  async getUsers() {
    return await this.userModel.find();
  }

  async getUser(user){
    const userToFind =  await this.userModel.findById(user);
    return userToFind;    
  }

  async createNewUser(user: TaskDto) {
    const newUser = new this.userModel(user);
    await newUser.save();
  }

}
