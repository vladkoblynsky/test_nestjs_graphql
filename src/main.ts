import { NestFactory } from '@nestjs/core';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import * as fs from 'fs';
import { printSchema } from 'graphql';
import { AppModule } from './app.module';
import { AuthorsResolver } from './authors/authors.resolver';
import { PostsResolver } from './posts/posts.resolver';

// async function generateSchema() {
//   const app = await NestFactory.create(GraphQLSchemaBuilderModule);
//   await app.init();

//   const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
//   const schema = await gqlSchemaFactory.create([
//     AuthorsResolver,
//     PostsResolver,
//   ]);
//   fs.writeFile('src/schema.graphql', printSchema(schema), () => {
//     console.log('file saved "src/schema.graphql"');
//   });
// }
// generateSchema();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
