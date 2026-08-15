import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

function NavItem({ to, children }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-neutral-0 underline decoration-primary-700 underline-offset-4"
          : "text-neutral-200 transition-colors hover:text-neutral-0"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavItem;