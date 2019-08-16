import { Injectable } from '@nestjs/common';
import keys from '../constants/keys';

@Injectable()
export class ConfigService {
  private readonly MONGO_URI: string;

  constructor() {
    this.MONGO_URI = `mongodb://${keys.MONGO_USER}:${keys.MONGO_PASSWORD}@${keys.MONGO_SERVER}:${keys.MONGO_PORT}/${keys.MONGO_DATABASE_NAME}`;
  }

  public getMongoURI(): string {
      return this.MONGO_URI;
  }
}
