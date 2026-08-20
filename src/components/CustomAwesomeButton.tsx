import "../styles/global.css";
import {
  AwesomeButton,
  AwesomeButtonSocial,
} from "@rcaferati/react-awesome-button";
import "@rcaferati/react-awesome-button/styles.css";
import type { ReactNode } from "react";

interface ButtonProps {
  children?: string;
  href: string;
  size: string;
  active: boolean;
  before?: ReactNode;
  download?: string;
  className?: string;
  onPress?: (event: any) => void;
}

interface SocialButtonProps {
  children?: string;
  type: string;
  sharer?: object;
  href?: string;
  size: string;
  active: boolean;
  before?: ReactNode;
  className?: string;
}

function PrimaryButton({
  children,
  href,
  size,
  active,
  before,
  className,
}: ButtonProps) {
  return (
    <AwesomeButton
      href={href}
      type="primary"
      size={size}
      active={active}
      before={before}
      className={className}>
      <span className="font-display text-body-normal max-lg:text-body-small tracking-widest">
        {children}
      </span>
    </AwesomeButton>
  );
}

function SecondaryButton({
  children,
  href,
  size,
  active,
  before,
  className,
}: ButtonProps) {
  return (
    <AwesomeButton
      href={href}
      type="secondary"
      size={size}
      active={active}
      before={before}
      className={className}>
      <span className="font-display text-body-normal max-lg:text-body-small tracking-widest">
        {children}
      </span>
    </AwesomeButton>
  );
}

function SocialButton({
  children,
  type,
  size,
  before,
  sharer,
  href,
  className,
}: SocialButtonProps) {
  return (
    <AwesomeButtonSocial
      type={type}
      size={size}
      before={before}
      sharer={sharer}
      href={href}
      containerProps={{ target: "_blank", rel: "noreferrer noopener" }}
      className={className}>
      <span className="font-display text-body-normal max-lg:text-body-small tracking-widest">
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}

function Download() {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-download">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
      <path d="M7 11l5 5l5 -5" />
      <path d="M12 4l0 12" />
    </svg>
  );
}

function DownloadButton({
  children,
  href,
  size,
  active,
  download,
  className,
}: ButtonProps) {
  return (
    <AwesomeButton
      type="secondary"
      size={size}
      active={active}
      before={<Download />}
      className={className}
      href={href}
      containerProps={{ target: "_blank", rel: "noreferrer noopener" }}>
      <span className="font-display text-body-normal max-lg:text-body-small tracking-widest">
        {children}
      </span>
    </AwesomeButton>
  );
}

function Hamburger() {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </svg>
  );
}

function Instagram() {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16.5 7.5v.01" />
    </svg>
  );
}

function Mail() {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-mail">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
      <path d="M3 7l9 6l9 -6" />
    </svg>
  );
}

function HamburgerMenu({ size, active, className, onPress }: ButtonProps) {
  return (
    <AwesomeButton
      type="secondary"
      size={size}
      active={active}
      before={<Hamburger />}
      className={className}
      placeholder={false}
      onPress={onPress}
    />
  );
}

export {
  PrimaryButton,
  SecondaryButton,
  SocialButton,
  Whatsapp,
  DownloadButton,
  Instagram,
  Mail,
  HamburgerMenu,
};
