export type ShareData = {
    type: string;
    value: string;
    title?: string;
    subject?: string;
    text?: string;
};
export declare function fetchData(): Promise<ShareData>;
export declare function close(): void;
//# sourceMappingURL=sharenator.d.ts.map