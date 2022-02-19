import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './users.service';
import {Users} from "@prisma/client"
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetUserQuery } from './GetUser.query';
import { CreateUSerCommand } from './CreateUser.command';

@Controller('users')
export class UsersController {

    constructor(private userService: UserService, private queryBus: QueryBus, private readonly commandBus: CommandBus) {}

    @Post()
    async signupUser(
      @Body() command: CreateUSerCommand,
    ): Promise<Users> {
      console.log(command)
      return this.commandBus.execute(
        command
      )
    }
  
    @Get()
    async getUsers(
    ): Promise<Users[]> {
      return this.userService.users({});
    }

    @Get(':id')
    async getUserbyId(
      @Param('id') id: string
    ): Promise<Users[]> {
      return this.queryBus.execute(
        new GetUserQuery(Number(id))
      )
    }

}
