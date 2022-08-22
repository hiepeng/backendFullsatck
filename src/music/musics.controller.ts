import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MusicsService } from './musics.service';

@ApiTags('Music')
@Controller()
export class MusicController {
  constructor(private readonly musicsService: MusicsService) {}

  @Get('Music/getAllSong')
  getSong() {
    return this.musicsService.getSong();
  }

  @Post('Music/Save')
  postSong(@Body() data: any) {
    return this.musicsService.postSong(data);
  }
  @Delete('Music/Delete/:id')
  deleteSong(@Param('id') id: any) {
    return this.musicsService.deleteSong(id);
  }
  @Put('Music/Update/:id')
  updateSong(@Body() data: any, @Param('id') id: any) {
    return this.musicsService.updateSong(id, data);
  }
}
