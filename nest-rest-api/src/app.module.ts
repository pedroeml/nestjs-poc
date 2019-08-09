import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { ItemsModule } from './items/items.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
