import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://spvm026elcs.elucid.int/nest-graphql-mongodb'),
  ]
})
export class DatabaseModule {}
