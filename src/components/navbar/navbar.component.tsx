import Link from "next/link";
import { MoonIcon, SunIcon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "../common/button/button.component";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Cultura Uberlândia
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Início
          </Link>
          <Link
            href="/turismo"
            className="hover:text-primary transition-colors"
          >
            Turismo e Cultura
          </Link>
          <Link href="/agenda" className="hover:text-primary transition-colors">
            Agenda Cultural
          </Link>
          <Link
            href="/artistas"
            className="hover:text-primary transition-colors"
          >
            Espaço do Artista
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
            <span className="sr-only">Alternar tema</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/turismo"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Turismo e Cultura
            </Link>
            <Link
              href="/agenda"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda Cultural
            </Link>
            <Link
              href="/artistas"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Espaço do Artista
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start px-0"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsMenuOpen(false);
              }}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 mr-2" />
              ) : (
                <MoonIcon className="h-5 w-5 mr-2" />
              )}
              Alternar tema
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
