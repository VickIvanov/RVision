import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataService } from './data.service';
import {Data, DataSchema} from "./schemas/data.schema";
import {DataController} from "./data.controller";

@Module({
  providers: [DataService],
  controllers: [DataController],
  imports: [
    MongooseModule.forFeature([
      {name: Data.name, schema: DataSchema}
    ])
  ]
})
export class DataModule {
}