export interface MeteorProps {
  speed?: number;
  size?: number;
  amount?: number;
  fallingSide?: "left" | "right";
  colorLightmode?: string;
  colorDarkmode?: string;
  style?: React.CSSProperties;
  className?: string;
}
