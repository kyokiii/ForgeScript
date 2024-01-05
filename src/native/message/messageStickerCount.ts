import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$messageStickerCount",
    version: "1.4.0",
    output: ArgType.Number,
    description: "Retrieves sticker count of this message",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to pull message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its sticker count",
            rest: false,
            required: true,
            type: ArgType.Message,
        }
    ],
    execute(ctx, [, message]) {
        return this.success((message ?? ctx.message)?.stickers.size)
    },
})
