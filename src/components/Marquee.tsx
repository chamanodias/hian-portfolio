"use client";

import { useState } from "react";

export default function Marquee() {
  const [paused, setPaused] = useState(false);
  return <div className={`marquee ${paused ? "paused" : ""}`}>
    <div className="marquee-window" aria-hidden="true"><div className="marquee-track">{[0, 1].map((group) => <div className="marquee-group" key={group}>{[0, 1, 2].map((item) => <span key={item}>SEU RITMO. <i>SUA EVOLUÇÃO.</i>&nbsp; ↗ &nbsp;</span>)}</div>)}</div></div>
    <p className="sr-only">Seu ritmo. Sua evolução.</p>
    <button className="text-button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Retomar movimento" : "Pausar movimento"}</button>
  </div>;
}
