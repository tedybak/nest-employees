import { Controller, Get, Post, Put, Body, Param, Delete, Req, Res } from '@nestjs/common';
import {TaskDto} from './dto/task_dto'
import {Request, Response} from 'express'
@Controller('/tareas')
export class TestController {
  @Get()
  getTareas(@Req() req, @Res() res) {
    console.log(res.send('aloha'));
  }

  @Post()
  createTareas(@Body() tarea:TaskDto) {
     }
    
  @Put(':id')
  actulizandoTarea(@Param() id){
    return id;
  }

  @Delete(':id')
  deleteTarea(@Param()id){
    return id;
  }

}
