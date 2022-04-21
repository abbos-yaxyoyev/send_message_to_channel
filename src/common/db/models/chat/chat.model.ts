import { getModelForClass, index, prop } from '@typegoose/typegoose';

@index(
  {
    id: 1,
    type: 1,
  },
  {
    background: true,
    name: 'type&id',
  },
)

export class Chat {
  @prop({})
  public id!: number;

  @prop({ trim: true })
  public type: string;

  @prop({ trim: true })
  public title?: string;

  @prop({ trim: true })
  public first_name?: string;

  @prop({ trim: true })
  public username: string;

}

export const ChatModel = getModelForClass(Chat);
