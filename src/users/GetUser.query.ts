import { QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "src/common/prisma/prisma.service";
import { GetSingleArtQueryHandlerBase } from "./GetUser.query.base";


export class GetUserQuery {
  constructor(public id: number) {}
}


@QueryHandler(GetUserQuery)
export class GetUserQueryHandler extends GetSingleArtQueryHandlerBase{
    constructor(prisma: PrismaService) {
        super(prisma)
    }
    protected DtoMapper(
        art: any,
      ): any {
        return {
          id: art.id,
          url: art.url,
          name: art.name,
          sellType: art.sellType,
          price: art.price,
          description: art.description,
          user: art.user,
        };
      }
}
