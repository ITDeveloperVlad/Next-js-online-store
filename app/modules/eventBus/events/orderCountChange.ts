import eventBus from "../eventBusCore";

import { EventBusEvents } from "./enums/eventEnums";
import { OrderBusProps } from "./models/events.model";

const eventName = EventBusEvents.OrderCountChange;

const subscribe = (callback: (timeProps: OrderBusProps) => void) => {
  return eventBus.subscribe(eventName, callback);
};

const broadcast = (timeProps: OrderBusProps) => {
  eventBus.broadcast(eventName, timeProps);
};

export default {
  subscribe,
  broadcast,
};
