import { IsEmail, IsString, MinLength, isString } from "class-validator";

export class AuthLoginDTO{
    @IsEmail()
    email : string;

    @IsString()
    @MinLength(6)
    password: string;
}