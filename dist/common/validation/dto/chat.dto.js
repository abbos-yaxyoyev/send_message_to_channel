"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const common_dto_1 = require("../common.dto");
class UserDto extends common_dto_1.CommonDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)({ groups: [common_dto_1.CommonDtoGroup.CREATE,] }),
    tslib_1.__metadata("design:type", Boolean)
], UserDto.prototype, "is_bot", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [common_dto_1.CommonDtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "first_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [common_dto_1.CommonDtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [common_dto_1.CommonDtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "type", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL3ZhbGlkYXRpb24vZHRvL2NoYXQuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxREFFeUI7QUFDekIsOENBQTBEO0FBRzFELE1BQWEsT0FBUSxTQUFRLHNCQUFTO0NBYXJDO0FBVkM7SUFEQyxJQUFBLDJCQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQywyQkFBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7O3VDQUNoQztBQUdoQjtJQURDLElBQUEsMEJBQVEsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLDJCQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7MkNBQzNCO0FBR25CO0lBREMsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsMkJBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOzt5Q0FDN0I7QUFHakI7SUFEQyxJQUFBLDBCQUFRLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQywyQkFBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7O3FDQUNqQztBQVpmLDBCQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBJc0Jvb2xlYW4sIElzU3RyaW5nXHJcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgQ29tbW9uRHRvLCBDb21tb25EdG9Hcm91cCB9IGZyb20gJy4uL2NvbW1vbi5kdG8nO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyRHRvIGV4dGVuZHMgQ29tbW9uRHRvIHtcclxuXHJcbiAgQElzQm9vbGVhbih7IGdyb3VwczogW0NvbW1vbkR0b0dyb3VwLkNSRUFURSxdIH0pXHJcbiAgaXNfYm90OiBib29sZWFuO1xyXG5cclxuICBASXNTdHJpbmcoeyBncm91cHM6IFtDb21tb25EdG9Hcm91cC5DUkVBVEVdIH0pXHJcbiAgZmlyc3RfbmFtZTogc3RyaW5nO1xyXG5cclxuICBASXNTdHJpbmcoeyBncm91cHM6IFtDb21tb25EdG9Hcm91cC5DUkVBVEVdIH0pXHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuXHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuQ1JFQVRFXSB9KVxyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG4iXX0=