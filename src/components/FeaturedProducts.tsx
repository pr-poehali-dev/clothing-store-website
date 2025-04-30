
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Легкая куртка",
    price: 5990,
    category: "Верхняя одежда",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Джинсы классические",
    price: 3490,
    category: "Брюки",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Футболка базовая",
    price: 1290,
    category: "Футболки",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Платье вечернее",
    price: 8990,
    category: "Платья",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Популярные товары</h2>
        <Button variant="outline">Все товары</Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-lg mb-3">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-0 right-0 p-2">
                <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <Button className="w-full gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  В корзину
                </Button>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <h3 className="font-medium">{product.name}</h3>
              <p className="font-semibold">{product.price.toLocaleString()} ₽</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
