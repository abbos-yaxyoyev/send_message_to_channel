import { ModelType } from '@typegoose/typegoose/lib/types';
import { CommonUserException } from '../../constant/exceptions';
import { User, UserModel } from '../../db/models/user/user.model';
import { BaseServices } from '../base.service';

export class UserService extends BaseServices<User> {
  constructor(model: ModelType<User>) {
    super(model, CommonUserException);
  }

  public async findByIdError(id, options?, projection?) {
    const user = await this.findById(id, options, projection);
    if (!user) throw CommonUserException.NotFound(id);
    return user;
  }

}

export const userService = new UserService(UserModel)
