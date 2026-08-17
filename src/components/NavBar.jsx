import "/src/styles/global.css";
import { SecondaryButton, SocialButton, Whatsapp } from "./PrimaryButton.tsx";

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

export default function Navigation({ logoImage }) {
  return (
    <nav className="section py-custom-xs-s bg-warm-alabaster">
      <div className="max-w-6xl mx-auto flex justify-between items-center max-md:mx-6 max-xl:mx-10">
        <SecondaryButton
          href={homeButton.href}
          active={homeButton.active}
          size={homeButton.size}>
          {homeButton.children}
          <img
            slot="children"
            src={logoImage.src}
            alt="4GoodThings Logo"
            layout="constrained"
            class="w-auto"
          />
        </SecondaryButton>
        <ul className="flex justify-between items-center gap-custom-xs-s max-md:hidden">
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
        <SocialButton
          before={<Whatsapp />}
          sharer={contactButton.sharer}
          type={contactButton.type}
          active={contactButton.active}
          size={contactButton.size}>
          {contactButton.children}
        </SocialButton>
      </div>
    </nav>
  );
}
