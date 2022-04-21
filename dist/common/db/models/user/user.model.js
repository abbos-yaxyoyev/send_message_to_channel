"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
let User = class User {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "is_bot", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "first_name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "last_name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "language_code", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({}),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "lastEnteredAt", void 0);
User = tslib_1.__decorate([
    (0, typegoose_1.index)({
        id: 1,
        is_bot: 1,
    }, {
        background: true,
        name: 'is_bot&id',
    })
], User);
exports.User = User;
exports.UserModel = (0, typegoose_1.getModelForClass)(User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWxzL3VzZXIvdXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQXFFO0FBYXJFLElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7Q0FzQmhCLENBQUE7QUFwQkM7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O2dDQUNGO0FBR25CO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDOztvQ0FDRjtBQUd2QjtJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7d0NBQ0s7QUFHMUI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VDQUNJO0FBR3pCO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztzQ0FDRztBQUd4QjtJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MkNBQ1E7QUFHN0I7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxDQUFDO3NDQUNhLElBQUk7MkNBQUM7QUFwQmhCLElBQUk7SUFYaEIsSUFBQSxpQkFBSyxFQUNKO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxNQUFNLEVBQUUsQ0FBQztLQUNWLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUsV0FBVztLQUNsQixDQUNGO0dBRVksSUFBSSxDQXNCaEI7QUF0Qlksb0JBQUk7QUF3QkosUUFBQSxTQUFTLEdBQUcsSUFBQSw0QkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1vZGVsRm9yQ2xhc3MsIGluZGV4LCBwcm9wIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UnO1xyXG5cclxuQGluZGV4KFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaXNfYm90OiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIG5hbWU6ICdpc19ib3QmaWQnLFxyXG4gIH0sXHJcbilcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICBAcHJvcCh7IHRyaW06IHRydWUgfSlcclxuICBwdWJsaWMgaWQhOiBudW1iZXI7XHJcblxyXG4gIEBwcm9wKHsgZGVmYXVsdDogZmFsc2UgfSlcclxuICBwdWJsaWMgaXNfYm90OiBib29sZWFuO1xyXG5cclxuICBAcHJvcCh7IHRyaW06IHRydWUgfSlcclxuICBwdWJsaWMgZmlyc3RfbmFtZTogc3RyaW5nO1xyXG5cclxuICBAcHJvcCh7IHRyaW06IHRydWUgfSlcclxuICBwdWJsaWMgbGFzdF9uYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBwcm9wKHsgdHJpbTogdHJ1ZSB9KVxyXG4gIHB1YmxpYyB1c2VybmFtZTogc3RyaW5nO1xyXG5cclxuICBAcHJvcCh7IHRyaW06IHRydWUgfSlcclxuICBwdWJsaWMgbGFuZ3VhZ2VfY29kZTogc3RyaW5nO1xyXG5cclxuICBAcHJvcCh7fSlcclxuICBwdWJsaWMgbGFzdEVudGVyZWRBdDogRGF0ZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTW9kZWwgPSBnZXRNb2RlbEZvckNsYXNzKFVzZXIpO1xyXG4iXX0=