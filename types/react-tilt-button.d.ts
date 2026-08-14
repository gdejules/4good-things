declare module "react-tilt-button" {
  import * as React from "react";

  export interface TiltButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // Core
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;

    // Variant
    variant?: "solid" | "outline" | "arcade" | "carbon" | "warning";

    // Geometry
    width?: number | string;
    height?: number | string;
    elevation?: number;
    pressInset?: number;
    tilt?: number;
    pressTilt?: boolean;
    radius?: number;
    motion?: number;

    // Colors (optional overrides)
    surfaceColor?: string;
    sideColor?: string;
    textColor?: string;

    // Border
    borderColor?: string;
    borderWidth?: number;

    // Glare / Specular Highlight
    glareColor?: string;
    glareOpacity?: number;
    glareWidth?: number;

    // Misc
    className?: string;
    style?: React.CSSProperties;
  }

  export const TiltButton: React.FC<TiltButtonProps>;
  export default TiltButton;
}
