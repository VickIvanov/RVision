import { Module } from '@nestjs/common';

import {MongooseModule} from "@nestjs/mongoose";
import {DataModule} from "./data/data.module";

@Module({
  imports: [DataModule, MongooseModule.forRoot(`mongodb://localhost:27017/data`)],
  controllers: [],
  providers: [],
})
export class AppModule {}
