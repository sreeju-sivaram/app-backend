import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterUser } from './models/register.user.model'

@Injectable()
export class GetService {
    constructor(@InjectModel('RegisterUser') private readonly registerUserModel: Model<RegisterUser>){}
    async getUsers() {
    const users = await this.registerUserModel.find({});
    return users;
  }
}
