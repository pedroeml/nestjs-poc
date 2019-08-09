import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from '../interface/item.interface';

@Injectable()
export class ItemsService {

    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }

    public async findAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    public async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id });
    }

    public async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    public async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id);
    }

    public async update(id: string, item: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
}
