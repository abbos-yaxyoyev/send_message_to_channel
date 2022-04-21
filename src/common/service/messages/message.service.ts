import { ModelType } from '@typegoose/typegoose/lib/types';
import { CommonUserException } from '../../constant/exceptions';
import { Message, MessageModel } from '../../db/models/messages/message.model';
import { BaseServices } from '../base.service';

export class MessageService extends BaseServices<Message> {
  constructor(model: ModelType<Message>) {
    super(model, CommonUserException);
  }

  public async findByIdError(id, options?, projection?) {
    const user = await this.findById(id, options, projection);
    if (!user) throw CommonUserException.NotFound(id);
    return user;
  }

}

export const messageService = new MessageService(MessageModel)
