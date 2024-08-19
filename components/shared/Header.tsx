import ActiveLink from "@/components/shared/ActiveLink";
import Image from "@/components/shared/Image";
import { headerNavLinks } from "@/data/config/headerNavLinks";
import { siteConfig } from "@/data/config/site.settings";
import { cn } from "@/lib/utils";
import Link from "./Link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

const Header = ({ className }: { className?: string }) => {
  return (
    <header
      className={cn(
        "flex items-center justify-between py-10 flex-wrap w-full mb-20 lg:mb-32 pt-6 p-6 max-w-full container-wide",
        className
      )}
    >
      <div>
        <Link href="/" aria-label={siteConfig.logoTitle}>
          <div className="flex items-center gap-3 justify-between">
            <Image
              src="/static/images/logo.svg"
              alt="OneTask logo"
              height={43}
              width={43}
              className="group-hover:animate-wiggle "
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 gap-4 sm:gap-6">
        {headerNavLinks.map((link) => (
          <ActiveLink
            key={link.title}
            href={link.href}
            className="nav-link hidden sm:block"
            activeClassName="nav-link-active"
          >
            <span>{link.title}</span>
          </ActiveLink>
        ))}

        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
