import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isStringSelectMenu",
    category: "unknown",
    version: "1.0.0",
    description: "Returns whether the context is a string select menu",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isStringSelectMenu()))
    },
})
