"use client";

import { TegakiEngine, TegakiRenderer, taperPlugin, type TimelineConfig } from "tegaki/react";
import italianno from "tegaki/fonts/italianno";

TegakiEngine.registerPlugin(taperPlugin);

const PLUGINS = [["taper", { startLength: 0.08, endLength: 0.2 }]] as const;

const TIMING: TimelineConfig = {
  glyphGap: 0.02,
  wordGap: 0.25,
  strokeEasing: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
};

const QUALITY = { smoothing: true, pixelRatio: 2, segmentSize: 1 };

export default function SignatureInk({ playing, className }: { playing: boolean; className?: string }) {
  return (
    <TegakiRenderer
      font={italianno}
      plugins={PLUGINS}
      timing={TIMING}
      quality={QUALITY}
      time={{ mode: "uncontrolled", duration: 2.5, playing }}
      reducedMotion="user"
      className={className}
      aria-hidden="true"
    >
      Otar Alasania
    </TegakiRenderer>
  );
}
