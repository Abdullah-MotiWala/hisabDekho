import { TransService } from './transaction.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Put,
    UsePipes,
    UseGuards,
    Request,
    Req
} from "@nestjs/common";
import { AddTransaction } from "./transaction.dto";
import { SETTINGS } from "./transaction.utils";
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('transaction')
export class TransController {
    constructor(private transService: TransService) { }

    // Route # 1 add expense
    @UseGuards(AuthGuard)
    @Post('add')
    @UsePipes(SETTINGS.VALIDATION_PIPES)
    async addExpense(@Body() body: AddTransaction): Promise<any> {
        // console.log(request.user, "req")
        return this.transService.add(body)
    }

    // // Route # 1 Get User
    // @Post("signin")
    // @UsePipes(SETTINGS.VALIDATION_PIPES)
    // async getUser(@Body() body: UserCommonDetailsDTO): Promise<any> {
    //     return this.authService.findOne(body);
    // }

    // // Route # 2 Create User
    // @Post("signup")
    // @UsePipes(SETTINGS.VALIDATION_PIPES)
    // async createUser(@Body() body: CreateUserDTO): Promise<any> {
    //     return this.authService.create(body);
    // }

    // // Route # 3 Delete User
    // @UseGuards(AuthGuard)
    // @Delete("delete")
    // async deleteUser(
    //     @Request() request: { user: { sub: number } }
    // ): Promise<{ success: boolean; message: string }> {
    //     return this.authService.remove(request.user.sub);
    // }

    // // Route # 4 Edit User
    // @Put("edit")
    // @UseGuards(AuthGuard)
    // @UsePipes(SETTINGS.VALIDATION_PIPES)
    // editUser(
    //     @Body() name: UserEditDTO,
    //     @Request() request: { user: { sub: number } }
    // ): Promise<{ success: boolean; message: string; user: string }> {
    //     return this.authService.edit({ name, id: request.user.sub });
    // }

    // // Route # 5 Send Verification Email
    // @Get("send-confirmation-email")
    // @UseGuards(AuthGuard)
    // sendEmail(
    //     @Request() request: { user: { sub: number } }
    // ): Promise<{ success: boolean; message: string } | undefined> | any {
    //     return this.authService.sendConfirmationEmail(request.user.sub);
    // }

    // // Route # 6 Verify Email
    // verifyEmail() {
    //     return "verify email"
    // }
}
