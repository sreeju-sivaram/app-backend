import { Controller, Post, Param, Body } from '@nestjs/common';
import { UpdateService } from './update.service';

@Controller('/update/:id')
export class UpdateController {
  constructor(private readonly updateService: UpdateService) {}

  @Post('update')
  async updateUser(@Param('id') id, @Body() data: object) { 
    const reqObj = {id, ...data}
    console.log('inside update', id);
    return this.updateService.updateUser(reqObj);
  }

}
