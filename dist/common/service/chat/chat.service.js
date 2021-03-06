"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatService = exports.ChatService = void 0;
const exceptions_1 = require("../../constant/exceptions");
const chat_model_1 = require("../../db/models/chat/chat.model");
const base_service_1 = require("../base.service");
class ChatService extends base_service_1.BaseServices {
    constructor(model) {
        super(model, exceptions_1.CommonUserException);
    }
    async findByIdError(id, options, projection) {
        const user = await this.findById(id, options, projection);
        if (!user)
            throw exceptions_1.CommonUserException.NotFound(id);
        return user;
    }
}
exports.ChatService = ChatService;
exports.chatService = new ChatService(chat_model_1.ChatModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL2NoYXQvY2hhdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUFnRTtBQUNoRSxnRUFBa0U7QUFDbEUsa0RBQStDO0FBRS9DLE1BQWEsV0FBWSxTQUFRLDJCQUFrQjtJQUNqRCxZQUFZLEtBQXNCO1FBQ2hDLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0NBQW1CLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsT0FBUSxFQUFFLFVBQVc7UUFDbEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLGdDQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FFRjtBQVhELGtDQVdDO0FBRVksUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsc0JBQVMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxUeXBlIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UvbGliL3R5cGVzJztcclxuaW1wb3J0IHsgQ29tbW9uVXNlckV4Y2VwdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50L2V4Y2VwdGlvbnMnO1xyXG5pbXBvcnQgeyBDaGF0LCBDaGF0TW9kZWwgfSBmcm9tICcuLi8uLi9kYi9tb2RlbHMvY2hhdC9jaGF0Lm1vZGVsJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2VzIH0gZnJvbSAnLi4vYmFzZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGF0U2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlczxDaGF0PiB7XHJcbiAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsVHlwZTxDaGF0Pikge1xyXG4gICAgc3VwZXIobW9kZWwsIENvbW1vblVzZXJFeGNlcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGZpbmRCeUlkRXJyb3IoaWQsIG9wdGlvbnM/LCBwcm9qZWN0aW9uPykge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuZmluZEJ5SWQoaWQsIG9wdGlvbnMsIHByb2plY3Rpb24pO1xyXG4gICAgaWYgKCF1c2VyKSB0aHJvdyBDb21tb25Vc2VyRXhjZXB0aW9uLk5vdEZvdW5kKGlkKTtcclxuICAgIHJldHVybiB1c2VyO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGF0U2VydmljZSA9IG5ldyBDaGF0U2VydmljZShDaGF0TW9kZWwpXHJcbiJdfQ==