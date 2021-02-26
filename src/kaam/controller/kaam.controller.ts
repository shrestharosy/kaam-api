import { KaamService } from '../service/kaam.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Get(':id')
  async getKaamById(@Param('id') kaamId: string) {
    const kaam = await this.kaamService.getKaamById(kaamId);
    return kaam;
  }

  @Patch(':id')
  async updateKaam(@Param('id') kaamId: string, @Body() updateKaam: Kaam) {
    const { title, description, salary } = updateKaam;
    const updatedKaam = await this.kaamService.updateKaam(
      kaamId,
      title,
      description,
      salary,
    );
    return updatedKaam;
  }
}
