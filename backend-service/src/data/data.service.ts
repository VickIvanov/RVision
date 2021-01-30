import { Injectable, Inject } from '@nestjs/common';

import {Data, DataDocument} from "./data.entity";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateDataDto} from "./create-data.dto";

@Injectable()
export class DataService {

    constructor(@InjectModel(Data.name) private dataModel: Model<DataDocument>) { }

    async findAll(): Promise<Data[]> {
        return this.dataModel.find().exec()
    }

    async create(dataDto: CreateDataDto): Promise<Data> {
        const newData = new this.dataModel(dataDto)
        console.log(newData)
        return newData.save()
    }

    getById(id: string): Promise<Data> {
        return this.dataModel.findById(id).exec();
    }

}
