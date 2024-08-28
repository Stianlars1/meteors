"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsDarkmodeActive = void 0;
const react_1 = require("react");
const useIsDarkmodeActive = () => {
    const [isDarkmodeActive, setIsDarkmodeActive] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
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
exports.useIsDarkmodeActive = useIsDarkmodeActive;
