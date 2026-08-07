"use client";

import { useEffect, useState } from "react";
import { ClockIcon } from "../icons";
import { profile } from "../../data";
import styles from "./Header.module.css";

export function Header() {
  const [now, setNow] = useState("");

  useEffect(() => {
    function tick() {
      const d = new Date();
      const time = d.toLocaleTimeString("en-GB", { hour12: false });
      const offset = -d.getTimezoneOffset() / 60;
      const gmt = `GMT${offset >= 0 ? "+" : ""}${offset}`;
      setNow(`${time} ${gmt}`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="top" className={styles.bar}>
      <span className={styles.label}>EST. {profile.estYear}</span>
      <span className={styles.clock}>
        <ClockIcon />
        {now || " "}
      </span>
    </div>
  );
}
