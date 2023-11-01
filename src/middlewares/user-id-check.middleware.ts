import { NestMiddleware, BadRequestException } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";

console.log('UserIdCheckMiddleware','antes')
export class UserIdCheckMiddleware implements NestMiddleware{
use(req: Request, res: Response, next: NextFunction) {

    if(isNaN(Number(req.params.id)) || Number(req.params.id) <= 0 ){
        throw new BadRequestException('ID inválido');
    }

    console.log('UserIdCheckMiddleware','depois')

    next();

}

}