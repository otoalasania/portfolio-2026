import { useSyncExternalStore } from "react";

const CV_URL = "/cv.pdf";
const CV_FILENAME = "Otar-Alasania-CV.pdf";

let downloads = 0;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function announceCvDownload() {
  downloads += 1;
  listeners.forEach((l) => l());
}

export function downloadCv() {
  const link = document.createElement("a");
  link.href = CV_URL;
  link.download = CV_FILENAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
  announceCvDownload();
}

export function useCvDownloads() {
  return useSyncExternalStore(subscribe, () => downloads, () => 0);
}
