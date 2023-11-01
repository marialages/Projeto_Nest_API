
import { MiddlewareConsumer, Module, NestModule, Patch, RequestMethod } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "src/user.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserIdCheckMiddleware } from "src/middlewares/user-id-check.middleware";


@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers:[UserService],

    exports:[UserService]
})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddleware).forRoutes({
            path: 'user/:id',
            method: RequestMethod.ALL
    })
    }
}

