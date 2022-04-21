"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModel = exports.Chat = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
let Chat = class Chat {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({}),
    tslib_1.__metadata("design:type", Number)
], Chat.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], Chat.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], Chat.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], Chat.prototype, "first_name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], Chat.prototype, "username", void 0);
Chat = tslib_1.__decorate([
    (0, typegoose_1.index)({
        id: 1,
        type: 1,
    }, {
        background: true,
        name: 'type&id',
    })
], Chat);
exports.Chat = Chat;
exports.ChatModel = (0, typegoose_1.getModelForClass)(Chat);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWxzL2NoYXQvY2hhdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQXFFO0FBYXJFLElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7Q0FnQmhCLENBQUE7QUFkQztJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLENBQUM7O2dDQUNVO0FBR25CO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztrQ0FDRDtBQUdwQjtJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7bUNBQ0M7QUFHdEI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O3dDQUNNO0FBRzNCO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztzQ0FDRztBQWRiLElBQUk7SUFYaEIsSUFBQSxpQkFBSyxFQUNKO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsQ0FBQztLQUNSLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUsU0FBUztLQUNoQixDQUNGO0dBRVksSUFBSSxDQWdCaEI7QUFoQlksb0JBQUk7QUFrQkosUUFBQSxTQUFTLEdBQUcsSUFBQSw0QkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1vZGVsRm9yQ2xhc3MsIGluZGV4LCBwcm9wIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UnO1xyXG5cclxuQGluZGV4KFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdHlwZTogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRydWUsXHJcbiAgICBuYW1lOiAndHlwZSZpZCcsXHJcbiAgfSxcclxuKVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYXQge1xyXG4gIEBwcm9wKHt9KVxyXG4gIHB1YmxpYyBpZCE6IG51bWJlcjtcclxuXHJcbiAgQHByb3AoeyB0cmltOiB0cnVlIH0pXHJcbiAgcHVibGljIHR5cGU6IHN0cmluZztcclxuXHJcbiAgQHByb3AoeyB0cmltOiB0cnVlIH0pXHJcbiAgcHVibGljIHRpdGxlPzogc3RyaW5nO1xyXG5cclxuICBAcHJvcCh7IHRyaW06IHRydWUgfSlcclxuICBwdWJsaWMgZmlyc3RfbmFtZT86IHN0cmluZztcclxuXHJcbiAgQHByb3AoeyB0cmltOiB0cnVlIH0pXHJcbiAgcHVibGljIHVzZXJuYW1lOiBzdHJpbmc7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhdE1vZGVsID0gZ2V0TW9kZWxGb3JDbGFzcyhDaGF0KTtcclxuIl19