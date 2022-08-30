import { Answer } from "./answer";
import { Level } from "./level";
import { Question } from "./question";

export class QuestionFactory {
    of(description: String, level: Level, answer: Answer<any>) {
        return new Question<typeof answer.type>(description, level, answer)
    }
}