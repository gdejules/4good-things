import "../styles/global.css";
import {
  AwesomeButton,
  AwesomeButtonSocial,
} from "@rcaferati/react-awesome-button";
import "@rcaferati/react-awesome-button/styles.css";

function PrimaryButton({ children, href, size, active, before }) {
  return (
    <AwesomeButton
      href={href}
      type="primary"
      size={size}
      active={active}
      before={before}>
      <span className="font-display text-body-normal tracking-wider">
        {children}
      </span>
    </AwesomeButton>
  );
}

function SecondaryButton({ children, href, size, active, before }) {
  return (
    <AwesomeButton
      href={href}
      type="secondary"
      size={size}
      active={active}
      before={before}>
      <span className="font-display text-body-normal tracking-wider">
        {children}
      </span>
    </AwesomeButton>
  );
}

function SocialButton({ children, type, size, before, sharer }) {
  return (
    <AwesomeButtonSocial
      type={type}
      size={size}
      before={before}
      sharer={sharer}>
      <span className="font-display text-body-normal tracking-wider">
        {children}
      </span>
    </AwesomeButtonSocial>
  );
}

function Whatsapp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}

export { PrimaryButton, SecondaryButton, SocialButton, Whatsapp };
