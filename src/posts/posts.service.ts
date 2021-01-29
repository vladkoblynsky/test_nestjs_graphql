import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  findAll() {
    return [{ id: 1, title: 'test title post', votes: 5 }];
  }
}
