import "/src/styles/global.css";
import {
  SecondaryButton,
  SocialButton,
  HamburgerMenu,
  CloseMenuSlider,
} from "./CustomAwesomeButton.tsx";

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
            aria-expanded="false"
            aria-labelledby="nav-label">
            <HamburgerMenu
              active={hamburgerButton.active}
              size={hamburgerButton.size}
            />
          </div>
          <div
            className="topnav-menu"
            role="dialog"
            aria-labelledby="nav-label">
            <div id="btnClose" aria-label="Close">
              <CloseMenuSlider
                active={closeSliderButton.active}
                size={closeSliderButton.size}
                className="topnav-close"
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
