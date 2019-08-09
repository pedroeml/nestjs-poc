import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemDto } from './dto/item.dto';
import { Item } from './interface/item.interface';
import { ItemsService } from './service/items.service';

@Controller('items')
export class ItemsController {

    constructor(private readonly service: ItemsService) { }

    @Get()
    public findAll(): Promise<Item[]> {
        return this.service.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id): Promise<Item> {
        return this.service.findOne(id);
    }

    @Post()
    public create(@Body() itemDto: ItemDto): Promise<Item> {
        return this.service.create(itemDto);
    }

    @Delete(':id')
    public delete(@Param('id') id): Promise<Item> {
        return this.service.delete(id);
    }

    @Put(':id')
    public update(@Body() itemDto: ItemDto, @Param('id') id): Promise<Item> {
        return this.service.update(id, itemDto);
    }
}
