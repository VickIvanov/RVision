import {Controller, Get} from '@nestjs/common';
import {DataService} from "./data.service";
import {CreateDataDto} from "./create-data.dto";

@Controller('data')
export class DataController {

    constructor(private dataService: DataService) {
    }

    @Get()
    getAll() {
        return this.dataService.findAll();
    }

    @Get("/init")
    init() {
        let d1 = new CreateDataDto();
        let d2 = new CreateDataDto();

        d1.id = "1";
        d1.attack_pattern = Array.of("1", "2", "3");
        d1.campaign = Array.of("1", "2", "3");
        d1.technique = Array.of("1", "2", "3");
        d1.city = Array.of("1", "2", "3");
        d1.country = Array.of("1", "2", "3");
        d1.attack_pattern = Array.of("1", "2", "3");
        d1.identity = Array.of("1", "2", "3");
        d1.ioc = Array.of("1", "2", "3");

        d2.id = "2";
        d2.attack_pattern = Array.of("1", "2", "3");
        d2.campaign = Array.of("1", "2", "3");
        d2.technique = Array.of("1", "2", "3");
        d2.city = Array.of("1", "2", "3");
        d2.country = Array.of("1", "2", "3");
        d2.attack_pattern = Array.of("1", "2", "3");
        d2.identity = Array.of("1", "2", "3");
        d2.ioc = Array.of("1", "2", "3");

        this.dataService.create(d1);
        this.dataService.create(d2);
    }
}
