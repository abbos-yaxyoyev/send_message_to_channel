"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = exports.Message = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
let Message = class Message {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Message.prototype, "isVerify", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Message.prototype, "message_id", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Message.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Message.prototype, "chatId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Message.prototype, "date", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "text", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true, }),
    tslib_1.__metadata("design:type", Number)
], Message.prototype, "increment", void 0);
Message = tslib_1.__decorate([
    (0, typegoose_1.index)({
        date: 1,
        message_id: 1,
        userId: 1,
        chatId: 1,
        type: 1
    }, {
        background: true,
        name: 'datet&message_id&userId&chatId&type',
    })
], Message);
exports.Message = Message;
exports.MessageModel = (0, typegoose_1.getModelForClass)(Message);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9EQUFxRTtBQWdCckUsSUFBYSxPQUFPLEdBQXBCLE1BQWEsT0FBTztDQTRCbkIsQ0FBQTtBQXpCQztJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7eUNBQ0E7QUFHekI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzJDQUNFO0FBSTNCO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDVjtBQUlmO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDVjtBQUdmO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztxQ0FDSjtBQUdyQjtJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztxQ0FDakI7QUFHcEI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7cUNBQ2pCO0FBR3BCO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksR0FBRyxDQUFDOzswQ0FDRDtBQTFCZCxPQUFPO0lBZG5CLElBQUEsaUJBQUssRUFDSjtRQUNFLElBQUksRUFBRSxDQUFDO1FBQ1AsVUFBVSxFQUFFLENBQUM7UUFDYixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO1FBQ1QsSUFBSSxFQUFFLENBQUM7S0FDUixFQUNEO1FBQ0UsVUFBVSxFQUFFLElBQUk7UUFDaEIsSUFBSSxFQUFFLHFDQUFxQztLQUM1QyxDQUNGO0dBRVksT0FBTyxDQTRCbkI7QUE1QlksMEJBQU87QUE4QlAsUUFBQSxZQUFZLEdBQUcsSUFBQSw0QkFBZ0IsRUFBQyxPQUFPLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1vZGVsRm9yQ2xhc3MsIGluZGV4LCBwcm9wIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UnO1xyXG5cclxuQGluZGV4KFxyXG4gIHtcclxuICAgIGRhdGU6IDEsXHJcbiAgICBtZXNzYWdlX2lkOiAxLFxyXG4gICAgdXNlcklkOiAxLFxyXG4gICAgY2hhdElkOiAxLFxyXG4gICAgdHlwZTogMVxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIG5hbWU6ICdkYXRldCZtZXNzYWdlX2lkJnVzZXJJZCZjaGF0SWQmdHlwZScsXHJcbiAgfSxcclxuKVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xyXG5cclxuICBAcHJvcCh7IGRlZmF1bHQ6IGZhbHNlIH0pXHJcbiAgcHVibGljIGlzVmVyaWZ5OiBib29sZWFuO1xyXG5cclxuICBAcHJvcCh7IHJlcXVpcmVkOiB0cnVlIH0pXHJcbiAgcHVibGljIG1lc3NhZ2VfaWQhOiBudW1iZXI7XHJcblxyXG4gIC8vISB1c2VyICBpZCBcclxuICBAcHJvcCh7IHJlcXVpcmVkOiB0cnVlIH0pXHJcbiAgdXNlcklkOiBudW1iZXI7XHJcblxyXG4gIC8vISBjaGF0IGlkXHJcbiAgQHByb3AoeyByZXF1aXJlZDogdHJ1ZSB9KVxyXG4gIGNoYXRJZDogbnVtYmVyO1xyXG5cclxuICBAcHJvcCh7IHJlcXVpcmVkOiB0cnVlIH0pXHJcbiAgcHVibGljIGRhdGUhOiBudW1iZXI7XHJcblxyXG4gIEBwcm9wKHsgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSlcclxuICBwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cclxuICBAcHJvcCh7IHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0pXHJcbiAgcHVibGljIHR5cGU6IHN0cmluZztcclxuXHJcbiAgQHByb3AoeyByZXF1aXJlZDogdHJ1ZSwgfSlcclxuICBwdWJsaWMgaW5jcmVtZW50OiBudW1iZXI7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZU1vZGVsID0gZ2V0TW9kZWxGb3JDbGFzcyhNZXNzYWdlKTtcclxuIl19