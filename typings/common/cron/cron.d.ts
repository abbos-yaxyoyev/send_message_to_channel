/// <reference types="node" />
export declare function cronJob(): Promise<void>;
export declare const cronJobPlugin: import("fastify").FastifyPluginAsync<unknown, import("http").Server>;
