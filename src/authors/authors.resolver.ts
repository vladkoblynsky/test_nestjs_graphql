import {
  Args,
  Parent,
  ResolveField,
  Resolver,
  Int,
  Query,
} from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from './models/author.model';

@Resolver('Author')
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query(() => Author, { nullable: true })
  async author(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }

  @Query(() => [Author])
  async authors(@Args('first') first: number) {
    return this.authorsService.findAll(first);
  }
}
