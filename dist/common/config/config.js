"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = exports.DB_REPLICA_SET = void 0;
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const path_1 = tslib_1.__importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../../.env'),
});
exports.DB_REPLICA_SET = process.env.DB_REPLICA_SET || 'localReplicaSet';
console.log("DB_REPLICA_SET: ", exports.DB_REPLICA_SET);
exports.ENV = {
    DB_URL: process.env.DB_URL || `mongodb://localhost:27027/Bot?replicaSet=${exports.DB_REPLICA_SET}`,
    TELEGRAF_TOKEN: process.env.TELEGRAF_TOKEN || "5350985690:AAEqW54MDoghqgCmkcpGPD3PlguN71zKc28",
    WEB_HOOK_URL: process.env.WEB_HOOK_URL || "http://abbos.dinamic.uz",
    HOST: process.env.HOST || '0.0.0.0',
    BOT: 4000,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9jb25maWcvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0REFBNEI7QUFDNUIsd0RBQXdCO0FBRXhCLGdCQUFNLENBQUMsTUFBTSxDQUFDO0lBQ1osSUFBSSxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztDQUM1QyxDQUFDLENBQUM7QUFFVSxRQUFBLGNBQWMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsSUFBSSxpQkFBaUIsQ0FBQztBQUU5RSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLHNCQUFjLENBQUMsQ0FBQztBQUVuQyxRQUFBLEdBQUcsR0FBRztJQUNqQixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksNENBQTRDLHNCQUFjLEVBQUU7SUFDMUYsY0FBYyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxJQUFJLGdEQUFnRDtJQUM5RixZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUkseUJBQXlCO0lBQ25FLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxTQUFTO0lBQ25DLEdBQUcsRUFBRSxJQUFJO0NBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5kb3RlbnYuY29uZmlnKHtcclxuICBwYXRoOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLmVudicpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBEQl9SRVBMSUNBX1NFVCA9IHByb2Nlc3MuZW52LkRCX1JFUExJQ0FfU0VUIHx8ICdsb2NhbFJlcGxpY2FTZXQnO1xyXG5cclxuY29uc29sZS5sb2coXCJEQl9SRVBMSUNBX1NFVDogXCIsIERCX1JFUExJQ0FfU0VUKTtcclxuXHJcbmV4cG9ydCBjb25zdCBFTlYgPSB7XHJcbiAgREJfVVJMOiBwcm9jZXNzLmVudi5EQl9VUkwgfHwgYG1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMjcvQm90P3JlcGxpY2FTZXQ9JHtEQl9SRVBMSUNBX1NFVH1gLFxyXG4gIFRFTEVHUkFGX1RPS0VOOiBwcm9jZXNzLmVudi5URUxFR1JBRl9UT0tFTiB8fCBcIjUzNTA5ODU2OTA6QUFFcVc1NE1Eb2docWdDbWtjcEdQRDNQbGd1TjcxektjMjhcIixcclxuICBXRUJfSE9PS19VUkw6IHByb2Nlc3MuZW52LldFQl9IT09LX1VSTCB8fCBcImh0dHA6Ly9hYmJvcy5kaW5hbWljLnV6XCIsXHJcbiAgSE9TVDogcHJvY2Vzcy5lbnYuSE9TVCB8fCAnMC4wLjAuMCcsXHJcbiAgQk9UOiA0MDAwLFxyXG59O1xyXG5cclxuIl19