import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildOwnerID",
    category: "unknown",
    version: "1.0.0",
    description: "Returns the server owner id",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the owner from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.ownerId)
    },
})
