export declare class Chat {
    id: number;
    type: string;
    title?: string;
    first_name?: string;
    username: string;
}
export declare const ChatModel: import("@typegoose/typegoose").ReturnModelType<typeof Chat, import("@typegoose/typegoose/lib/types").BeAnObject>;
