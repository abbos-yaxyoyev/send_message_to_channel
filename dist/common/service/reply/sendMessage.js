"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyText = void 0;
async function TryReplyText(ctx, message, options) {
    await ctx.reply(message, {
        parse_mode: 'markdown',
        ...options
    });
}
exports.ReplyText = TryReplyText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL3NlcnZpY2UvcmVwbHkvc2VuZE1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsS0FBSyxVQUFVLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBZSxFQUFFLE9BQWE7SUFDM0QsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUNYLE9BQU8sRUFDUDtRQUNJLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLEdBQUcsT0FBTztLQUNiLENBQ0osQ0FBQztBQUNOLENBQUM7QUFFWSxRQUFBLFNBQVMsR0FBRyxZQUFZLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYXN5bmMgZnVuY3Rpb24gVHJ5UmVwbHlUZXh0KGN0eCwgbWVzc2FnZTogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XHJcbiAgICBhd2FpdCBjdHgucmVwbHkoXHJcbiAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcnNlX21vZGU6ICdtYXJrZG93bicsXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUmVwbHlUZXh0ID0gVHJ5UmVwbHlUZXh0XHJcbiJdfQ==