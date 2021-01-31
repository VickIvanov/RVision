import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Data, DataDocument} from "./schemas/data.schema";
import {CreateDataDto} from "./dto/create-data.dto";
import {UpdateDataDto} from "./dto/update-data.dto";

@Injectable()
export class DataService {
  constructor(@InjectModel(Data.name) private dataModel: Model<DataDocument>) {
  }

  async getAll(): Promise<Data[]> {
    return this.dataModel.find().exec()
  }

  async getById(id: string): Promise<Data> {
    return this.dataModel.findById(id)
  }

  async create(dataDto: CreateDataDto): Promise<Data> {
    const newData = new this.dataModel(dataDto)
    return newData.save()
  }

  async remove(id: string): Promise<Data> {
    return this.dataModel.findByIdAndRemove(id)
  }

  async update(id: string, dataDto: UpdateDataDto): Promise<Data> {
    return this.dataModel.findByIdAndUpdate(id, dataDto, {new: true})
  }

  async cleanDatabase() {
      this.dataModel.deleteMany({}, () => {})
  }
}
