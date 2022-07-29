import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Photo, PhotoDocument } from './schema/Photo.schema';

@Injectable()
export class PhotoService {
  constructor(
    @InjectModel(Photo.name) private photoModel: Model<PhotoDocument>,
  ) {}

  async getPhoto() {
    const photos = await this.photoModel.find();
    return {
      success: true,
      message: 'save photo successfully',
      photos,
    };
  }

  async postPhoto(data) {
    const newPhoto = new this.photoModel(data);
    await newPhoto.save();
    return {
      success: true,
      message: 'save photo successfully',
    };
  }
  async deletePhoto(id) {
    await this.photoModel.findByIdAndDelete(id);
    return {
      success: true,
      message: 'delete photo successfully',
    };
  }

  async updatePhoto(id, data) {
    await this.photoModel.updateOne({ _id: id }, { $set: data });
    return {
      success: true,
      message: 'update photo successfully',
    };
  }
}
