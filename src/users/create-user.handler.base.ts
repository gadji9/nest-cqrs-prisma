import { NotFoundException } from '@nestjs/common';
import { ICommandBus, ICommandHandler } from '@nestjs/cqrs';
import { PrismaService } from 'src/common/prisma/prisma.service';

export abstract class CreateUserCommandHandlerBase implements ICommandHandler{
  constructor(public prisma: PrismaService) {}
  public async execute(q: {email: string, name: string}): Promise<any> {
    const query = q;
    const record = await this.prisma.users.create({
        data: query
    });

    return record;
  }

}
