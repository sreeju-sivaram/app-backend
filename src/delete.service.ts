import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterUser } from './models/register.user.model'

@Injectable()
export class DeleteService {
    constructor(@InjectModel('RegisterUser') private readonly registerUserModel: Model<RegisterUser>){}
    async deleteUser(id) {
    const response = await this.registerUserModel.remove({_id : id});
    return response;
  }
}
