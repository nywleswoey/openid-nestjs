import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { GoogleOAuthGuard } from './guards/google.guard';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth() {}

  @Get('callback')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthRedirect(@Request() req) {
    const payload = { name: req.user.name, email: req.user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
