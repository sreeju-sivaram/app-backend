import { Controller, Get } from '@nestjs/common';
import { GetService } from './getusers.service';

@Controller('/getUsers')
export class GetUsersController {
  constructor(private readonly getService: GetService) {}

  @Get()
  getUsers() {
    console.log('Inside get Users');
    return this.getService.getUsers();
  }
}
