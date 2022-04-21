"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hearsPlugin = void 0;
// 📚
const counter_model_1 = require("../../common/db/models/counter/counter.model");
const bot_1 = require("../../common/plugin/bot");
const chat_service_1 = require("../../common/service/chat/chat.service");
const message_service_1 = require("../../common/service/messages/message.service");
const keybord_1 = require("../../common/service/reply/keybord");
const user_service_1 = require("../../common/service/user/user.service");
const start_1 = require("../command/start");
async function hearsPlugin(instance, _, next) {
    bot_1.TgBot.on('text', async (ctx) => {
        console.log(ctx.message.text);
        console.log(ctx.session?.flag);
        switch (ctx.session?.flag) {
            case 'main':
                if (['1️⃣ high', '2️⃣ medium', '3️⃣ low'].includes(ctx.message.text)) {
                    ctx.session.flag = 'message';
                    ctx.session.messageType = ctx.message.text;
                    ctx.deleteMessage(ctx.message.message_id - 1);
                    ctx.deleteMessage(ctx.message.message_id);
                    return await ctx.replyWithHTML('Ok send me message', { reply_markup: { remove_keyboard: true } });
                }
                else {
                    ctx.deleteMessage(ctx.message.message_id - 1);
                    ctx.deleteMessage(ctx.message.message_id);
                    return await (0, start_1.commandStart)(ctx, 'Please send correct type! \n\n 1️⃣high,  2️⃣ medium,   3️⃣ low');
                }
                break;
            case 'message':
                ctx.session.flag = 'review';
                ctx.session.message = ctx.message.text;
                await (0, keybord_1.replyButtonService)(ctx, `Great \nType: ${ctx.session.messageType}\nMessage: ${ctx.session.message}`, [["🔄 level ", "accept"]]);
                ctx.deleteMessage(ctx.message.message_id - 1);
                return ctx.deleteMessage(ctx.message.message_id);
                break;
            case 'review':
                if (ctx.message.text == '🔄 level') {
                    ctx.session.flag = 'main';
                    ctx.deleteMessage(ctx.message.message_id - 1);
                    ctx.deleteMessage(ctx.message.message_id);
                    return await (0, start_1.commandStart)(ctx, 'choose messages level');
                }
                else if (ctx.message.text == 'accept') {
                    ctx.deleteMessage(ctx.message.message_id);
                    ctx.session.flag = 'main';
                    //* dbga yozasiz
                    try {
                        let { message_id, chat, date, from } = ctx.update.message;
                        console.log("ctx.update.message: ", ctx.update.message);
                        console.log("ctx.session.messageType: ", ctx.session.messageType);
                        const user = await user_service_1.userService.findOne({ id: from.id, first_name: from.first_name });
                        if (!user) {
                            await user_service_1.userService.create(from);
                        }
                        const chatGroup = await chat_service_1.chatService.findOne({ id: chat.id });
                        if (!chatGroup) {
                            await chat_service_1.chatService.create(chat);
                        }
                        let increment = await counter_model_1.CounterModel.getValue('increment') || 1;
                        await message_service_1.messageService.create({
                            date,
                            message_id,
                            userId: from.id,
                            chatId: chat.id,
                            text: ctx.session.message,
                            type: ctx.session.messageType,
                            increment: increment
                        });
                        return await (0, keybord_1.replyButtonService)(ctx, `✅, you can send another message`, [['1️⃣ high ', '2️⃣ medium', '3️⃣ low']]);
                        //dbga yozasiz
                    }
                    catch (e) {
                        console.log("error: ", e);
                        ctx.session.flag = 'review';
                        ctx.deleteMessage(ctx.message.message_id);
                        return await (0, keybord_1.replyButtonService)(ctx, `choose 🔄 level or accept`, [["🔄 level ", "accept"]]);
                    }
                }
                else {
                    ctx.session.flag = 'review';
                    ctx.deleteMessage(ctx.message.message_id);
                    return await (0, keybord_1.replyButtonService)(ctx, `choose 🔄 level or accept`, [["🔄 level ", "accept"]]);
                }
                break;
            default:
                break;
        }
    });
    next();
}
exports.hearsPlugin = hearsPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90Z0JvdC9vbi90ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLEtBQUs7QUFDTCxnRkFBNEU7QUFDNUUsaURBQWdEO0FBQ2hELHlFQUFxRTtBQUNyRSxtRkFBK0U7QUFDL0UsZ0VBQXdFO0FBQ3hFLHlFQUFxRTtBQUNyRSw0Q0FBZ0Q7QUFFekMsS0FBSyxVQUFVLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFHL0MsV0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFL0IsUUFBUSxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtZQUN2QixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2xFLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQTtvQkFDNUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7b0JBQzFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUE7b0JBQzdDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtvQkFDekMsT0FBTyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO2lCQUNwRztxQkFBTTtvQkFDSCxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFBO29CQUM3QyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7b0JBQ3pDLE9BQU8sTUFBTSxJQUFBLG9CQUFZLEVBQUMsR0FBRyxFQUFFLGdFQUFnRSxDQUFDLENBQUE7aUJBQ25HO2dCQUNELE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFBO2dCQUMzQixHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQTtnQkFDdEMsTUFBTSxJQUFBLDRCQUFrQixFQUNwQixHQUFHLEVBQ0gsaUJBQWlCLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxjQUFjLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQzNFLENBQUMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FDNUIsQ0FBQTtnQkFDRCxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUM3QyxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFFaEQsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLFVBQVUsRUFBRTtvQkFDaEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO29CQUMxQixHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFBO29CQUM3QyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7b0JBQ3pDLE9BQU8sTUFBTSxJQUFBLG9CQUFZLEVBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLENBQUE7aUJBQzFEO3FCQUFNLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO29CQUNyQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7b0JBQ3pDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztvQkFFMUIsZ0JBQWdCO29CQUNoQixJQUFJO3dCQUVBLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzt3QkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBRWxFLE1BQU0sSUFBSSxHQUFHLE1BQU0sMEJBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUE7d0JBQ3BGLElBQUksQ0FBQyxJQUFJLEVBQUU7NEJBQ1AsTUFBTSwwQkFBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTt5QkFDakM7d0JBRUQsTUFBTSxTQUFTLEdBQUcsTUFBTSwwQkFBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTt3QkFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRTs0QkFDWixNQUFNLDBCQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO3lCQUNqQzt3QkFDRCxJQUFJLFNBQVMsR0FBRyxNQUFNLDRCQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDOUQsTUFBTSxnQ0FBYyxDQUFDLE1BQU0sQ0FBQzs0QkFDeEIsSUFBSTs0QkFDSixVQUFVOzRCQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTs0QkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7NEJBQ2YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTzs0QkFDekIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVzs0QkFDN0IsU0FBUyxFQUFFLFNBQVM7eUJBQ3ZCLENBQUMsQ0FBQTt3QkFFRixPQUFPLE1BQU0sSUFBQSw0QkFBa0IsRUFDM0IsR0FBRyxFQUNILGlDQUFpQyxFQUNqQyxDQUFDLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUMzQyxDQUFBO3dCQUNELGNBQWM7cUJBQ2pCO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUVSLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7d0JBQzVCLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTt3QkFDekMsT0FBTyxNQUFNLElBQUEsNEJBQWtCLEVBQzNCLEdBQUcsRUFDSCwyQkFBMkIsRUFDM0IsQ0FBQyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUM1QixDQUFBO3FCQUNKO2lCQUNKO3FCQUFNO29CQUNILEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztvQkFDNUIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO29CQUN6QyxPQUFPLE1BQU0sSUFBQSw0QkFBa0IsRUFDM0IsR0FBRyxFQUNILDJCQUEyQixFQUMzQixDQUFDLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQzVCLENBQUE7aUJBQ0o7Z0JBQ0QsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtJQUNMLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxFQUFFLENBQUE7QUFDVixDQUFDO0FBdkdELGtDQXVHQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIPCfk5pcclxuaW1wb3J0IHsgQ291bnRlck1vZGVsIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kYi9tb2RlbHMvY291bnRlci9jb3VudGVyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFRnQm90IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9wbHVnaW4vYm90XCI7XHJcbmltcG9ydCB7IGNoYXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zZXJ2aWNlL2NoYXQvY2hhdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zZXJ2aWNlL21lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyByZXBseUJ1dHRvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3NlcnZpY2UvcmVwbHkva2V5Ym9yZFwiO1xyXG5pbXBvcnQgeyB1c2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb21tb24vc2VydmljZS91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBjb21tYW5kU3RhcnQgfSBmcm9tIFwiLi4vY29tbWFuZC9zdGFydFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhlYXJzUGx1Z2luKGluc3RhbmNlLCBfLCBuZXh0KSB7XHJcblxyXG5cclxuICAgIFRnQm90Lm9uKCd0ZXh0JywgYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN0eC5tZXNzYWdlLnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN0eC5zZXNzaW9uPy5mbGFnKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdHguc2Vzc2lvbj8uZmxhZykge1xyXG4gICAgICAgICAgICBjYXNlICdtYWluJzpcclxuICAgICAgICAgICAgICAgIGlmIChbJzHvuI/ig6MgaGlnaCcsICcy77iP4oOjIG1lZGl1bScsICcz77iP4oOjIGxvdyddLmluY2x1ZGVzKGN0eC5tZXNzYWdlLnRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNlc3Npb24uZmxhZyA9ICdtZXNzYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zZXNzaW9uLm1lc3NhZ2VUeXBlID0gY3R4Lm1lc3NhZ2UudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5kZWxldGVNZXNzYWdlKGN0eC5tZXNzYWdlLm1lc3NhZ2VfaWQgLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5kZWxldGVNZXNzYWdlKGN0eC5tZXNzYWdlLm1lc3NhZ2VfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGN0eC5yZXBseVdpdGhIVE1MKCdPayBzZW5kIG1lIG1lc3NhZ2UnLCB7IHJlcGx5X21hcmt1cDogeyByZW1vdmVfa2V5Ym9hcmQ6IHRydWUgfSB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZGVsZXRlTWVzc2FnZShjdHgubWVzc2FnZS5tZXNzYWdlX2lkIC0gMSlcclxuICAgICAgICAgICAgICAgICAgICBjdHguZGVsZXRlTWVzc2FnZShjdHgubWVzc2FnZS5tZXNzYWdlX2lkKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjb21tYW5kU3RhcnQoY3R4LCAnUGxlYXNlIHNlbmQgY29ycmVjdCB0eXBlISBcXG5cXG4gMe+4j+KDo2hpZ2gsICAy77iP4oOjIG1lZGl1bSwgICAz77iP4oOjIGxvdycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWVzc2FnZSc6XHJcbiAgICAgICAgICAgICAgICBjdHguc2Vzc2lvbi5mbGFnID0gJ3JldmlldydcclxuICAgICAgICAgICAgICAgIGN0eC5zZXNzaW9uLm1lc3NhZ2UgPSBjdHgubWVzc2FnZS50ZXh0XHJcbiAgICAgICAgICAgICAgICBhd2FpdCByZXBseUJ1dHRvblNlcnZpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICAgICAgICAgIGBHcmVhdCBcXG5UeXBlOiAke2N0eC5zZXNzaW9uLm1lc3NhZ2VUeXBlfVxcbk1lc3NhZ2U6ICR7Y3R4LnNlc3Npb24ubWVzc2FnZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIFtbXCLwn5SEIGxldmVsIFwiLCBcImFjY2VwdFwiXV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGN0eC5kZWxldGVNZXNzYWdlKGN0eC5tZXNzYWdlLm1lc3NhZ2VfaWQgLSAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eC5kZWxldGVNZXNzYWdlKGN0eC5tZXNzYWdlLm1lc3NhZ2VfaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Jldmlldyc6XHJcbiAgICAgICAgICAgICAgICBpZiAoY3R4Lm1lc3NhZ2UudGV4dCA9PSAn8J+UhCBsZXZlbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2Vzc2lvbi5mbGFnID0gJ21haW4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5kZWxldGVNZXNzYWdlKGN0eC5tZXNzYWdlLm1lc3NhZ2VfaWQgLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5kZWxldGVNZXNzYWdlKGN0eC5tZXNzYWdlLm1lc3NhZ2VfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNvbW1hbmRTdGFydChjdHgsICdjaG9vc2UgbWVzc2FnZXMgbGV2ZWwnKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdHgubWVzc2FnZS50ZXh0ID09ICdhY2NlcHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRlbGV0ZU1lc3NhZ2UoY3R4Lm1lc3NhZ2UubWVzc2FnZV9pZClcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2Vzc2lvbi5mbGFnID0gJ21haW4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyogZGJnYSB5b3phc2l6XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7IG1lc3NhZ2VfaWQsIGNoYXQsIGRhdGUsIGZyb20gfSA9IGN0eC51cGRhdGUubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdHgudXBkYXRlLm1lc3NhZ2U6IFwiLCBjdHgudXBkYXRlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImN0eC5zZXNzaW9uLm1lc3NhZ2VUeXBlOiBcIiwgY3R4LnNlc3Npb24ubWVzc2FnZVR5cGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmZpbmRPbmUoeyBpZDogZnJvbS5pZCwgZmlyc3RfbmFtZTogZnJvbS5maXJzdF9uYW1lIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdXNlclNlcnZpY2UuY3JlYXRlKGZyb20pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXRHcm91cCA9IGF3YWl0IGNoYXRTZXJ2aWNlLmZpbmRPbmUoeyBpZDogY2hhdC5pZCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoYXRHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY2hhdFNlcnZpY2UuY3JlYXRlKGNoYXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluY3JlbWVudCA9IGF3YWl0IENvdW50ZXJNb2RlbC5nZXRWYWx1ZSgnaW5jcmVtZW50JykgfHwgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbWVzc2FnZVNlcnZpY2UuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBmcm9tLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdElkOiBjaGF0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogY3R4LnNlc3Npb24ubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGN0eC5zZXNzaW9uLm1lc3NhZ2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50OiBpbmNyZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXBseUJ1dHRvblNlcnZpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBg4pyFLCB5b3UgY2FuIHNlbmQgYW5vdGhlciBtZXNzYWdlYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtbJzHvuI/ig6MgaGlnaCAnLCAnMu+4j+KDoyBtZWRpdW0nLCAnM++4j+KDoyBsb3cnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kYmdhIHlvemFzaXpcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zZXNzaW9uLmZsYWcgPSAncmV2aWV3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRlbGV0ZU1lc3NhZ2UoY3R4Lm1lc3NhZ2UubWVzc2FnZV9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcGx5QnV0dG9uU2VydmljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjaG9vc2Ug8J+UhCBsZXZlbCBvciBhY2NlcHRgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1tcIvCflIQgbGV2ZWwgXCIsIFwiYWNjZXB0XCJdXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNlc3Npb24uZmxhZyA9ICdyZXZpZXcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5kZWxldGVNZXNzYWdlKGN0eC5tZXNzYWdlLm1lc3NhZ2VfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlcGx5QnV0dG9uU2VydmljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgY2hvb3NlIPCflIQgbGV2ZWwgb3IgYWNjZXB0YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1tcIvCflIQgbGV2ZWwgXCIsIFwiYWNjZXB0XCJdXSxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbmV4dCgpXHJcbn1cclxuIl19