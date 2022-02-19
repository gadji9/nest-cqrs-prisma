import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { PostsController } from './posts.controller';
import { PostService } from './posts.service';

@Module({
    controllers: [PostsController],
    providers: [PostService, PrismaService]
})
export class PostsModule {}
