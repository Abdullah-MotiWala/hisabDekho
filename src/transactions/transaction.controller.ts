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
    Param,
} from "@nestjs/common";
import { AddTransaction } from "./transaction.dto";
import { SETTINGS } from "./transaction.utils";
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('transaction')
export class TransController {
    constructor(private transService: TransService) { }

    // Route # 1 add transaction
    @UseGuards(AuthGuard)
    @Post()
    @UsePipes(SETTINGS.VALIDATION_PIPES)
    async addExpense(@Body() body: AddTransaction,
        @Request() request: { user: { sub: number } }
    ): Promise<any> {
        return this.transService.create(body, request.user.sub)
    }

    // Route # 2 remove transaction
    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteExpense(
        @Param() { id }: { id: number }
    ) {
        console.log(id, "id")
        return this.transService.remove(id)
    }

    // Route # 3 edit transaction
    @UseGuards(AuthGuard)
    @Put(':id')
    @UsePipes(SETTINGS.VALIDATION_PIPES)
    async editExpense(
        @Body() body: AddTransaction,
        @Param() { id }: { id: number }
    ) {
        return this.transService.edit(body, id)
    }

    // Route # 4 getAll transaction
    @UseGuards(AuthGuard)
    @Get(':transType')
    async getExpensesByType(
        @Param() { transType }: { transType: number },
        @Request() request: { user: { sub: number } }
    ) {
        return this.transService.getAllByType(transType, request.user.sub)
    }

    // Route # 4 getAll transaction by type
    @UseGuards(AuthGuard)
    @Get()
    async getAllExpenses(
        @Request() request: { user: { sub: number } }
    ) {
        return this.transService.getAllById(request.user.sub)
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
