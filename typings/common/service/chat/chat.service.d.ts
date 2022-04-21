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
import { Chat } from '../../db/models/chat/chat.model';
import { BaseServices } from '../base.service';
export declare class ChatService extends BaseServices<Chat> {
    constructor(model: ModelType<Chat>);
    findByIdError(id: any, options?: any, projection?: any): Promise<import("mongoose").Document<any, import("@typegoose/typegoose/lib/types").BeAnObject, any> & Chat & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: any;
    }>;
}
export declare const chatService: ChatService;
