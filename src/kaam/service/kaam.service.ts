import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getKaamById(id: string) {
    const kaam = await this.findKaam(id);
    return kaam;
  }

  async updateKaam(
    id: string,
    title: string,
    description: string,
    salary: string,
  ) {
    const updatedKaam = await this.findKaam(id);
    if (title) {
      updatedKaam.title = title;
    }
    if (description) {
      updatedKaam.description = description;
    }
    if (salary) {
      updatedKaam.salary = salary;
    }

    updatedKaam.save();
    return updatedKaam;
  }

  private async findKaam(id: string) {
    try {
      const kaam = await this.kaamModel.findById(id).exec();
      return kaam;
    } catch (error) {
      throw new NotFoundException(`Couldn't find kaam with id ${id}`);
    }
  }
}
