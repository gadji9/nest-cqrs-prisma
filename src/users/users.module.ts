import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUserCommandHandler } from './CreateUser.handler';
import { GetUserQueryHandler } from './GetUser.query';
import { UsersController } from './users.controller';
import { UserService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UserService,
    GetUserQueryHandler,
    CreateUserCommandHandler
  ],
  imports: [CqrsModule, PrismaModule]
})
export class UsersModule {}
