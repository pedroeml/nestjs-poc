import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemDto } from '../dto/item.dto';
import { Item } from '../interface/item.interface';

@Injectable()
export class ItemsService {

  constructor(@InjectModel('Item') private readonly ItemModel: Model<Item>) { }

  public async findAll(): Promise<Item[]> {
    return await this.ItemModel.find();
  }

  public async findOne(id: string): Promise<Item> {
    return await this.ItemModel.findById(id);
  }

  public async create(item: ItemDto): Promise<Item> {
    const newItem: Item = new this.ItemModel(item);
    return await newItem.save();
  }

  public async delete(id: string): Promise<Item> {
    return await this.ItemModel.findByIdAndRemove(id);
  }

  public async update(id: string, item: ItemDto): Promise<Item> {
    return await this.ItemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
