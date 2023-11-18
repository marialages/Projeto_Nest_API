
import {Controller, Post, Body, Get, Param, Put, Patch, Delete, ParseIntPipe, UseInterceptors, UseGuards} from "@nestjs/common"

import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "src/user.service";

import { LogInterceptor } from "src/interceptors/log.interceptors";
import { ParamId } from "src/decorators/param-id.decorator";

import { Role } from "src/enums/role.enum";
import { Roles } from "src/decorators/roles.decorator";
import { RoleGuard } from "src/guards/role.guard";
import { AuthGuard } from "src/guards/auth.guard";

@Roles(Role.Adim)
@UseGuards( AuthGuard,RoleGuard)
@UseInterceptors(LogInterceptor)

@Controller('users')
export class UserController{

    constructor(private  readonly userService:UserService){}



    @UseInterceptors(LogInterceptor)


    @Post()
    async create(@Body() data:CreateUserDTO ){
        return this.userService.create(data);
    }

    @Get()
    async list(){
        return this.userService.list();
    }

    @Get(':id')

    async show(@ParamId() id : number){
        console.log({id});

        return this.userService.show(id);
    }

    @Put(':id')

    async update (@Body()data: UpdatePutUserDTO, @ParamId()  id : number ){
            return this.userService.update(id, data);
        }

    @Patch(':id')
    async updatePartial(@Body() data :UpdatePatchUserDTO,@ParamId()  id : number){

            return this.userService.updatePartial(id, data);

    }   

    @Delete(':id')
    async delete( @Param('id', ParseIntPipe) id : number){
        return this.userService.delete(id);
     }
    }