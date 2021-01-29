import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthorsModule } from './authors/authors.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    AuthorsModule,
    PostsModule,
    GraphQLModule.forRoot({
      // include: [AuthorsModule],
      debug: true,
      playground: true,
      autoSchemaFile: true,
      // autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
    }),
  ],
})
export class AppModule {}
