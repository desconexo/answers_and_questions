import { Answer } from "./answer"

export class TextAnswer extends Answer<String> {
    constructor(description: String) {
        super(description)
    }
}