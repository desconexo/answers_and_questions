import { Answer } from "./answer";
import { AnswerOption } from "./answer_option";

export class MultiOptionsAnswer extends Answer<Set<AnswerOption>> {
    constructor(options: Set<AnswerOption>) {
        super(options)
    }
}