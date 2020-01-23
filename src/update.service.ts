import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterUser } from './models/register.user.model'

@Injectable()
export class UpdateService {
    constructor(@InjectModel('RegisterUser') private readonly registerUserModel: Model<RegisterUser>){}
    async updateUser(user) {
    console.log('inside update service', user);
    const response = await this.registerUserModel.update({_id : user.id}, {$set: {password: user.password}});
    return response;
  }
}