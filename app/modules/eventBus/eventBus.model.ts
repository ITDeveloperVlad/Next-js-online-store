export type TCallback = (...args: any) => unknown;

export type TSubscribers = Record<string, Set<TCallback>>;
