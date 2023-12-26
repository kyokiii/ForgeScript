"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildAvailable",
    version: "1.3.0",
    description: "Returns whether the server is available",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        guild.maximumBitrate;
        return this.success((guild ?? ctx.guild)?.available);
    },
});
//# sourceMappingURL=guildAvailable.js.map