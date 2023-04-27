import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UsePipes,
  UseGuards,
  Request
} from "@nestjs/common";
import { CreateUserDTO, UserCommonDetailsDTO, UserEditDTO } from "./auth.dto";
import { AuthsService } from "./auth.service";
import { SETTINGS } from "./auth.utils";
import { AuthGuard } from "./auth.guard";

@Controller()
export class AuthController {
  constructor(private authService: AuthsService) {}

  // Route # 1 Get User
  @Post("signin")
  @UsePipes(SETTINGS.VALIDATION_PIPES)
  async getUser(@Body() body: UserCommonDetailsDTO): Promise<any> {
    return this.authService.findOne(body);
  }

  // Route # 2 Create User
  @Post("signup")
  @UsePipes(SETTINGS.VALIDATION_PIPES)
  async createUser(@Body() body: CreateUserDTO): Promise<any> {
    return this.authService.create(body);
  }

  // Route # 3 Delete User
  @UseGuards(AuthGuard)
  @Delete("delete")
  async deleteUser(
    @Request() request: { user: { sub: number } }
  ): Promise<{ success: boolean; message: string }> {
    return this.authService.remove(request.user.sub);
  }

  // Route # 4 Edit User
  @Put("edit")
  @UseGuards(AuthGuard)
  @UsePipes(SETTINGS.VALIDATION_PIPES)
  editUser(
    @Body() name: UserEditDTO,
    @Request() request: { user: { sub: number } }
  ): Promise<{ success: boolean; message: string; user: string }> {
    return this.authService.edit({ name, id: request.user.sub });
  }
}
