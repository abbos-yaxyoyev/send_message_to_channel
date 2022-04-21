export declare class Message {
    isVerify: boolean;
    message_id: number;
    userId: number;
    chatId: number;
    date: number;
    text: string;
    type: string;
    increment: number;
}
export declare const MessageModel: import("@typegoose/typegoose").ReturnModelType<typeof Message, import("@typegoose/typegoose/lib/types").BeAnObject>;
