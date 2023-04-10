import { Injectable } from "@nestjs/common";
import { CreateUserDTO, UserCommonDetailsDTO } from "./auth.dto";

@Injectable()
export class AuthsService {
    create(body: CreateUserDTO): string {
        console.log(body)
        return "create"
    }

    findOne(body: UserCommonDetailsDTO): string {
        console.log("body")
        return "get"
    }
}