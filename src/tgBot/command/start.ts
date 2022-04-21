import fp from 'fastify-plugin';
import { Markup } from 'telegraf';
import { TgBot } from '../../common/plugin/bot';


export async function commandStart(ctx, message: string) {
    return await ctx.reply(
        message,
        Markup
            .keyboard([
                ['1️⃣ high ', '2️⃣ medium', '3️⃣ low'],
            ])
            .oneTime()
            .resize()
    )
}

async function StartPlugin(_, __, next) {

    TgBot.start(async (ctx) => {
        commandStart(ctx, 'choose messages level')
        ctx.deleteMessage(ctx.message.message_id)

    })

    next()
}

export const Start = fp(StartPlugin);
