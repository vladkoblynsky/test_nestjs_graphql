import { Resolver, Query } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './models/post.model';

@Resolver('Post')
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  async posts() {
    return this.postsService.findAll();
  }
}
