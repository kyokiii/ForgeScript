import { MemberProperties, MemberProperty } from "../properties/member"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$oldMember",
    category: "unknown",
    version: "1.0.0",
    description: "Retrieves old data from an event whose context was a guild member instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: MemberProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(MemberProperties[prop](ctx.states?.member?.old, sep))
    },
})
