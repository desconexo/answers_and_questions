import { AnswerFactory } from "./answer_factory";
import { AnswerOption } from "./answer_option";
import { Level } from "./level";
import { AnswerOptionFactory } from "./options_factory";
import { QuestionFactory } from "./question_factory";

let question1 = new QuestionFactory().of(
    "Quanto é 1+1?", 
    Level.EASIER, 
    AnswerFactory.ofText("2"))

let options = new Set<AnswerOption>([
    AnswerOptionFactory.of("Mauro", true),
    AnswerOptionFactory.of("Reinaldo", false),
    AnswerOptionFactory.of("Carina", false)])

let question2 = new QuestionFactory().of(
    "Quem descobriu Aracati?",
    Level.EASIER,
    AnswerFactory.ofMultiOptions(options))

console.log(question1.description, question1.answer.type)


console.log(question2.description)
// console.log(question2.answer.type)
question2.answer.type.forEach(
    (answer: AnswerOption) => {
        console.log(answer.description, answer.isRight)
    })
