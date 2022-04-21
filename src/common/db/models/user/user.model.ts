import { getModelForClass, index, prop } from '@typegoose/typegoose';

@index(
  {
    id: 1,
    is_bot: 1,
  },
  {
    background: true,
    name: 'is_bot&id',
  },
)

export class User {
  @prop({ trim: true })
  public id!: number;

  @prop({ default: false })
  public is_bot: boolean;

  @prop({ trim: true })
  public first_name: string;

  @prop({ trim: true })
  public last_name: string;

  @prop({ trim: true })
  public username: string;

  @prop({ trim: true })
  public language_code: string;

  @prop({})
  public lastEnteredAt: Date;

}

export const UserModel = getModelForClass(User);
