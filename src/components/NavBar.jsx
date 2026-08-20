import "/src/styles/global.css";
import {
  SecondaryButton,
  SocialButton,
  Whatsapp,
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

const mobileHomeButton = {
  children: "Home",
  href: "/",
  className: "nav",
  size: "small",
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
  // onPress: () => alert("Open mobile menu slider"),
};

const closeSliderButton = {
  size: "small",
  active: false,
  // onPress: () => alert("Close mobile menu slider"),
};

export default function Navigation({ logoImage }) {
  return (
    <nav className="section py-custom-xs-s bg-warm-alabaster">
      <span id="nav-label" hidden>
        Navigation
      </span>
      <li
        id="btnOpen"
        className="topnav-open md:hidden"
        aria-expanded="false"
        aria-labelledby="nav-label">
        <HamburgerMenu
          active={hamburgerButton.active}
          size={hamburgerButton.size}
        />
      </li>
      <div
        className="topnav-menu md:hidden fixed inset-0 p-6 bg-soft-sand"
        role="dialog"
        aria-labelledby="nav-label">
        <CloseMenuSlider
          active={closeSliderButton.active}
          size={closeSliderButton.size}
          onPress={closeSliderButton.onPress}
          className="topnav-close block ms-auto mbe-32"
        />
        <ul className="topnav-links flex flex-col justify-center items-center gap-custom-2xs-xs">
          <li>
            <SecondaryButton
              href={mobileHomeButton.href}
              active={mobileHomeButton.active}
              size={mobileHomeButton.size}>
              {mobileHomeButton.children}
            </SecondaryButton>
          </li>
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
          <li>
            <SocialButton
              before={<Whatsapp />}
              sharer={contactButton.sharer}
              type={contactButton.type}
              active={contactButton.active}
              size="small"
              className="mobile-nav"
            />
          </li>
        </ul>
      </div>
      <ul className="desktop-nav max-w-6xl mx-auto flex justify-between items-center max-md:mx-6 max-xl:mx-10">
        <li className="max-lg:hidden">
          <SecondaryButton
            href={homeButton.href}
            active={homeButton.active}
            size={homeButton.size}>
            <img
              slot="children"
              src={logoImage.src}
              alt="4GoodThings Logo"
              layout="constrained"
              class="w-auto"
            />
          </SecondaryButton>
        </li>
        <li className="lg:hidden">
          <SecondaryButton
            href={homeButton.href}
            active={homeButton.active}
            size="small">
            <img
              slot="children"
              src={logoImage.src}
              alt="4GoodThings Logo"
              layout="constrained"
              class="w-auto"
            />
          </SecondaryButton>
        </li>
        <ul className="flex justify-between items-center gap-custom-2xs-xs max-md:hidden">
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
        </ul>
        <li className="max-lg:hidden">
          <SocialButton
            before={<Whatsapp />}
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
            before={<Whatsapp />}
            sharer={contactButton.sharer}
            type={contactButton.type}
            active={contactButton.active}
            size="small"
            className="mobile-nav"
          />
        </li>
      </ul>
    </nav>
  );
}
