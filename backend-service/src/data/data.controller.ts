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
  @Header("Access-Control-Allow-Origin", "*")
  @Header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
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

  @Post("/init")
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  createAll(@Body() dtos: CreateDataDto[]): void {
    for (let i = 0; i < dtos.length; i++) {
      this.dataService.create(dtos[i])
    }
  }

  @Post("/clean")
  @HttpCode(HttpStatus.OK)
  cleanDatabase(): void {
    this.dataService.cleanDatabase();
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
