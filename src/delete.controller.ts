import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteService } from './delete.service';

@Controller('/delete/:id')
export class DeleteController {
  constructor(private readonly deleteService: DeleteService) {}

  @Delete()
  async deleteUser(@Param('id') id) {
    return this.deleteService.deleteUser(id);
  }

}
