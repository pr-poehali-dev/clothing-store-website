
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <section className="bg-accent/30 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Подписка на новости</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Будьте в курсе последних тенденций и специальных предложений
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-grow rounded-md border border-input px-4 py-2"
              />
              <Button>Подписаться</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
