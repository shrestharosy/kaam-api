import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KaamModule } from './kaam/kaam.module';
import { ConfigModule } from '@nestjs/config';

// MongooseModule can be used to connect to mongo database

const DB_NAME = 'kaamDatabase';
const MONGODB_URL = `mongodb+srv://username:username@cluster0.cijjo.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

@Module({
  imports: [
    KaamModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGODB_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
