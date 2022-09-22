import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RetrospectService } from './retrospect.service';
import { CreateRetrospectDto } from './dto/create-retrospect.dto';
import { Retrospect } from './entities/retrospect.entity';
import { UpdateRetrospectDto } from './dto/update-retrospect.dto';

@Controller('retrospect')
export class RetrospectController {
  constructor(private readonly retrospectService: RetrospectService) {}
  @Get('/')
  getAll(): Retrospect[] {
    return this.retrospectService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') retrospectId: number): Retrospect {
    console.log(retrospectId);
    return this.retrospectService.getOne(retrospectId);
  }

  @Post('/create')
  createOne(@Body() body: CreateRetrospectDto): Retrospect {
    return this.retrospectService.createOne(body);
  }

  @Delete('/:id')
  deleteOne(@Param('id') retrospectId: number): boolean {
    return this.retrospectService.deleteOne(retrospectId);
  }

  @Patch('/:id')
  updateOne(
    @Param('id') retrospectId: number,
    @Body() body: UpdateRetrospectDto,
  ): Retrospect {
    return this.retrospectService.updateOne(retrospectId, body);
  }
}
