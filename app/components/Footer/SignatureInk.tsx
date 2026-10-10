"use client";

import { TegakiEngine, TegakiRenderer, taperPlugin, type TimelineConfig } from "tegaki/react";
import italianno from "tegaki/fonts/italianno";

// Built-in plugins are opt-in: register once, then refer to them by name
TegakiEngine.registerPlugin(taperPlugin);

// Ends thin out like a pen nib touching down and lifting off. Kept light: a long taper
// frays the ends, and anything past 50% would shrink the i-dot (a dot takes the middle width).
const PLUGINS = [["taper", { startLength: 0.08, endLength: 0.2 }]] as const;

// Defaults pause 0.1s between every glyph and ease each stroke out exponentially (fast start,
// hard brake), which reads as mechanical. A hand accelerates and settles into each stroke,
// doesn't stop between joined cursive letters, and lifts the pen between words.
const TIMING: TimelineConfig = {
  glyphGap: 0.02,
  wordGap: 0.25,
  strokeEasing: (t) => -(Math.cos(Math.PI * t) - 1) / 2, // ease-in-out sine
};

// 2× supersampling + finer segments keep the tapered edges smooth at this size
const QUALITY = { smoothing: true, pixelRatio: 2, segmentSize: 1 };

// Split out so the renderer + its font bundle load only via Signature's lazy import.
// Italianno: tall ascenders and looped capitals read as a clean, flowing signature.
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
