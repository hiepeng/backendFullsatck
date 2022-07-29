import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { Photo, PhotoSchema } from './schema/Photo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Photo.name, schema: PhotoSchema }]),
  ],
  controllers: [PhotoController],
  providers: [PhotoService],
  exports: [
    MongooseModule.forFeature([{ name: Photo.name, schema: PhotoSchema }]),
  ],
})
export class PhotoModule {}
