import { KaamDTO } from './../model/kaam.dto';
import { KaamService } from '../service/kaam.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Kaam } from '../model/kaam.interface';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('kaam')
@Controller('kaam')
export class KaamController {
  constructor(private readonly kaamService: KaamService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Resource has been successfully created',
  })
  @ApiBody({ type: KaamDTO })
  async createKaam(@Body() requestBody: KaamDTO) {
    const { title, description, salary } = requestBody;
    const id = await this.kaamService.createKaam(title, description, salary);
    return id;
  }

  @Get()
  @ApiOkResponse({
    description: 'List of all kaam has been successfully returned',
  })
  async getKaam() {
    const kaam = await this.kaamService.getKaam();
    return kaam;
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Kaam has been successfully returned',
  })
  // @UseFilters(HttpExceptionFilter)
  async getKaamById(@Param('id') kaamId: string) {
    const kaam = await this.kaamService.getKaamById(kaamId);
    return kaam;
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Kaam has been successfully updated',
  })
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

  @Delete(':id')
  @ApiOkResponse({
    description: 'Resource list has been successfully removed',
  })
  async deleteKaam(@Param('id') kaamId: string) {
    const response = await this.kaamService.deleteKaam(kaamId);
    return response;
  }
}
