// 📚
import { CounterModel } from "../../common/db/models/counter/counter.model";
import { TgBot } from "../../common/plugin/bot";
import { chatService } from "../../common/service/chat/chat.service";
import { messageService } from "../../common/service/messages/message.service";
import { replyButtonService } from "../../common/service/reply/keybord";
import { userService } from "../../common/service/user/user.service";
import { commandStart } from "../command/start";

export async function hearsPlugin(instance, _, next) {


    TgBot.on('text', async (ctx) => {
        console.log(ctx.message.text);
        console.log(ctx.session?.flag);

        switch (ctx.session?.flag) {
            case 'main':
                if (['1️⃣ high', '2️⃣ medium', '3️⃣ low'].includes(ctx.message.text)) {
                    ctx.session.flag = 'message'
                    ctx.session.messageType = ctx.message.text
                    ctx.deleteMessage(ctx.message.message_id - 1)
                    ctx.deleteMessage(ctx.message.message_id)
                    return await ctx.replyWithHTML('Ok send me message', { reply_markup: { remove_keyboard: true } })
                } else {
                    ctx.deleteMessage(ctx.message.message_id - 1)
                    ctx.deleteMessage(ctx.message.message_id)
                    return await commandStart(ctx, 'Please send correct type! \n\n 1️⃣high,  2️⃣ medium,   3️⃣ low')
                }
                break;
            case 'message':
                ctx.session.flag = 'review'
                ctx.session.message = ctx.message.text
                await replyButtonService(
                    ctx,
                    `Great \nType: ${ctx.session.messageType}\nMessage: ${ctx.session.message}`,
                    [["🔄 level ", "accept"]]
                )
                ctx.deleteMessage(ctx.message.message_id - 1)
                return ctx.deleteMessage(ctx.message.message_id)

                break;
            case 'review':
                if (ctx.message.text == '🔄 level') {
                    ctx.session.flag = 'main';
                    ctx.deleteMessage(ctx.message.message_id - 1)
                    ctx.deleteMessage(ctx.message.message_id)
                    return await commandStart(ctx, 'choose messages level')
                } else if (ctx.message.text == 'accept') {
                    ctx.deleteMessage(ctx.message.message_id)
                    ctx.session.flag = 'main';

                    //* dbga yozasiz
                    try {

                        let { message_id, chat, date, from } = ctx.update.message;
                        console.log("ctx.update.message: ", ctx.update.message);
                        console.log("ctx.session.messageType: ", ctx.session.messageType);

                        const user = await userService.findOne({ id: from.id, first_name: from.first_name })
                        if (!user) {
                            await userService.create(from)
                        }

                        const chatGroup = await chatService.findOne({ id: chat.id })
                        if (!chatGroup) {
                            await chatService.create(chat)
                        }
                        let increment = await CounterModel.getValue('increment') || 1;
                        await messageService.create({
                            date,
                            message_id,
                            userId: from.id,
                            chatId: chat.id,
                            text: ctx.session.message,
                            type: ctx.session.messageType,
                            increment: increment
                        })

                        return await replyButtonService(
                            ctx,
                            `✅, you can send another message`,
                            [['1️⃣ high ', '2️⃣ medium', '3️⃣ low']],
                        )
                        //dbga yozasiz
                    } catch (e) {

                        console.log("error: ", e);
                        ctx.session.flag = 'review';
                        ctx.deleteMessage(ctx.message.message_id)
                        return await replyButtonService(
                            ctx,
                            `choose 🔄 level or accept`,
                            [["🔄 level ", "accept"]],
                        )
                    }
                } else {
                    ctx.session.flag = 'review';
                    ctx.deleteMessage(ctx.message.message_id)
                    return await replyButtonService(
                        ctx,
                        `choose 🔄 level or accept`,
                        [["🔄 level ", "accept"]],
                    )
                }
                break;
            default:
                break;
        }
    })

    next()
}
