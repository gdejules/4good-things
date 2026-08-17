import "../styles/global.css";
import { AwesomeButton } from "@rcaferati/react-awesome-button";
import "@rcaferati/react-awesome-button/styles.css";

export default function PrimaryButton({ children, href }) {
  return (
    <AwesomeButton href={href} type="primary" size="medium">
      <span className="font-display text-body-normal tracking-wider">
        {children}
      </span>
    </AwesomeButton>
  );
}
