import { Answer } from "./answer"
import { Level } from "./level"

export class Question<T> {
    #description: String
    #level: Level
    // #tags: Set<String>
    #answer: Answer<T>

    constructor(description: String, level: Level, answer: Answer<T>) {
        this.#answer = answer
        this.#description = description
        this.#level = level
    }

    get description() : String {
        return this.#description
    }

    get level() : Level {
        return this.#level
    }

    get answer() : Answer<T> {
        return this.#answer
    }


}