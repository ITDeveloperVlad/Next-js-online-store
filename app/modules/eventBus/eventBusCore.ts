import { TCallback, TSubscribers } from './eventBus.model';

const subscriptions: TSubscribers = {};

const subscribe = (eventName: string, callback: TCallback) => {
  if (!subscriptions[eventName]) {
    subscriptions[eventName] = new Set();
  }

  const callbacks = subscriptions[eventName];

  callbacks.add(callback);

  return () => {
    callbacks.delete(callback);

    if (callbacks.size === 0) {
      delete subscriptions[eventName];
    }
  };
};

const broadcast = (eventName: string, ...args: any) => {
  if (!subscriptions[eventName]) {
    return;
  }

  const callbacks = subscriptions[eventName];

  callbacks.forEach((callback) => {
    callback(...args);
  });
};

export default {
  subscribe,
  broadcast,
};
