import { getModelForClass, index, prop } from '@typegoose/typegoose';

@index(
  {
    date: 1,
    message_id: 1,
    userId: 1,
    chatId: 1,
    type: 1
  },
  {
    background: true,
    name: 'datet&message_id&userId&chatId&type',
  },
)

export class Message {

  @prop({ default: false })
  public isVerify: boolean;

  @prop({ required: true })
  public message_id!: number;

  //! user  id 
  @prop({ required: true })
  userId: number;

  //! chat id
  @prop({ required: true })
  chatId: number;

  @prop({ required: true })
  public date!: number;

  @prop({ required: true, trim: true })
  public text: string;

  @prop({ required: true, trim: true })
  public type: string;

  @prop({ required: true, })
  public increment: number;

}

export const MessageModel = getModelForClass(Message);
