import { ModelType } from '@typegoose/typegoose/lib/types';
import { QueryOptions } from 'mongoose';
import { CommonException } from '../constant/exceptions';

export class BaseServices<T> {
  constructor(public model: ModelType<T>, public errorConstructor = CommonException) { }

  public async count<T>(query) {
    try {
      return await this.model.countDocuments(query);
    } catch (error) {
      throw error;
    }
  }

  public async find<T>(query, options?: QueryOptions, projection: object = { __v: 0 }) {
    try {
      return await this.model.find(query, projection, options);
    } catch (error) {
      throw error;
    }
  }

  public async findOne<T>(query, options?: QueryOptions, projection: object = { __v: 0 }) {
    try {
      return await this.model.findOne(query, projection, options);
    } catch (error) {
      throw error;
    }
  }

  public async findById<T>(id: string, options?: QueryOptions, projection: object = { __v: 0 }) {
    try {
      console.log('this.model: ', this.model);
      return await this.model.findOne({ _id: id, isDeleted: false }, projection, options);
    } catch (error) {
      throw error;
    }
  }

  public async create<T>(data, options?) {
    try {
      const saved = await this.model.create([data], options);
      return await this.model.findById(saved[0]._id, {}, options);
    } catch (error) {
      if (error.code == 11000, error.name == "MongoError") {
        throw this.errorConstructor.AllreadyExist({ keyPattern: error.keyPattern, keyValue: error.keyValue }, this.model.collection.collectionName, error.message,)
      }
      throw this.errorConstructor.UnknownError(error);
    }
  }

  public async insertMany<T>(data, options?) {
    try {
      return await this.model.insertMany(data, options);
    } catch (error) {
      throw error;
    }
  }

  public async deleteOne<T>(query, options?: QueryOptions) {
    try {
      return await this.model.deleteOne(query, options);
    } catch (error) {
      throw this.errorConstructor.UnknownError(error);
    }
  }


  public async updateOne<T>(id, data, options?: QueryOptions) {
    try {
      await this.model.findOneAndUpdate({ _id: id, isDeleted: false }, data, options);
      return await this.model.findById(id);
    } catch (error) {
      throw this.errorConstructor.UnknownError(error);
    }
  }

  public async updateOneByQuery<T>(query, data, options?: QueryOptions) {
    try {
      return await this.model.findOneAndUpdate(query, data, options);
    } catch (error) {
      throw this.errorConstructor.UnknownError(error);
    }
  }

  public async updateMany<T>(query, data, options?: QueryOptions) {
    try {
      return await this.model.updateMany(query, data, options).exec();
    } catch (error) {
      throw error;
    }
  }

  public async aggregate<T>(pipeline: Array<any>, options?) {
    try {
      return await this.model.aggregate(pipeline, options).allowDiskUse(true).exec();
    } catch (error) {
      throw error;
    }
  }

}
