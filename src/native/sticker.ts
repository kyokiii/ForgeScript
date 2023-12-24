import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$sticker",
    category: "unknown",
    version: "1.3.0",
    description: "Attach a sticker to the response",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to get sticker from"
        },
        {
            name: "sticker ID",
            rest: false,
            required: true,
            type: ArgType.GuildSticker,
            pointer: 0,
            description: "The sticker to use"
        }
    ],
    execute(ctx, [, sticker]) {
        ctx.container.stickers.push(sticker.id)
        return this.success()
    },
})
