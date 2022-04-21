import {
  IsBoolean, IsOptional, IsString
} from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../common.dto';


export class UserDto extends CommonDto {

  @IsBoolean({ groups: [CommonDtoGroup.CREATE,] })
  is_bot: boolean;

  // @IsOptional({ groups: [CommonDtoGroup.UPDATE] })
  @IsString({ groups: [CommonDtoGroup.CREATE] })
  first_name: string;

  @IsOptional({ groups: [CommonDtoGroup.CREATE] })
  @IsString({ groups: [CommonDtoGroup.CREATE] })
  last_name: string;

  @IsString({ groups: [CommonDtoGroup.CREATE] })
  username: string;

  @IsString({ groups: [CommonDtoGroup.CREATE] })
  language_code: string;
}
