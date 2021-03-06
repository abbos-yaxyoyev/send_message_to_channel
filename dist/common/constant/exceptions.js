"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUserException = exports.CommonException = void 0;
const errors_1 = require("./errors");
class CommonException {
    constructor(code, message, data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
    static UnknownError(data) {
        return new CommonException(errors_1.ERROR_CODES.BASE, 'Unknown error', data);
    }
    static ValidationError(data) {
        return new CommonException(errors_1.ERROR_CODES.BASE + 1, 'Validation Error', data);
    }
    static AllreadyExist(data, collectionName, message) {
        return new CommonException(errors_1.ERROR_CODES.BASE + 2, `collectionName:  ${collectionName},  already exist , message: ${message}`, data);
    }
}
exports.CommonException = CommonException;
class CommonUserException extends CommonException {
    static AllreadyExist(data) {
        return new CommonUserException(errors_1.ERROR_CODES.USER, 'user exist', data);
    }
    static NotFound(data) {
        return new CommonUserException(errors_1.ERROR_CODES.USER + 1, 'user not found', data);
    }
    static NotEnoughPermission(data = null) {
        return new CommonUserException(errors_1.ERROR_CODES.USER + 2, 'Not enough permissions to access', data);
    }
}
exports.CommonUserException = CommonUserException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vY29uc3RhbnQvZXhjZXB0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBdUM7QUFFdkMsTUFBYSxlQUFlO0lBQzFCLFlBQW1CLElBQVksRUFBUyxPQUFlLEVBQVMsSUFBUztRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQUs7SUFBSSxDQUFDO0lBQ3ZFLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBVTtRQUNuQyxPQUFPLElBQUksZUFBZSxDQUFDLG9CQUFXLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFVO1FBQ3RDLE9BQU8sSUFBSSxlQUFlLENBQUMsb0JBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUssRUFBRSxjQUFlLEVBQUUsT0FBUTtRQUNuRCxPQUFPLElBQUksZUFBZSxDQUFDLG9CQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxvQkFBb0IsY0FBYywrQkFBK0IsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckksQ0FBQztDQUNGO0FBYkQsMENBYUM7QUFHRCxNQUFhLG1CQUFvQixTQUFRLGVBQWU7SUFDdEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJO1FBQ3ZCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxvQkFBVyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUNsQixPQUFPLElBQUksbUJBQW1CLENBQUMsb0JBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBWSxJQUFJO1FBQ3pDLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxvQkFBVyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsa0NBQWtDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakcsQ0FBQztDQUNGO0FBWkQsa0RBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFUlJPUl9DT0RFUyB9IGZyb20gJy4vZXJyb3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25FeGNlcHRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2RlOiBudW1iZXIsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcsIHB1YmxpYyBkYXRhOiBhbnkpIHsgfVxyXG4gIHB1YmxpYyBzdGF0aWMgVW5rbm93bkVycm9yKGRhdGE/OiBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgQ29tbW9uRXhjZXB0aW9uKEVSUk9SX0NPREVTLkJBU0UsICdVbmtub3duIGVycm9yJywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIFZhbGlkYXRpb25FcnJvcihkYXRhPzogYW55KSB7XHJcbiAgICByZXR1cm4gbmV3IENvbW1vbkV4Y2VwdGlvbihFUlJPUl9DT0RFUy5CQVNFICsgMSwgJ1ZhbGlkYXRpb24gRXJyb3InLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBBbGxyZWFkeUV4aXN0KGRhdGE/LCBjb2xsZWN0aW9uTmFtZT8sIG1lc3NhZ2U/LCkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21tb25FeGNlcHRpb24oRVJST1JfQ09ERVMuQkFTRSArIDIsIGBjb2xsZWN0aW9uTmFtZTogICR7Y29sbGVjdGlvbk5hbWV9LCAgYWxyZWFkeSBleGlzdCAsIG1lc3NhZ2U6ICR7bWVzc2FnZX1gLCBkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbW9uVXNlckV4Y2VwdGlvbiBleHRlbmRzIENvbW1vbkV4Y2VwdGlvbiB7XHJcbiAgc3RhdGljIEFsbHJlYWR5RXhpc3QoZGF0YSkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21tb25Vc2VyRXhjZXB0aW9uKEVSUk9SX0NPREVTLlVTRVIsICd1c2VyIGV4aXN0JywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgTm90Rm91bmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21tb25Vc2VyRXhjZXB0aW9uKEVSUk9SX0NPREVTLlVTRVIgKyAxLCAndXNlciBub3QgZm91bmQnLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBOb3RFbm91Z2hQZXJtaXNzaW9uKGRhdGE6IGFueSA9IG51bGwpIHtcclxuICAgIHJldHVybiBuZXcgQ29tbW9uVXNlckV4Y2VwdGlvbihFUlJPUl9DT0RFUy5VU0VSICsgMiwgJ05vdCBlbm91Z2ggcGVybWlzc2lvbnMgdG8gYWNjZXNzJywgZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==