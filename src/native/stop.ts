import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$stop",
    category: "unknown",
    version: "1.0.0",
    description: "Stops code execution",
    unwrap: false,
    execute() {
        return this.stop()
    },
})
