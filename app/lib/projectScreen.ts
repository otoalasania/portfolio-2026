let pending = 0;

export function openProjectAt(screen: number) {
  pending = screen;
}

export function pendingProjectScreen() {
  return pending;
}

export function clearProjectScreen() {
  pending = 0;
}
