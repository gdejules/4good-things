import { TiltButton } from "react-tilt-button";

function PrimaryGreenButton({ children, href, className, width, handleClick }) {
  return (
    <TiltButton
      client:load
      transition:persist="button"
      className={className}
      variant="primary"
      width={width}
      height={72}
      elevation={21}
      tilt={2.3}
      surfaceColor="oklch(53.334% 0.15508 143.033)"
      sideColor="oklch(0.400391 0.096875 143.3)"
      borderColor="oklch(0.400391 0.096875 143.3)"
      textColor="oklch(1 0 0)"
      onClick={handleClick}>
      <a href={href} className="font-display text-body-normal tracking-wider">
        {children}
      </a>
    </TiltButton>
  );
}

function SecondaryGreenButton({
  children,
  href,
  className,
  width,
  handleClick,
}) {
  return (
    <TiltButton
      client:load
      transition:persist="button"
      className={className}
      variant="outline"
      width={width}
      height={72}
      elevation={21}
      tilt={2.3}
      surfaceColor="oklch(98.178% 0.00528 95.189)"
      sideColor="oklch(0.400391 0.096875 143.3)"
      borderColor="oklch(0.400391 0.096875 143.3)"
      textColor="oklch(0.400391 0.096875 143.3)"
      onClick={handleClick}>
      <a href={href} className="font-display text-body-normal tracking-wider">
        {children}
      </a>
    </TiltButton>
  );
}

function PrimaryOrangeButton({
  children,
  href,
  className,
  width,
  handleClick,
}) {
  return (
    <TiltButton
      client:load
      transition:persist="button"
      className={className}
      variant="primary"
      width={width}
      height={72}
      elevation={21}
      tilt={2.3}
      surfaceColor="oklch(68.749% 0.17328 53.414)"
      sideColor="oklch(0.62207 0.14375 53.4)"
      borderColor="oklch(0.62207 0.14375 53.4)"
      textColor="oklch(1 0 0)"
      onClick={handleClick}>
      <a href={href} className="font-display text-body-normal tracking-wider">
        {children}
      </a>
    </TiltButton>
  );
}

function SecondaryOrangeButton({
  children,
  href,
  className,
  width,
  handleClick,
}) {
  return (
    <TiltButton
      client:load
      transition:persist="button"
      className={className}
      variant="outline"
      width={width}
      height={72}
      elevation={21}
      tilt={2.3}
      surfaceColor="oklch(98.178% 0.00528 95.189)"
      sideColor="oklch(0.62207 0.14375 53.4)"
      borderColor="oklch(0.62207 0.14375 53.4)"
      textColor="oklch(68.749% 0.17328 53.414)"
      onClick={handleClick}>
      <a href={href} className="font-display text-body-normal tracking-wider">
        {children}
      </a>
    </TiltButton>
  );
}

function PressedOrangeButton({
  children,
  href,
  className,
  width,
  handleClick,
}) {
  return (
    <TiltButton
      client:load
      transition:persist="button"
      className={className}
      variant="outline"
      width={width}
      height={72}
      elevation={21}
      tilt={2.3}
      disabled={true}
      surfaceColor="oklch(98.178% 0.00528 95.189)"
      sideColor="oklch(0.62207 0.14375 53.4)"
      borderColor="oklch(0.62207 0.14375 53.4)"
      textColor="oklch(68.749% 0.17328 53.414)"
      onClick={handleClick}>
      <a href={href} className="font-display text-body-normal tracking-wider">
        {children}
      </a>
    </TiltButton>
  );
}

export {
  PrimaryGreenButton,
  SecondaryGreenButton,
  PrimaryOrangeButton,
  SecondaryOrangeButton,
  PressedOrangeButton,
};
