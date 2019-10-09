import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UserI } from './test/interfaces/User';
import { TaskDto } from './test/dto/task_dto';

@Controller('/api/v1/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users/')
  getUsers(): Promise<UserI[]> {
    return this.appService.getUsers();
  }

  @Get('/users/:id')
  getUser(@Param() param) {
    param = param.id;
    return this.appService.getUser(param);
  }

  @Post()
  createNewUser(@Body() user: TaskDto) {
    this.appService.createNewUser(user);
  }
}
