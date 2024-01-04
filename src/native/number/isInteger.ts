import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isInteger",
    version: "1.0.0",
    description: "Whether the number is an integer",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "number",
            description: "The number to check",
            required: true,
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(_, [n]) {
        return this.success(n % 1 === 0)
    },
})
