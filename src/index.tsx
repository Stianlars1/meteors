import React, { useEffect, useRef } from "react";
import styles from "./css/meteors.module.css";

type MeteorProps = {
  speed?: number;
  size?: number;
  amount?: number;
  fallingSide?: "left" | "right";
};

const Meteors: React.FC<MeteorProps> = ({
  speed = 1,
  size = 50,
  amount = 20,
  fallingSide = "left",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const maxWidth = 50; // Set maximum width for meteors

    const meteors = Array.from({ length: amount }).map((_, i) => {
      const delay = Math.random() * (amount / 2);
      const duration = Math.random() * (5 / speed) + 2;
      // Adjust startX and startY to ensure the meteor will enter the container
      const startX = Math.random() * containerWidth;
      const startY = (Math.random() * -containerHeight) / 3; // Limit starting Y to -50% of container height

      const meteor = document.createElement("div");
      meteor.className = `${styles.meteor} ${styles[`fall-${fallingSide}`]}`;
      meteor.style.width = `${Math.random() * (maxWidth - 10) + 10}px`; // Random width between 10px and 50px
      meteor.style.height = "1px";

      // Set initial position, ensuring it will enter the viewbox
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

  return <div ref={containerRef} className={styles.container}></div>;
};

export default Meteors;
