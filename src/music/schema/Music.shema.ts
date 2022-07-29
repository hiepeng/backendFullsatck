/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type SongDocument = Song & Document;

@Schema()
export class Song {
  @Prop()
  name: string;
  @Prop()
  url: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);
