import "/src/styles/global.css";
import {
  SecondaryButton,
  SocialButton,
  HamburgerMenu,
  CloseMenuSlider,
} from "./CustomAwesomeButton.tsx";
import { useEffect, useState } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock-upgrade";

const homeButton = {
  children: "",
  href: "/",
  className: "nav",
  size: "medium",
  active: false,
};

const productButton = {
  children: "Product",
  href: "/product",
  className: "nav",
  size: "medium",
  active: false,
};

const projectButton = {
  children: "Project",
  href: "/project",
  className: "nav",
  size: "medium",
  active: false,
};

const aboutButton = {
  children: "About",
  href: "/about",
  className: "nav",
  size: "medium",
  active: false,
};

const contactButton = {
  children: "Contact us",
  sharer: {
    url: "https://play.google.com/store/apps/details?id=com.whatsapp&hl=en",
    message: "Check this out",
  },
  className: "nav",
  type: "whatsapp",
  size: "large",
  active: false,
};

const hamburgerButton = {
  size: "small",
  active: false,
};

const closeSliderButton = {
  size: "small",
  active: false,
};

interface ImageData {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

interface Prop {
  logoImage: ImageData;
}

export default function Navigation({ logoImage }: Prop) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(width < 48rem)");
    const handleMediaChange = () => {
      setIsMobile(media.matches);
      if (!media.matches) setIsMenuOpen(false);
    };
    const closeOnPageTransition = () => setIsMenuOpen(false);

    handleMediaChange();
    media.addEventListener("change", handleMediaChange);
    document.addEventListener("astro:before-preparation", closeOnPageTransition);

    return () => {
      media.removeEventListener("change", handleMediaChange);
      document.removeEventListener(
        "astro:before-preparation",
        closeOnPageTransition,
      );
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }

    return () => enableBodyScroll(document.body);
  }, [isMenuOpen]);

  return (
    <header className="section py-custom-xs-s bg-warm-alabaster">
      <div className="max-w-6xl mx-auto flex justify-between items-center max-md:mx-6 max-xl:mx-10">
        <div className="max-lg:hidden">
          <SecondaryButton
            href={homeButton.href}
            active={homeButton.active}
            size={homeButton.size}>
            <img src={logoImage.src} alt={logoImage.alt} className="w-auto" />
          </SecondaryButton>
        </div>
        <div className="lg:hidden">
          <SecondaryButton
            href={homeButton.href}
            active={homeButton.active}
            size="small">
            <img src={logoImage.src} alt={logoImage.alt} className="w-auto" />
          </SecondaryButton>
        </div>
        <nav>
          <span id="nav-label" hidden>
            Navigation
          </span>
          <div
            id="btnOpen"
            className="topnav-open md:hidden"
            aria-expanded={isMenuOpen}
            aria-labelledby="nav-label">
            <HamburgerMenu
              active={hamburgerButton.active}
              size={hamburgerButton.size}
              onPress={() => setIsMenuOpen(true)}
            />
          </div>
          <div
            className="topnav-menu"
            role="dialog"
            aria-labelledby="nav-label"
            aria-modal="true"
            inert={isMobile && !isMenuOpen ? true : undefined}>
            <div id="btnClose" aria-label="Close">
              <CloseMenuSlider
                active={closeSliderButton.active}
                size={closeSliderButton.size}
                className="topnav-close"
                onPress={() => setIsMenuOpen(false)}
              />
            </div>
            <ul className="topnav-links flex max-md:flex-col justify-center items-center gap-custom-xs-s">
              <li>
                <SecondaryButton
                  href={productButton.href}
                  active={productButton.active}
                  size={productButton.size}>
                  {productButton.children}
                </SecondaryButton>
              </li>
              <li>
                <SecondaryButton
                  href={projectButton.href}
                  active={projectButton.active}
                  size={projectButton.size}>
                  {projectButton.children}
                </SecondaryButton>
              </li>
              <li>
                <SecondaryButton
                  href={aboutButton.href}
                  active={aboutButton.active}
                  size={aboutButton.size}>
                  {aboutButton.children}
                </SecondaryButton>
              </li>
              <li className="md:max-lg:hidden">
                <SocialButton
                  sharer={contactButton.sharer}
                  type={contactButton.type}
                  active={contactButton.active}
                  size={contactButton.size}
                  className="nav">
                  {contactButton.children}
                </SocialButton>
              </li>
              <li className="lg:hidden max-md:hidden">
                <SocialButton
                  sharer={contactButton.sharer}
                  type={contactButton.type}
                  active={contactButton.active}
                  size="small"
                  className="mobile-nav"
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
