import { useSyncExternalStore } from "react";

function subscribeNothing() {
  return () => {};
}

export function useClientValue<T>(getClientValue: () => T, serverValue: T) {
  return useSyncExternalStore(subscribeNothing, getClientValue, () => serverValue);
}
