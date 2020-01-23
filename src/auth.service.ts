import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterUser } from './models/register.user.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('RegisterUser') private readonly registerUserModel: Model<RegisterUser>, 
    private readonly jwtService: JwtService){}
  async authenticate(userData) {
   const user = await this.registerUserModel.findOne({username : userData.username});

   if (user && user.password === userData.password) {
    const payload = { username: user.username, sub: user._id };
    const responseJson = {
      id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      token: this.jwtService.sign(payload)
  };
     return responseJson
  }
   return null
  }
}
