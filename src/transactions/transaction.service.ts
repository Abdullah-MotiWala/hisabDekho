import { AddTransaction } from "./transaction.dto";
import {
    HttpException,
    HttpStatus,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException
} from "@nestjs/common";
import { Transaction } from "./transaction.entity";
import { SUCCESS_MESSAGES } from "./transaction.utils";
import { Auth } from "src/auth/auth.entity";

@Injectable()
export class TransService {
    async add(body: AddTransaction,): Promise<any> {
        const { title, amount, description } = body
        const { email } = { email: "user" }
        const dbUser = await Auth.findOne({ where: { email } });
        const transaction = Transaction.create({ title, amount, description, createdBy: dbUser?.id })
        if (!transaction) {
            throw new InternalServerErrorException();
        }

        return {
            success: true,
            message: SUCCESS_MESSAGES.CREATE_SUCCEED
        };
    }
}
