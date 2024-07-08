import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, User } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
          FT
        </NavLink>
        <DesktopNav />
        <MobileNav />
        <UserMenu />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const DesktopNav = () => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
  </nav>
);

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.icon}
            {item.title}
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" className="rounded-full">
        <User className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Subscriptions</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-2 transition-colors",
        isActive
          ? "text-primary font-semibold"
          : "text-muted-foreground hover:text-primary",
        className,
      )
    }
  >
    {children}
  </NavLink>
);

const Footer = () => (
  <footer className="border-t bg-muted/40 py-6 px-4 md:px-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex gap-4 mb-4 md:mb-0">
        <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</NavLink>
        <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</NavLink>
        <NavLink to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</NavLink>
        <NavLink to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</NavLink>
      </div>
      <div className="flex gap-4">
        {/* Add social media icons here */}
        <span className="text-sm text-muted-foreground">© 2024 Financial Times</span>
      </div>
    </div>
  </footer>
);

export default Layout;