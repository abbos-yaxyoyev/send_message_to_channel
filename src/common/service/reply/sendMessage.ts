
async function TryReplyText(ctx, message: string, options?: any) {
    await ctx.reply(
        message,
        {
            parse_mode: 'markdown',
            ...options
        }
    );
}

export const ReplyText = TryReplyText
