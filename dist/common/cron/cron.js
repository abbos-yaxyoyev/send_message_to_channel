"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cronJobPlugin = exports.cronJob = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const node_cron_1 = tslib_1.__importDefault(require("node-cron"));
const config_1 = require("../config/config");
const counter_model_1 = require("../db/models/counter/counter.model");
const counter_service_1 = require("../service/counter/counter.service");
const message_service_1 = require("../service/messages/message.service");
async function cronFunction() {
    const increment = await counter_model_1.CounterModel.getValue("increment");
    const skipMessage = await counter_model_1.CounterModel.getValue("skipMessage");
    const $sort = {
        $sort: {
            type: 1,
            message_id: 1
        }
    };
    const $skip = {
        $skip: skipMessage - 1
    };
    const $limit = {
        $limit: 1
    };
    const $pipeline = [
        $sort,
        $skip,
        $limit
    ];
    let data = await message_service_1.messageService.aggregate($pipeline);
    console.log("data: ", data);
    let message = data.shift();
    if (!message) {
        await counter_service_1.counterService.updateOneByQuery({ name: "skipMessage" }, { value: 0 });
        return;
    }
    await sendMessag(message);
}
async function sendMessag(message) {
    console.log("message: ", message);
    let chat_id = -1001772169590;
    await (0, axios_1.default)({
        method: 'POST',
        url: `https://api.telegram.org/bot${config_1.ENV.TELEGRAF_TOKEN}/sendMessage`,
        headers: {
            "tent-Type": 'application/json'
        },
        data: {
            chat_id,
            text: `level:   ${message.type}\n\n${message.text}`,
            parse_mode: 'markdown',
        }
    });
}
async function cronJob() {
    console.log('cron');
    node_cron_1.default.schedule('*/30 * * * * *', cronFunction);
}
exports.cronJob = cronJob;
exports.cronJobPlugin = (0, fastify_plugin_1.default)(cronJob);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vY3Jvbi9jcm9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwwREFBMEI7QUFDMUIsNEVBQWdDO0FBQ2hDLGtFQUE2QjtBQUM3Qiw2Q0FBdUM7QUFDdkMsc0VBQWtFO0FBQ2xFLHdFQUFvRTtBQUNwRSx5RUFBcUU7QUFHckUsS0FBSyxVQUFVLFlBQVk7SUFDdkIsTUFBTSxTQUFTLEdBQUcsTUFBTSw0QkFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMxRCxNQUFNLFdBQVcsR0FBRyxNQUFNLDRCQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBRTlELE1BQU0sS0FBSyxHQUFHO1FBQ1YsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLENBQUM7WUFDUCxVQUFVLEVBQUUsQ0FBQztTQUNoQjtLQUNKLENBQUE7SUFFRCxNQUFNLEtBQUssR0FBRztRQUNWLEtBQUssRUFBRSxXQUFXLEdBQUcsQ0FBQztLQUN6QixDQUFBO0lBRUQsTUFBTSxNQUFNLEdBQUc7UUFDWCxNQUFNLEVBQUUsQ0FBQztLQUNaLENBQUE7SUFFRCxNQUFNLFNBQVMsR0FBRztRQUNkLEtBQUs7UUFDTCxLQUFLO1FBQ0wsTUFBTTtLQUNULENBQUE7SUFFRCxJQUFJLElBQUksR0FBRyxNQUFNLGdDQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTVCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUUxQixJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1YsTUFBTSxnQ0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUUsT0FBTztLQUNWO0lBRUQsTUFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDN0IsQ0FBQztBQUVELEtBQUssVUFBVSxVQUFVLENBQUMsT0FBTztJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVsQyxJQUFJLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQTtJQUM1QixNQUFNLElBQUEsZUFBSyxFQUFDO1FBQ1IsTUFBTSxFQUFFLE1BQU07UUFDZCxHQUFHLEVBQUUsK0JBQStCLFlBQUcsQ0FBQyxjQUFjLGNBQWM7UUFDcEUsT0FBTyxFQUFFO1lBQ0wsV0FBVyxFQUFFLGtCQUFrQjtTQUNsQztRQUNELElBQUksRUFBRTtZQUNGLE9BQU87WUFDUCxJQUFJLEVBQUUsWUFBWSxPQUFPLENBQUMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDbkQsVUFBVSxFQUFFLFVBQVU7U0FDekI7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDO0FBRU0sS0FBSyxVQUFVLE9BQU87SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixtQkFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBSEQsMEJBR0M7QUFFWSxRQUFBLGFBQWEsR0FBRyxJQUFBLHdCQUFFLEVBQUMsT0FBTyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZnAgZnJvbSAnZmFzdGlmeS1wbHVnaW4nO1xyXG5pbXBvcnQgY3JvbiBmcm9tICdub2RlLWNyb24nO1xyXG5pbXBvcnQgeyBFTlYgfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcclxuaW1wb3J0IHsgQ291bnRlck1vZGVsIH0gZnJvbSAnLi4vZGIvbW9kZWxzL2NvdW50ZXIvY291bnRlci5tb2RlbCc7XHJcbmltcG9ydCB7IGNvdW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9jb3VudGVyL2NvdW50ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IG1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9tZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UnO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyb25GdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGluY3JlbWVudCA9IGF3YWl0IENvdW50ZXJNb2RlbC5nZXRWYWx1ZShcImluY3JlbWVudFwiKVxyXG4gICAgY29uc3Qgc2tpcE1lc3NhZ2UgPSBhd2FpdCBDb3VudGVyTW9kZWwuZ2V0VmFsdWUoXCJza2lwTWVzc2FnZVwiKVxyXG5cclxuICAgIGNvbnN0ICRzb3J0ID0ge1xyXG4gICAgICAgICRzb3J0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VfaWQ6IDFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgJHNraXAgPSB7XHJcbiAgICAgICAgJHNraXA6IHNraXBNZXNzYWdlIC0gMVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0ICRsaW1pdCA9IHtcclxuICAgICAgICAkbGltaXQ6IDFcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCAkcGlwZWxpbmUgPSBbXHJcbiAgICAgICAgJHNvcnQsXHJcbiAgICAgICAgJHNraXAsXHJcbiAgICAgICAgJGxpbWl0XHJcbiAgICBdXHJcblxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBtZXNzYWdlU2VydmljZS5hZ2dyZWdhdGUoJHBpcGVsaW5lKVxyXG4gICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiwgZGF0YSk7XHJcblxyXG4gICAgbGV0IG1lc3NhZ2UgPSBkYXRhLnNoaWZ0KClcclxuXHJcbiAgICBpZiAoIW1lc3NhZ2UpIHtcclxuICAgICAgICBhd2FpdCBjb3VudGVyU2VydmljZS51cGRhdGVPbmVCeVF1ZXJ5KHsgbmFtZTogXCJza2lwTWVzc2FnZVwiIH0sIHsgdmFsdWU6IDAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgc2VuZE1lc3NhZyhtZXNzYWdlKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnKG1lc3NhZ2UpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZTogXCIsIG1lc3NhZ2UpO1xyXG5cclxuICAgIGxldCBjaGF0X2lkID0gLTEwMDE3NzIxNjk1OTBcclxuICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90JHtFTlYuVEVMRUdSQUZfVE9LRU59L3NlbmRNZXNzYWdlYCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwidGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjaGF0X2lkLFxyXG4gICAgICAgICAgICB0ZXh0OiBgbGV2ZWw6ICAgJHttZXNzYWdlLnR5cGV9XFxuXFxuJHttZXNzYWdlLnRleHR9YCxcclxuICAgICAgICAgICAgcGFyc2VfbW9kZTogJ21hcmtkb3duJyxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyb25Kb2IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY3JvbicpO1xyXG4gICAgY3Jvbi5zY2hlZHVsZSgnKi8zMCAqICogKiAqIConLCBjcm9uRnVuY3Rpb24pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JvbkpvYlBsdWdpbiA9IGZwKGNyb25Kb2IpXHJcblxyXG4iXX0=