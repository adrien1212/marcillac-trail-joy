import { Mountain, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { to: "/parcours", label: "Les parcours" },
  { to: "/randonnee", label: "Randonnée" },
  { to: "/resultats", label: "Résultats" },
  { to: "/inscription", label: "Inscription" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-display text-2xl tracking-wider text-foreground">
              TRAIL DE NUCES
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden p-2" aria-label="Menu">
            <Menu className="h-6 w-6 text-foreground" />
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="font-display text-xl mb-6">Menu</SheetTitle>
            <div className="flex flex-col gap-4 font-body text-base">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
