import { Body, Controller, Delete, Get, Post, Param, Put } from "@nestjs/common";
import { CreateUserDTO, UserCommonDetailsDTO } from "./auth.dto";
import { AuthsService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthsService) { }

    // Route # 1 Get User
    @Get()
    async getUser(@Body() body: UserCommonDetailsDTO) {
        return this.authService.findOne(body)
    }

    // Route # 2 Create User
    @Post()
    async createUser(@Body() body: CreateUserDTO) {
        this.authService.create(body)
    }

    // // Route # 3 Delete User
    // @Delete(':id')
    // deleteUser(@Param() @Param('id') id: string | number): string {
    //     console.log(id)
    //     return "delete user"
    // }

    // // Route # 4 Get User
    // @Put('id')
    // editUser(@Body() body: UserCommonDetailsDTO, @Param('id') id: string | number): string {
    //     console.log(body, id)
    //     return "edit user"
    // }

    // // Route # 5 Get All Users
    // @Get('all')
    // getAllUser(): string {
    //     console.log()
    //     return "get All Users"
    // }
}
