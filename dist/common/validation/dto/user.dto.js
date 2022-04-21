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
    (0, class_validator_1.IsOptional)({ groups: [common_dto_1.CommonDtoGroup.CREATE] }),
    (0, class_validator_1.IsString)({ groups: [common_dto_1.CommonDtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "last_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [common_dto_1.CommonDtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [common_dto_1.CommonDtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "language_code", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL3ZhbGlkYXRpb24vZHRvL3VzZXIuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxREFFeUI7QUFDekIsOENBQTBEO0FBRzFELE1BQWEsT0FBUSxTQUFRLHNCQUFTO0NBa0JyQztBQWZDO0lBREMsSUFBQSwyQkFBUyxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsMkJBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzt1Q0FDaEM7QUFJaEI7SUFEQyxJQUFBLDBCQUFRLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQywyQkFBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7OzJDQUMzQjtBQUluQjtJQUZDLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLDJCQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUMvQyxJQUFBLDBCQUFRLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQywyQkFBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7OzBDQUM1QjtBQUdsQjtJQURDLElBQUEsMEJBQVEsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLDJCQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7eUNBQzdCO0FBR2pCO0lBREMsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsMkJBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOzs4Q0FDeEI7QUFqQnhCLDBCQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSXNCb29sZWFuLCBJc09wdGlvbmFsLCBJc1N0cmluZ1xyXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7IENvbW1vbkR0bywgQ29tbW9uRHRvR3JvdXAgfSBmcm9tICcuLi9jb21tb24uZHRvJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckR0byBleHRlbmRzIENvbW1vbkR0byB7XHJcblxyXG4gIEBJc0Jvb2xlYW4oeyBncm91cHM6IFtDb21tb25EdG9Hcm91cC5DUkVBVEUsXSB9KVxyXG4gIGlzX2JvdDogYm9vbGVhbjtcclxuXHJcbiAgLy8gQElzT3B0aW9uYWwoeyBncm91cHM6IFtDb21tb25EdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuQ1JFQVRFXSB9KVxyXG4gIGZpcnN0X25hbWU6IHN0cmluZztcclxuXHJcbiAgQElzT3B0aW9uYWwoeyBncm91cHM6IFtDb21tb25EdG9Hcm91cC5DUkVBVEVdIH0pXHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuQ1JFQVRFXSB9KVxyXG4gIGxhc3RfbmFtZTogc3RyaW5nO1xyXG5cclxuICBASXNTdHJpbmcoeyBncm91cHM6IFtDb21tb25EdG9Hcm91cC5DUkVBVEVdIH0pXHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuXHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuQ1JFQVRFXSB9KVxyXG4gIGxhbmd1YWdlX2NvZGU6IHN0cmluZztcclxufVxyXG4iXX0=