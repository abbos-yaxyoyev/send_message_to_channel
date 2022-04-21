import { Markup } from 'telegraf'; // Module to use Telegraf API.

//! keybord
export async function replyButtonService(ctx, message: string, keyboards = [], options: any = null) {
    await ctx.reply(
        message,
        Markup.keyboard(keyboards)
            .oneTime()
            .resize(),
        {
            parse_mode: 'markdown',
            ...options
        }
    )
}

