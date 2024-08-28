"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meteors = void 0;
const react_1 = __importStar(require("react"));
const meteors_module_css_1 = __importDefault(require("./css/meteors.module.css"));
const hooks_1 = require("./hooks");
const Meteors = ({ speed = 1, size = 50, amount = 20, fallingSide = "left", colorLightmode = undefined, colorDarkmode = undefined, }) => {
    const containerRef = (0, react_1.useRef)(null);
    const { isDarkmodeActive } = (0, hooks_1.useIsDarkmodeActive)();
    (0, react_1.useEffect)(() => {
        const container = containerRef.current;
        if (!container)
            return;
        const containerWidth = container.offsetWidth;
        const maxWidth = 50; // Set maximum width for meteors
        const meteors = Array.from({ length: amount }).map((_, i) => {
            const delay = Math.random() * (amount / 2);
            const duration = Math.random() * (5 / speed) + 2;
            const startY = -20;
            const startX = Math.random() * containerWidth;
            const meteor = document.createElement("div");
            meteor.className = `${meteors_module_css_1.default.meteor} ${meteors_module_css_1.default[`fall-${fallingSide}`]}`;
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
    (0, react_1.useEffect)(() => {
        const container = containerRef.current;
        if (!container)
            return;
        console.log("isDarkmodeActive 2", isDarkmodeActive);
        if (isDarkmodeActive) {
            container.style.setProperty("--meteor-color", `${colorDarkmode ? colorDarkmode : "rgba(255, 255, 255, 1)"}`);
        }
        else {
            container.style.setProperty("--meteor-color", `${colorLightmode ? colorLightmode : "rgba(0, 0, 0, 1)"}`);
        }
    }, [isDarkmodeActive]);
    return react_1.default.createElement("div", { ref: containerRef, className: meteors_module_css_1.default.container });
};
exports.Meteors = Meteors;
