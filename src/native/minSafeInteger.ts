import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$minSafeInteger",
    category: "unknown",
    version: "1.0.6",
    description: "Returns the lowest safe integer",
    unwrap: false,
    execute() {
        return this.success(Number.MIN_SAFE_INTEGER)
    },
})
