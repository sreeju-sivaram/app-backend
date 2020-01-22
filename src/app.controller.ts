import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(): string {
    console.log('Inside get');
    return this.appService.getHello();
  }
}

