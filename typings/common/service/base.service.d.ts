/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { ModelType } from '@typegoose/typegoose/lib/types';
import { QueryOptions } from 'mongoose';
import { CommonException } from '../constant/exceptions';
export declare class BaseServices<T> {
    model: ModelType<T>;
    errorConstructor: typeof CommonException;
    constructor(model: ModelType<T>, errorConstructor?: typeof CommonException);
    count<T>(query: any): Promise<number>;
    find<T>(query: any, options?: QueryOptions, projection?: object): Promise<import("mongoose").HydratedDocument<import("@typegoose/typegoose/lib/types").DocumentType<T, import("@typegoose/typegoose/lib/types").BeAnObject>, {}, {}>[]>;
    findOne<T>(query: any, options?: QueryOptions, projection?: object): Promise<import("mongoose").HydratedDocument<import("@typegoose/typegoose/lib/types").DocumentType<T, import("@typegoose/typegoose/lib/types").BeAnObject>, {}, {}>>;
    findById<T>(id: string, options?: QueryOptions, projection?: object): Promise<import("mongoose").HydratedDocument<import("@typegoose/typegoose/lib/types").DocumentType<T, import("@typegoose/typegoose/lib/types").BeAnObject>, {}, {}>>;
    create<T>(data: any, options?: any): Promise<import("mongoose").HydratedDocument<import("@typegoose/typegoose/lib/types").DocumentType<T, import("@typegoose/typegoose/lib/types").BeAnObject>, {}, {}>>;
    insertMany<T>(data: any, options?: any): Promise<import("mongoose").InsertManyResult<import("@typegoose/typegoose/lib/types").DocumentType<T, import("@typegoose/typegoose/lib/types").BeAnObject>>>;
    deleteOne<T>(query: any, options?: QueryOptions): Promise<import("mongodb").DeleteResult>;
    updateOne<T>(id: any, data: any, options?: QueryOptions): Promise<import("mongoose").HydratedDocument<import("@typegoose/typegoose/lib/types").DocumentType<T, import("@typegoose/typegoose/lib/types").BeAnObject>, {}, {}>>;
    updateOneByQuery<T>(query: any, data: any, options?: QueryOptions): Promise<import("mongoose").HydratedDocument<import("@typegoose/typegoose/lib/types").DocumentType<T, import("@typegoose/typegoose/lib/types").BeAnObject>, {}, {}>>;
    updateMany<T>(query: any, data: any, options?: QueryOptions): Promise<import("mongodb").UpdateResult>;
    aggregate<T>(pipeline: Array<any>, options?: any): Promise<any[]>;
}
