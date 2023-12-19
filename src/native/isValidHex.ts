import { ArgType, NativeFunction } from "../structures"

export const MaxHexIntValue = 0xffffff as const
export const MinHexIntValue = 0 as const

export default new NativeFunction({
    name: "$isValidHex",
    version: "1.3.0",
    description: "The value to check for",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "hex",
            rest: false,
            required: true,
            type: ArgType.String,
            description: "The hex to check for"
        }
    ],
    execute(ctx, [ hex ]) {
        const int = parseInt(hex.replace("#", ""), 16)
        return this.success(!isNaN(int) && int >= MinHexIntValue && int <= MaxHexIntValue)
    },
})