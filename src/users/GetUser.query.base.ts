import { IQueryHandler } from '@nestjs/cqrs';
import { Users } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';

import { PrismaService } from '../common/prisma/prisma.service';

export class GetSingleArtQuery {
  constructor(
    public id: number,
  ) {}
}


export type OrderByQuery = { [key: string]: any }[];

export abstract class GetSingleArtQueryHandlerBase implements IQueryHandler
{
  constructor(protected prisma: PrismaService) {}

  public async execute(q: any): Promise<any> {
    const query = this.expandQuery(q);
    const record = await this.prisma.users.findFirst({
      where: {
        id: query.id,
      },
      rejectOnNotFound: () => new NotFoundException('Art not found'),
    });

    return await this.DtoMapper(record);
  }

  protected abstract DtoMapper(
    user: any,
  ): Promise<any> | any;

  protected expandQuery(q: any): any {
    return q;
  }
}
