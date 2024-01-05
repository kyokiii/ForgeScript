import { Sendable } from "../structures/@internal/Container";
import { IExtendedCompilationResult } from "./Compiler";
import { ForgeClient } from "./ForgeClient";
import { Channel, Guild, GuildAuditLogsEntry, GuildEmoji, GuildMember, Invite, Message, Presence, Role, StageInstance, User, VoiceState } from "discord.js";
import { BaseCommand } from "../structures";
export interface IStates {
    message: Message;
    voiceState: VoiceState;
    presence: Presence;
    role: Role;
    member: GuildMember;
    emoji: GuildEmoji;
    user: User;
    audit: GuildAuditLogsEntry;
    channel: Channel;
    guild: Guild;
    stage: StageInstance;
    invite: Invite;
}
export type States = {
    [K in keyof IStates]?: {
        old?: IStates[K] | null;
        new?: IStates[K] | null;
    };
};
export interface IRunnable {
    /**
     * The available discord client
     */
    client: ForgeClient;
    /**
     * The compiled data to execute
     */
    data: IExtendedCompilationResult;
    /**
     * The context this code will run in
     */
    obj: Sendable;
    /**
     * The command used for this execution
     */
    command: BaseCommand<unknown> | null;
    /**
     * Whether to suppress sending the response to discord.
     */
    doNotSend?: boolean;
    /**
     * Extras data
     */
    extras?: unknown;
    /**
     * Whether to suppress errors from being sent to discord, and be sent to console instead
     */
    redirectErrorsToConsole?: boolean;
    /**
     * The old and new states of a event
     */
    states?: States;
    /**
     * The already existing variables defined with $let
     */
    keywords?: Record<string, string>;
    /**
     * The already existing env variables
     */
    environment?: Record<string, unknown>;
    /**
     * The args used in the message command
     */
    args?: string[];
}
export declare class Interpreter {
    static run(runtime: IRunnable): Promise<string | null>;
}
//# sourceMappingURL=Interpreter.d.ts.map