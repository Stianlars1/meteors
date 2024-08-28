import React, { useEffect, useRef } from "react";
import { MeteorProps } from "../types/types";
import styles from "./css/meteors.module.css";
import { useIsDarkmodeActive } from "./hooks";

export const Meteors: React.FC<MeteorProps> = ({
  speed = 1,
  size = 50,
  amount = 20,
  fallingSide = "left",
  colorLightmode = undefined,
  colorDarkmode = undefined,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDarkmodeActive } = useIsDarkmodeActive();
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const maxWidth = 50; // Set maximum width for meteors

    const meteors = Array.from({ length: amount }).map((_, i) => {
      const delay = Math.random() * (amount / 2);
      const duration = Math.random() * (5 / speed) + 2;

      const startY = -20;

      const startX = Math.random() * containerWidth;

      const meteor = document.createElement("div");
      meteor.className = `${styles.meteor} ${styles[`fall-${fallingSide}`]}`;
      meteor.style.width = `${Math.random() * (maxWidth - 10) + 10}px`;

      meteor.style.left =
        fallingSide === "left" ? `${startX}px` : `${containerWidth - startX}px`;
      meteor.style.top = `${startY}px`;
      meteor.style.animationDelay = `${delay}s`;
      meteor.style.animationDuration = `${duration}s`;

      return meteor;
    });

    meteors.forEach((meteor) => container.appendChild(meteor));

    return () => {
      meteors.forEach((meteor) => meteor.remove());
    };
  }, [speed, size, amount, fallingSide]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    console.log("isDarkmodeActive 2", isDarkmodeActive);
    if (isDarkmodeActive) {
      container.style.setProperty(
        "--meteor-color",
        `${colorDarkmode ? colorDarkmode : "rgba(255, 255, 255, 1)"}`
      );
    } else {
      container.style.setProperty(
        "--meteor-color",
        `${colorLightmode ? colorLightmode : "rgba(0, 0, 0, 1)"}`
      );
    }
  }, [isDarkmodeActive]);

  return <div ref={containerRef} className={styles.container}></div>;
};
