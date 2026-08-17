import "../styles/global.css";
import { AwesomeButton } from "@rcaferati/react-awesome-button";
import "@rcaferati/react-awesome-button/styles.css";

function PrimaryButton({ children, href, size, active }) {
  return (
    <AwesomeButton href={href} type="primary" size={size} active={active}>
      <span className="font-display text-body-normal tracking-wider">
        {children}
      </span>
    </AwesomeButton>
  );
}

function SecondaryButton({ children, href, size, active }) {
  return (
    <AwesomeButton href={href} type="secondary" size={size} active={active}>
      <span className="font-display text-body-normal tracking-wider">
        {children}
      </span>
    </AwesomeButton>
  );
}

export { PrimaryButton, SecondaryButton };
