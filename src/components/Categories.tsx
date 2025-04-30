
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Женщинам",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1964&auto=format&fit=crop",
    link: "/catalog/women"
  },
  {
    id: 2,
    title: "Мужчинам",
    image: "https://images.unsplash.com/photo-1617196701537-7329482cc9fe?q=80&w=1964&auto=format&fit=crop",
    link: "/catalog/men"
  },
  {
    id: 3,
    title: "Аксессуары",
    image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?q=80&w=1964&auto=format&fit=crop",
    link: "/catalog/accessories"
  }
];

const Categories = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Категории</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link 
            to={category.link} 
            key={category.id}
            className="group relative hover-scale rounded-lg overflow-hidden h-[400px]"
          >
            <img 
              src={category.image} 
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <h3 className="text-white text-2xl font-semibold p-6">
                {category.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
