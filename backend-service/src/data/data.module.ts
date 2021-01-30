import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {DataService} from "./data.service";
import {DataController} from "./data.controller";
import {Data, DataSchema} from "./data.entity";

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
