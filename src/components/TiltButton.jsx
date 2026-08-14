import { TiltButton } from "react-tilt-button";

function PrimaryGreenButton({ children, className, width }) {
  return (
    <TiltButton
      className={className}
      variant="primary"
      width={width}
      height={72}
      elevation={21}
      tilt={2.3}
      surfaceColor="oklch(53.334% 0.15508 143.033)"
      sideColor="oklch(0.400391 0.096875 143.3)"
      borderColor="oklch(0.400391 0.096875 143.3)"
      textColor="oklch(1 0 0)">
      <span className="font-display text-body-normal tracking-wider">
        {children}
      </span>
    </TiltButton>
  );
}

function SecondaryGreenButton({ children, className, width }) {
  return (
    <TiltButton
      className={className}
      variant="outline"
      width={width}
      height={72}
      elevation={21}
      tilt={2.3}
      surfaceColor="oklch(98.178% 0.00528 95.189)"
      sideColor="oklch(0.400391 0.096875 143.3)"
      borderColor="oklch(0.400391 0.096875 143.3)"
      textColor="oklch(0.400391 0.096875 143.3)">
      <span className="font-display text-body-normal tracking-wider">
        {children}
      </span>
    </TiltButton>
  );
}

export { PrimaryGreenButton, SecondaryGreenButton };
