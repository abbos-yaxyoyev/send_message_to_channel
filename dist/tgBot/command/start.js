"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Start = exports.commandStart = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const telegraf_1 = require("telegraf");
const bot_1 = require("../../common/plugin/bot");
async function commandStart(ctx, message) {
    return await ctx.reply(message, telegraf_1.Markup
        .keyboard([
        ['1️⃣ high ', '2️⃣ medium', '3️⃣ low'],
    ])
        .oneTime()
        .resize());
}
exports.commandStart = commandStart;
async function StartPlugin(_, __, next) {
    bot_1.TgBot.start(async (ctx) => {
        commandStart(ctx, 'choose messages level');
        ctx.deleteMessage(ctx.message.message_id);
    });
    next();
}
exports.Start = (0, fastify_plugin_1.default)(StartPlugin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGdCb3QvY29tbWFuZC9zdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNEVBQWdDO0FBQ2hDLHVDQUFrQztBQUNsQyxpREFBZ0Q7QUFHekMsS0FBSyxVQUFVLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBZTtJQUNuRCxPQUFPLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FDbEIsT0FBTyxFQUNQLGlCQUFNO1NBQ0QsUUFBUSxDQUFDO1FBQ04sQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQztLQUN6QyxDQUFDO1NBQ0QsT0FBTyxFQUFFO1NBQ1QsTUFBTSxFQUFFLENBQ2hCLENBQUE7QUFDTCxDQUFDO0FBVkQsb0NBVUM7QUFFRCxLQUFLLFVBQVUsV0FBVyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSTtJQUVsQyxXQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUN0QixZQUFZLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLENBQUE7UUFDMUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBRTdDLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxFQUFFLENBQUE7QUFDVixDQUFDO0FBRVksUUFBQSxLQUFLLEdBQUcsSUFBQSx3QkFBRSxFQUFDLFdBQVcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZwIGZyb20gJ2Zhc3RpZnktcGx1Z2luJztcclxuaW1wb3J0IHsgTWFya3VwIH0gZnJvbSAndGVsZWdyYWYnO1xyXG5pbXBvcnQgeyBUZ0JvdCB9IGZyb20gJy4uLy4uL2NvbW1vbi9wbHVnaW4vYm90JztcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29tbWFuZFN0YXJ0KGN0eCwgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgY3R4LnJlcGx5KFxyXG4gICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgTWFya3VwXHJcbiAgICAgICAgICAgIC5rZXlib2FyZChbXHJcbiAgICAgICAgICAgICAgICBbJzHvuI/ig6MgaGlnaCAnLCAnMu+4j+KDoyBtZWRpdW0nLCAnM++4j+KDoyBsb3cnXSxcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgLm9uZVRpbWUoKVxyXG4gICAgICAgICAgICAucmVzaXplKClcclxuICAgIClcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gU3RhcnRQbHVnaW4oXywgX18sIG5leHQpIHtcclxuXHJcbiAgICBUZ0JvdC5zdGFydChhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgICAgY29tbWFuZFN0YXJ0KGN0eCwgJ2Nob29zZSBtZXNzYWdlcyBsZXZlbCcpXHJcbiAgICAgICAgY3R4LmRlbGV0ZU1lc3NhZ2UoY3R4Lm1lc3NhZ2UubWVzc2FnZV9pZClcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIG5leHQoKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3RhcnQgPSBmcChTdGFydFBsdWdpbik7XHJcbiJdfQ==