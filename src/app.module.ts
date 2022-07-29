/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { PhotoController } from './photo/photo.controller';
import { PhotoService } from './photo/photo.service';
import { PhotoModule } from './photo/photo.module';
import { AppService } from './app.service';
import { MusicModule } from './music/musics.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hiepeng:Abcd1234.@clusternguyenvanhiep.ulpaw33.mongodb.net/fullstack?retryWrites=true&w=majority',
    ),
    PhotoModule,MusicModule
  ],
  controllers: [AppController, PhotoController],
  providers: [AppService, PhotoService],
})
export class AppModule {}
