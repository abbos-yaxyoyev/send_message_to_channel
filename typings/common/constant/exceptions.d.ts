export declare class CommonException {
    code: number;
    message: string;
    data: any;
    constructor(code: number, message: string, data: any);
    static UnknownError(data?: any): CommonException;
    static ValidationError(data?: any): CommonException;
    static AllreadyExist(data?: any, collectionName?: any, message?: any): CommonException;
}
export declare class CommonUserException extends CommonException {
    static AllreadyExist(data: any): CommonUserException;
    static NotFound(data: any): CommonUserException;
    static NotEnoughPermission(data?: any): CommonUserException;
}
