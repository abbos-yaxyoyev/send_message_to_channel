import { ModelType } from '@typegoose/typegoose/lib/types';
import { CommonUserException } from '../../constant/exceptions';
import { Chat, ChatModel } from '../../db/models/chat/chat.model';
import { BaseServices } from '../base.service';

export class ChatService extends BaseServices<Chat> {
  constructor(model: ModelType<Chat>) {
    super(model, CommonUserException);
  }

  public async findByIdError(id, options?, projection?) {
    const user = await this.findById(id, options, projection);
    if (!user) throw CommonUserException.NotFound(id);
    return user;
  }

}

export const chatService = new ChatService(ChatModel)
