"use client";

import { PinIcon, SunIcon, PartlyCloudyIcon, CloudIcon, FogIcon, RainIcon, StormIcon, SnowIcon } from "../icons";
import { useLocale } from "../../i18n/LocaleContext";
import type { Weather, WeatherKind } from "../../lib/weather";
import styles from "./Footer.module.css";

const weatherIcons: Record<WeatherKind, () => React.JSX.Element> = {
  sun: SunIcon,
  "partly-cloudy": PartlyCloudyIcon,
  cloud: CloudIcon,
  fog: FogIcon,
  rain: RainIcon,
  storm: StormIcon,
  snow: SnowIcon,
};

export function FooterMeta({ weather }: { weather: Weather | null }) {
  const { t } = useLocale();
  const WeatherIcon = weather ? weatherIcons[weather.kind] : null;

  return (
    <div className={styles.meta}>
      <span className={styles.metaItem}>
        <PinIcon />
        {t.footer.location}
      </span>
      {weather && WeatherIcon && (
        <span className={styles.metaItem}>
          <WeatherIcon />
          {weather.temperatureC}°C
        </span>
      )}
    </div>
  );
}
