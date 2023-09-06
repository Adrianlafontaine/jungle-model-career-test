import Animal from "./Animal.js";

export default class Snake extends Animal {
    constructor(energy) {
        super('snake', energy)
    }
}