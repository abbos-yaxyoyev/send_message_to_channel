export declare class Counter {
    name: string;
    value: number;
    static getValue(name: any): Promise<number>;
}
export declare const CounterModel: import("@typegoose/typegoose").ReturnModelType<typeof Counter, import("@typegoose/typegoose/lib/types").BeAnObject>;
