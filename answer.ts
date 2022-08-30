export abstract class Answer<T> {
    #type: T

    constructor(type: T) {
        this.#type = type
    }

    get type() : T {
        return this.#type
    }
}