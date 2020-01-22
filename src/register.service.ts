import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterUser } from './models/register.user.model'

@Injectable()
export class RegisterService {
    constructor(@InjectModel('RegisterUser') private readonly registerUserModel: Model<RegisterUser>){}
    async register(userData) {
    console.log('inside register service', userData);
    const registerNewUser = new this.registerUserModel(userData);
    await registerNewUser.save();
  }
}
