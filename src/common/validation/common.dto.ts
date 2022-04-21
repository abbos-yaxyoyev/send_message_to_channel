import { IsNumber } from 'class-validator';
export class CommonDtoGroup {
  static CREATE = 'create';
  static UPDATE = 'update';
  static DELETE = 'delete';
  static GET_BY_ID = 'getById';
  static NUMBER = 'number';
  static PAGENATION = 'pagination';
  static SET_STATE = 'state';
  static POSITION = 'position';
  static CREATE_WEB = 'web';
}

export class CommonDto {
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
    },
    { groups: [CommonDtoGroup.CREATE] },
  )
  id: number;
}

export class GetPagingDto { }
