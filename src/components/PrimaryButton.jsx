import "../styles/global.css";
import React from "react";
import { AwesomeButton } from "@rcaferati/react-awesome-button";
import "@rcaferati/react-awesome-button/styles.css";

export default function PrimaryButton({ children, href }) {
  return (
    <AwesomeButton href={href} type="primary" size="medium">
      <span className="font-display text-body-normal tracking-wider text-pure-white">
        {children}
      </span>
    </AwesomeButton>
  );
}
