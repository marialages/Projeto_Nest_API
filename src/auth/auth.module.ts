import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthService } from "./auth.service";

@Module({
    imports:[JwtModule.register({
        secret: 'F+5m0;~zEbfK2adelZHY(C5yI"~kde<'
    }),
    UserModule,
    PrismaModule,
],
    controllers:[AuthController],
    providers : [AuthService],
})
export class AuthModule{}
