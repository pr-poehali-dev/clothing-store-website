
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold mr-10">
              МОДНЫЙ СТИЛЬ
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/catalog" className="hover:text-primary transition-colors">
                Каталог
              </Link>
              <Link to="/new" className="hover:text-primary transition-colors">
                Новинки
              </Link>
              <Link to="/sales" className="hover:text-primary transition-colors">
                Скидки
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search />
            </Button>
            <Button variant="ghost" size="icon">
              <User />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag />
              <span className="absolute top-1 right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
                3
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="py-4 md:hidden flex flex-col space-y-4">
            <Link to="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/new" className="hover:text-primary transition-colors">
              Новинки
            </Link>
            <Link to="/sales" className="hover:text-primary transition-colors">
              Скидки
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
