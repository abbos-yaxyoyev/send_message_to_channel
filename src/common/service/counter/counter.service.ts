import { ModelType } from '@typegoose/typegoose/lib/types';
import { CommonUserException } from '../../constant/exceptions';
import { Counter, CounterModel } from '../../db/models/counter/counter.model';
import { BaseServices } from '../base.service';

export class CounterService extends BaseServices<Counter> {
  constructor(model: ModelType<Counter>) {
    super(model, CommonUserException);
  }

  public async findByIdError(id, options?, projection?) {
    const user = await this.findById(id, options, projection);
    if (!user) throw CommonUserException.NotFound(id);
    return user;
  }

}

export const counterService = new CounterService(CounterModel)
