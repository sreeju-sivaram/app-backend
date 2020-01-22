import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { RegisterController } from './register.controller';
import { AuthService } from './auth.service';
import { GetUsersController } from './getusers.controller';
import { GetService } from './getusers.service';
import { RegisterService } from './register.service';
import { MongooseModule } from '@nestjs/mongoose';
import { registerUserSchema } from './schema/register.user.schema';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name:'RegisterUser',
      schema:registerUserSchema,
      collection:'RegisterUser'
    }]),
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/mydb"),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [LoginController, RegisterController, GetUsersController],
  providers: [AuthService, RegisterService, LocalStrategy, GetService],
})
export class AppModule {}
