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
import { PhotoService } from './photo.service';

@ApiTags('Photo')
@Controller()
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('Photo/getAllPhoto')
  getPhoto() {
    return this.photoService.getPhoto();
  }

  @Post('Photo/Save')
  postPhoto(@Body() data: any) {
    return this.photoService.postPhoto(data);
  }
  @Delete('Photo/Delete/:id')
  deletePhoto(@Param('id') id: any) {
    return this.photoService.deletePhoto(id);
  }
  @Put('Photo/Update/:id')
  updatePhoto(@Body() data: any, @Param('id') id: any) {
    return this.photoService.updatePhoto(id, data);
  }
}
