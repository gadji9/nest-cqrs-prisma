import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {Posts} from '@prisma/client' 
import { PostService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostService) {}

    @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<Posts> {
    return this.postService.post({ id: Number(id) });
  }

  @Get()
  async getPublishedPosts(): Promise<Posts[]> {
    return this.postService.posts({
      where: {},
    });
  }

  @Post()
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<Posts> {
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<Posts> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
