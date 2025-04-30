
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">МОДНЫЙ СТИЛЬ</h3>
            <p className="text-muted-foreground mb-4">
              Мы предлагаем широкий выбор стильной одежды высокого качества по доступным ценам
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog/women" className="text-muted-foreground hover:text-primary">Женщинам</Link></li>
              <li><Link to="/catalog/men" className="text-muted-foreground hover:text-primary">Мужчинам</Link></li>
              <li><Link to="/catalog/accessories" className="text-muted-foreground hover:text-primary">Аксессуары</Link></li>
              <li><Link to="/catalog/sales" className="text-muted-foreground hover:text-primary">Распродажа</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">О нас</Link></li>
              <li><Link to="/delivery" className="text-muted-foreground hover:text-primary">Доставка и оплата</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-primary">Возврат</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-primary">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">ул. Модная, 123, Москва</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
                <a href="tel:+78001234567" className="text-muted-foreground hover:text-primary">8 (800) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
                <a href="mailto:info@modastyle.ru" className="text-muted-foreground hover:text-primary">info@modastyle.ru</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} МОДНЫЙ СТИЛЬ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
