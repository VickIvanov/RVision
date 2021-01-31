import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/dataModule';

@Module({
  imports: [
    DataModule,
    MongooseModule.forRoot(`mongodb://mongodb:27017/data`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
