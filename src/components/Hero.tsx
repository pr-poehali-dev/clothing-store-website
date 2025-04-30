
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Новая коллекция весна-лето 2025
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Откройте для себя последние тренды и стильные новинки в нашей эксклюзивной коллекции
          </p>
          <div className="flex gap-4">
            <Button size="lg">Смотреть коллекцию</Button>
            <Button variant="outline" size="lg">Подробнее</Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
            alt="Модель в одежде из новой коллекции" 
            className="rounded-lg shadow-lg object-cover h-[500px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
