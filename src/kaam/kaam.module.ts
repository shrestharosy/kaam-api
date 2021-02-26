import { KaamSchema } from './model/kaam.schema';
import { KaamController } from './controller/kaam.controller';
import { KaamService } from './service/kaam.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

//  MongooseModule.forFeature makes this model injectable
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Kaam',
        schema: KaamSchema,
      },
    ]),
  ],
  controllers: [KaamController],
  providers: [KaamService],
})
export class KaamModule {}
