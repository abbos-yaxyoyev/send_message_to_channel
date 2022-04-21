"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterModel = exports.Counter = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../../constant/collections");
let Counter = class Counter {
    static async getValue(name) {
        // const counter = await CounterModel.findOne({name})
        // if(!counter) 
        const result = await exports.CounterModel.findOneAndUpdate({ name }, { $inc: { value: 1 } }, { new: true, upsert: true });
        return result?.value;
    }
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Counter.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({}),
    tslib_1.__metadata("design:type", Number)
], Counter.prototype, "value", void 0);
Counter = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.COLLECTIONS.COUNTER,
        },
    })
], Counter);
exports.Counter = Counter;
exports.CounterModel = (0, typegoose_1.getModelForClass)(Counter);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWxzL2NvdW50ZXIvY291bnRlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQTRFO0FBQzVFLCtEQUE0RDtBQVE1RCxJQUFhLE9BQU8sR0FBcEIsTUFBYSxPQUFPO0lBS1gsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUMvQixxREFBcUQ7UUFDckQsZ0JBQWdCO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLE1BQU0sb0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQ2pILE9BQU8sTUFBTSxFQUFFLEtBQUssQ0FBQTtJQUN0QixDQUFDO0NBQ0YsQ0FBQTtBQVRDO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztxQ0FDWjtBQUViO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsQ0FBQzs7c0NBQ0s7QUFKSCxPQUFPO0lBTm5CLElBQUEsd0JBQVksRUFBQztRQUNaLGFBQWEsRUFBRTtZQUNiLFVBQVUsRUFBRSx5QkFBVyxDQUFDLE9BQU87U0FDaEM7S0FDRixDQUFDO0dBRVcsT0FBTyxDQVduQjtBQVhZLDBCQUFPO0FBWVAsUUFBQSxZQUFZLEdBQUcsSUFBQSw0QkFBZ0IsRUFBQyxPQUFPLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1vZGVsRm9yQ2xhc3MsIG1vZGVsT3B0aW9ucywgcHJvcCB9IGZyb20gXCJAdHlwZWdvb3NlL3R5cGVnb29zZVwiO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudC9jb2xsZWN0aW9uc1wiO1xyXG5cclxuQG1vZGVsT3B0aW9ucyh7XHJcbiAgc2NoZW1hT3B0aW9uczoge1xyXG4gICAgY29sbGVjdGlvbjogQ09MTEVDVElPTlMuQ09VTlRFUixcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvdW50ZXIge1xyXG4gIEBwcm9wKHsgcmVxdWlyZWQ6IHRydWUgfSlcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgQHByb3Aoe30pXHJcbiAgdmFsdWU6IG51bWJlcjtcclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFZhbHVlKG5hbWUpIHtcclxuICAgIC8vIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCBDb3VudGVyTW9kZWwuZmluZE9uZSh7bmFtZX0pXHJcbiAgICAvLyBpZighY291bnRlcikgXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBDb3VudGVyTW9kZWwuZmluZE9uZUFuZFVwZGF0ZSh7IG5hbWUgfSwgeyAkaW5jOiB7IHZhbHVlOiAxIH0gfSwgeyBuZXc6IHRydWUsIHVwc2VydDogdHJ1ZSB9KVxyXG4gICAgcmV0dXJuIHJlc3VsdD8udmFsdWVcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IENvdW50ZXJNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoQ291bnRlcikiXX0=