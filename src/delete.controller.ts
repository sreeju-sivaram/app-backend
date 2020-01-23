import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteService } from './delete.service';

@Controller('/delete/:id')
export class DeleteController {
  constructor(private readonly deleteService: DeleteService) {}

  @Delete()
  async deleteUser(@Param('id') id) { 
    console.log('inside post delete username', id);
    return this.deleteService.deleteUser(id);
  }

}
