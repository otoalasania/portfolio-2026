export function pageZoom() {
  return parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
}

export function cssRect(el: Element) {
  const zoom = pageZoom();
  const { x, y, width, height } = el.getBoundingClientRect();
  return new DOMRect(x / zoom, y / zoom, width / zoom, height / zoom);
}
