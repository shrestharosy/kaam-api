import { KaamService } from '../service/kaam.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Kaam } from '../model/kaam.interface';

@Controller('kaam')
export class KaamController {
  constructor(private readonly kaamService: KaamService) {}

  @Post()
  async createKaam(@Body() requestBody: Kaam) {
    const { title, description, salary } = requestBody;
    const id = await this.kaamService.createKaam(title, description, salary);
    return id;
  }

  @Get()
  async getKaam() {
    const kaam = await this.kaamService.getKaam();
    return kaam;
  }
}
