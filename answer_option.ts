export class AnswerOption {
    #description: String
    #isRight: boolean

    constructor(description: String, isRight: boolean) {
        this.#description = description
        this.#isRight = isRight
    }

    get description() : String {
        return this.#description
    }

    get isRight() : boolean {
        return this.#isRight
    }
}