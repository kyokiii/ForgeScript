import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Guild;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Member;
    required: true;
    pointer: number;
}, {
    name: string;
    description: string;
    rest: true;
    type: ArgType.String;
    enum: {
        readonly CreateInstantInvite: bigint;
        readonly KickMembers: bigint;
        readonly BanMembers: bigint;
        readonly Administrator: bigint;
        readonly ManageChannels: bigint;
        readonly ManageGuild: bigint;
        readonly AddReactions: bigint;
        readonly ViewAuditLog: bigint;
        readonly PrioritySpeaker: bigint;
        readonly Stream: bigint;
        readonly ViewChannel: bigint;
        readonly SendMessages: bigint;
        readonly SendTTSMessages: bigint;
        readonly ManageMessages: bigint;
        readonly EmbedLinks: bigint;
        readonly AttachFiles: bigint;
        readonly ReadMessageHistory: bigint;
        readonly MentionEveryone: bigint;
        readonly UseExternalEmojis: bigint;
        readonly ViewGuildInsights: bigint;
        readonly Connect: bigint;
        readonly Speak: bigint;
        readonly MuteMembers: bigint;
        readonly DeafenMembers: bigint;
        readonly MoveMembers: bigint;
        readonly UseVAD: bigint;
        readonly ChangeNickname: bigint;
        readonly ManageNicknames: bigint;
        readonly ManageRoles: bigint;
        readonly ManageWebhooks: bigint;
        readonly ManageEmojisAndStickers: bigint;
        readonly ManageGuildExpressions: bigint;
        readonly UseApplicationCommands: bigint;
        readonly RequestToSpeak: bigint;
        readonly ManageEvents: bigint;
        readonly ManageThreads: bigint;
        readonly CreatePublicThreads: bigint;
        readonly CreatePrivateThreads: bigint;
        readonly UseExternalStickers: bigint;
        readonly SendMessagesInThreads: bigint;
        readonly UseEmbeddedActivities: bigint;
        readonly ModerateMembers: bigint;
        readonly ViewCreatorMonetizationAnalytics: bigint;
        readonly UseSoundboard: bigint;
        readonly UseExternalSounds: bigint;
        readonly SendVoiceMessages: bigint;
    };
    required: true;
}], true>;
export default _default;
//# sourceMappingURL=hasPerms.d.ts.map