import { AnswerOption } from "./answer_option";
import { MultiOptionsAnswer } from "./multi_options_answer";
import { TextAnswer } from "./text_answer";

export abstract class AnswerFactory {
    static ofText(description: String ): TextAnswer {
        return new TextAnswer(description);
    }

    static ofMultiOptions(options: Set<AnswerOption>): MultiOptionsAnswer {
        return new MultiOptionsAnswer(options);
    }
}