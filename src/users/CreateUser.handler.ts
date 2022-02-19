import { CommandHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "src/common/prisma/prisma.service";
import { CreateUserCommandHandlerBase } from "./create-user.handler.base";
import { CreateUSerCommand } from "./CreateUser.command";



@CommandHandler(CreateUSerCommand)
export class CreateUserCommandHandler extends CreateUserCommandHandlerBase{
    constructor(public prisma: PrismaService) {
        super(prisma)
    }
}