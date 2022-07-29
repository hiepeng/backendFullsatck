/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type PhotoDocument = Photo & Document;

@Schema()
export class Photo {
  @Prop()
  name: string;
  @Prop()
  url: string;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);
