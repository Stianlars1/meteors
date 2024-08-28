import { useEffect, useState } from "react";

export const useIsDarkmodeActive = () => {
  const [isDarkmodeActive, setIsDarkmodeActive] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      setIsDarkmodeActive(matchMedia.matches);
    };

    // Set the initial value
    setIsDarkmodeActive(matchMedia.matches);

    // Listen for changes
    matchMedia.addEventListener("change", handleChange);

    // Cleanup listener on unmount
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, []);

  return { isDarkmodeActive };
};
