import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Kaam } from '../model/kaam.interface';

@Injectable()
export class KaamService {
  constructor(@InjectModel('Kaam') private readonly kaamModel: Model<Kaam>) {}

  async createKaam(title: string, description: string, salary: string) {
    const newKaam = new this.kaamModel({
      title,
      description,
      salary,
    });
    const { id } = await newKaam.save();
    return id;
  }

  async getKaam() {
    const kaam = await this.kaamModel.find().exec();
    return kaam;
  }
}
