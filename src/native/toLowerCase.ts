import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$toLowerCase",
    description: "Makes a string lowercase",
    unwrap: true,
    args: [
        {
            name: "string",
            description: "The string to turn lowercase",
            type: ArgType.String,
            rest: true,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [ values ]) {
        return Return.success(values.join(";").toLowerCase())   
    }
})