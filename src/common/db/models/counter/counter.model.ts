import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { COLLECTIONS } from "../../../constant/collections";

@modelOptions({
  schemaOptions: {
    collection: COLLECTIONS.COUNTER,
  },
})

export class Counter {
  @prop({ required: true })
  name: string;
  @prop({})
  value: number;
  public static async getValue(name) {
    // const counter = await CounterModel.findOne({name})
    // if(!counter) 
    const result = await CounterModel.findOneAndUpdate({ name }, { $inc: { value: 1 } }, { new: true, upsert: true })
    return result?.value
  }
}
export const CounterModel = getModelForClass(Counter)