import {
  IsBoolean, IsString
} from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../common.dto';


export class UserDto extends CommonDto {

  @IsBoolean({ groups: [CommonDtoGroup.CREATE,] })
  is_bot: boolean;

  @IsString({ groups: [CommonDtoGroup.CREATE] })
  first_name: string;

  @IsString({ groups: [CommonDtoGroup.CREATE] })
  username: string;

  @IsString({ groups: [CommonDtoGroup.CREATE] })
  type: string;
}
