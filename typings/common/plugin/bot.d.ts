/// <reference types="node" />
import { Context, Telegraf } from 'telegraf';
interface SessionData {
    flag: string;
    messageType: string;
    message: string;
}
export interface MyBotContext extends Context {
    session?: SessionData;
}
export declare const BotApi: import("fastify").FastifyPluginCallback<any, import("http").Server>;
export declare const TgBot: Telegraf<MyBotContext>;
export {};
