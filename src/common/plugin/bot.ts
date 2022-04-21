import fp from 'fastify-plugin';
import { Context, session, Telegraf } from 'telegraf';
import { ENV } from '../config/config';

interface SessionData {
    flag: string;
    messageType: string,
    message: string,
    // ... more session data go here
}

// Define your own context type
export interface MyBotContext extends Context {
    session?: SessionData

    // ... more props go here
}

const bot = new Telegraf<MyBotContext>(ENV.TELEGRAF_TOKEN);

// bot.use(async (ctx, next) => await Logger(ctx, next))
bot.use(session({}));
bot.use((ctx: MyBotContext, next) => {
    ctx.session = {
        flag: ctx.session?.flag ? ctx.session.flag : 'main',
        messageType: ctx.session?.messageType ? ctx.session.messageType : '',
        message: ctx.session?.message ? ctx.session.message : '',

    }
    next()
})
async function startBot(instance) {

    try {
        await instance.register(require('middie'))
        // await instance.use(bot.webhookCallback(`/${ENV.TELEGRAF_TOKEN}`))
        // await bot.telegram.setWebhook(`${ENV.WEB_HOOK_URL}/${ENV.TELEGRAF_TOKEN}`)

        await bot.launch()
    }
    catch (error) {
        console.log(error.message)
    }

    console.log('Bot running')
}

async function BotApiPlugin(instance, _, next) {

    instance.post(`/${process.env.BOT_TOKEN}`, (_, reply) => {
        reply.send({ root: true })
    })

    await startBot(instance);
    next()
}

export const BotApi = fp(BotApiPlugin);
export const TgBot = bot;
