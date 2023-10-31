import { Controller, Post } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/auth-login.dto";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import { AuthForgetDTO } from "./dto/auth-forget.dto";
import { AuthResetDTO } from "./dto/auth-reset.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{

    constructor(private readonly userService: AuthService,
        private readonly authService: AuthService){}
   
    @Post('login')
        async login(@Body() {email, password}: AuthLoginDTO){
            return this.userService.login(email, password);
        }

    @Post('register')
    async register(@Body() body: AuthRegisterDTO){
        return this.authService.register(body);
    }

    @Post('forget')
    async forget(@Body() {email}: AuthForgetDTO){
        return this.authService.forget(email);
    }

    @Post('reset')
    async reset(@Body() {password, token} : AuthResetDTO){
        return this.authService.reset(password, token);
    }

}