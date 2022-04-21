"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorDecorator = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
async function pl(instance, options, next) {
    // global error handler
    instance.setErrorHandler((error, request, reply) => {
        console.log("request: ", request);
        console.log("reply: ", reply);
        console.log("error: ", error);
    });
    next();
}
exports.globalErrorDecorator = (0, fastify_plugin_1.default)(pl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9kZWNvcmF0b3JzL2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNEVBQWdDO0FBRWhDLEtBQUssVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJO0lBRXZDLHVCQUF1QjtJQUN2QixRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQUVZLFFBQUEsb0JBQW9CLEdBQUcsSUFBQSx3QkFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZwIGZyb20gJ2Zhc3RpZnktcGx1Z2luJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBsKGluc3RhbmNlLCBvcHRpb25zLCBuZXh0KSB7XHJcblxyXG4gIC8vIGdsb2JhbCBlcnJvciBoYW5kbGVyXHJcbiAgaW5zdGFuY2Uuc2V0RXJyb3JIYW5kbGVyKChlcnJvciwgcmVxdWVzdCwgcmVwbHkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdDogXCIsIHJlcXVlc3QpO1xyXG4gICAgY29uc29sZS5sb2coXCJyZXBseTogXCIsIHJlcGx5KTtcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiLCBlcnJvcik7XHJcbiAgfSk7XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdsb2JhbEVycm9yRGVjb3JhdG9yID0gZnAocGwpO1xyXG4iXX0=