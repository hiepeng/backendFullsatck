/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MusicController } from './musics.controller';
import { MusicsService } from './musics.service';
import { Song, SongSchema } from './schema/Music.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }]),
  ],
  controllers: [MusicController],
  providers: [MusicsService],
})
export class MusicModule {}
