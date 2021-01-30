import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDataDto } from './dto/create-data.dto';
import { UpdateDataDto } from './dto/update-data.dto';
import { DataService } from './data.service';
import { Data } from './schemas/data.schema';

@Controller('data')
export class DataController {

  constructor(private readonly dataService: DataService) {
  }

  @Get()
  getAll(): Promise<Data[]> {
    return this.dataService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Data> {
    return this.dataService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createDataDto: CreateDataDto): Promise<Data> {
    return this.dataService.create(createDataDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Data> {
    return this.dataService.remove(id)
  }

  @Put(':id')
  update(@Body() updateDataDto: UpdateDataDto, @Param('id') id: string): Promise<Data> {
    return this.dataService.update(id, updateDataDto)
  }

  // ------------------------------------------------------
  //  Endpoints for Charts
  // ------------------------------------------------------

  // TODO: Just do it!

}
