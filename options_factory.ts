import { AnswerOption } from "./answer_option";

export abstract class AnswerOptionFactory {
    static of(description: String, isRight: boolean) {
        return new AnswerOption(description, isRight)
    }
}