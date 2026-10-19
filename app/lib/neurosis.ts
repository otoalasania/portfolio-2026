import { useSyncExternalStore } from "react";

export type NeurosisPhase = "off" | "build" | "drop" | "peak" | "outro" | "glitch";

let phase: NeurosisPhase = "off";
let endings = 0;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setNeurosisPhase(next: NeurosisPhase) {
  if (next === phase) return;
  phase = next;
  const root = document.documentElement;
  if (next === "off") delete root.dataset.neurosis;
  else root.dataset.neurosis = next;
  emit();
}

export function setNeurosisBeat(beat: number) {
  document.documentElement.style.setProperty("--beat", beat.toFixed(3));
}

export function markNeurosisEnded() {
  endings += 1;
  emit();
}

export function useNeurosisPhase() {
  return useSyncExternalStore(subscribe, () => phase, () => "off" as NeurosisPhase);
}

export function useNeurosisEndings() {
  return useSyncExternalStore(subscribe, () => endings, () => 0);
}
