import { useEffect, useState } from "react";
import { PrimaryOrangeButton, SecondaryOrangeButton } from "./TiltButton";
import "/src/styles/global.css";
import { navigate } from "astro:transitions/client";
import PrimaryButton from "./PrimaryButton";

const homeButton = {
  label: "",
  href: "/",
  className: "nav",
  width: 120,
};

const productButton = {
  label: "Product",
  href: "/product",
  className: "nav",
  width: 120,
};

const projectButton = {
  label: "Project",
  href: "/project",
  className: "nav",
  width: 120,
};

const aboutButton = {
  label: "About",
  href: "/about",
  className: "nav",
  width: 120,
};

const contactButton = {
  label: "Contact us",
  href: "",
  className: "nav",
  width: 200,
};

export default function Navigation({ logoImage }) {
  const [mountKey, setMountKey] = useState(0);

  useEffect(() => {
    const rerenderNav = () => setMountKey((value) => value + 1);

    document.addEventListener("astro:page-load", rerenderNav);

    return () => {
      document.removeEventListener("astro:page-load", rerenderNav);
    };
  }, []);

  const handleNavigation = (href) => {
    if (href) {
      navigate(href);
    }
  };

  return (
    <nav key={mountKey} className="section py-custom-xs-s bg-warm-alabaster">
      <div className="max-w-6xl mx-auto flex justify-between items-center max-md:mx-6 max-xl:mx-10">
        <SecondaryOrangeButton
          href={homeButton.href}
          className={homeButton.className}
          width={homeButton.width}
          handleClick={() => handleNavigation(homeButton.href)}>
          <img
            slot="children"
            src={logoImage.src}
            alt="4GoodThings Logo"
            layout="constrained"
            class="w-auto"
          />
        </SecondaryOrangeButton>
        <ul className="flex justify-between items-center gap-custom-xs-s max-md:hidden">
          <li>
            <button className="py-4 px-8 bg-soft-sand">
              <a
                href="/about"
                className="font-display text-body-normal tracking-wider text-deep-pine-charcoal">
                About
              </a>
            </button>
          </li>
          <li>
            <PrimaryButton href={aboutButton.href}>
              {aboutButton.label}
            </PrimaryButton>
          </li>
          <li>
            <SecondaryOrangeButton
              href={productButton.href}
              className={productButton.className}
              width={productButton.width}
              handleClick={() => handleNavigation(productButton.href)}>
              {productButton.label}
            </SecondaryOrangeButton>
          </li>
          <li>
            <SecondaryOrangeButton
              href={projectButton.href}
              className={projectButton.className}
              width={projectButton.width}
              handleClick={() => handleNavigation(projectButton.href)}>
              {projectButton.label}
            </SecondaryOrangeButton>
          </li>
          <li>
            <SecondaryOrangeButton
              href={aboutButton.href}
              className={aboutButton.className}
              width={aboutButton.width}
              handleClick={() => handleNavigation(aboutButton.href)}>
              {aboutButton.label}
            </SecondaryOrangeButton>
          </li>
        </ul>
        <PrimaryOrangeButton
          href={contactButton.href}
          className={contactButton.className}
          width={contactButton.width}
          handleClick={() => handleNavigation(contactButton.href)}>
          <div slot="children" className="flex gap-custom-3xs items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
            </svg>
            <span className="max-md:hidden">{contactButton.label}</span>
          </div>
        </PrimaryOrangeButton>
      </div>
    </nav>
  );
}
