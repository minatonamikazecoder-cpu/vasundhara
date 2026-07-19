import { NavLink } from "react-router-dom";
import { MainMenuRootList } from "@/shared/mobile-menu/MobileMenuCloneContext";

function MenuLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : undefined)}>
      {children}
    </NavLink>
  );
}

function LinkSwap({ label }: { label: string }) {
  return (
    <span className="at-link-swap">
      <span className="text-1">{label}</span>
      <span className="text-2">{label}</span>
    </span>
  );
}

export default function MainMenu() {
  return (
    <MainMenuRootList>
      <li>
        <MenuLink to="/">
          <LinkSwap label="Home" />
        </MenuLink>
      </li>
      <li>
        <MenuLink to="/about">
          <LinkSwap label="About Us" />
        </MenuLink>
      </li>
      <li>
        <MenuLink to="/contact">
          <LinkSwap label="Contact Us" />
        </MenuLink>
      </li>
    </MainMenuRootList>
  );
}
