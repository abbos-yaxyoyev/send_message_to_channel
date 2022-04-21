/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Message } from '../../db/models/messages/message.model';
import { BaseServices } from '../base.service';
export declare class MessageService extends BaseServices<Message> {
    constructor(model: ModelType<Message>);
    findByIdError(id: any, options?: any, projection?: any): Promise<import("mongoose").Document<any, import("@typegoose/typegoose/lib/types").BeAnObject, any> & Message & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: any;
    }>;
}
export declare const messageService: MessageService;
