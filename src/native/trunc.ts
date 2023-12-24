import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$trunc",
    category: "unknown",
    version: "1.0.0",
    description:
        "Returns the integer part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(_, [n]) {
        return this.success(Math.trunc(n))
    },
})
