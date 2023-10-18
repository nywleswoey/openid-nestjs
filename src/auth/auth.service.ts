import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  generateJwt(user: any) {
    const payload = { email: user.email };
    return this.jwtService.sign(payload);
  }
}
