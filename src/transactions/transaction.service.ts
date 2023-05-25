import { AddTransaction } from "./transaction.dto";
import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from "@nestjs/common";
import { Transaction } from "./transaction.entity";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "./transaction.utils";
import { Auth } from "src/auth/auth.entity";

@Injectable()
export class TransService {
    async create(body: AddTransaction, id: number): Promise<any> {
        const { title, amount, description, transType } = body
        const transaction = new Transaction()

        transaction.amount = amount
        transaction.description = description
        transaction.title = title
        transaction.createdBy = id
        transaction.transType = transType

        transaction.save()

        if (!transaction) {
            throw new InternalServerErrorException();
        }

        return {
            success: true,
            message: SUCCESS_MESSAGES.CREATE_SUCCEED
        };
    }

    async edit(body: AddTransaction, id: number) {
        const transaction = await Transaction.findOne({ where: { id } })
        if (transaction?.isDeleted) {
            throw new NotFoundException();
        }

        const updatedTransaction = await Transaction.update({ id }, body);
        if (!updatedTransaction.affected) {
            throw new NotFoundException();
        }
        return {
            success: true,
            message: SUCCESS_MESSAGES.UPDATE_SUCCEED
        };
    }

    async remove(id: number) {
        const transaction = await Transaction.update({ id }, { isDeleted: true });
        if (!transaction.affected) {
            // throw new NotFoundException();
        }

        return {
            success: true,
            message: SUCCESS_MESSAGES.DELETE_SUCCEED
        };
    }

    async getAllById(id: number) {
        const transactions = await Transaction.find({
            where: [
                { createdBy: id, isDeleted: false },
            ]
        })

        return {
            success: true,
            data: transactions
        }
    }

    async getAllByType(transType: number, id: number) {
        console.log(transType, id)
        const transactions = await Transaction.find({
            where: [
                { isDeleted: false, transType: Number(transType), createdBy: id },
            ]
        })

        return {
            success: true,
            data: transactions
        }
    }
}
