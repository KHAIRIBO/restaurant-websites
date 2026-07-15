import Image from "next/image";
import Reveal from "@/components/Reveal";

const dishes = [
  {
    name: "Grilled Salmon",
    description: "Wild-caught salmon, lemon butter, asparagus.",
    price: "$28",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
  },
  {
    name: "Truffle Pasta",
    description: "Handmade tagliatelle, black truffle, parmesan.",
    price: "$24",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80",
  },
  {
    name: "Wagyu Burger",
    description: "A5 wagyu, brioche bun, smoked cheddar.",
    price: "$22",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  },
  {
    name: "Garden Salad",
    description: "Heirloom tomatoes, burrata, basil oil.",
    price: "$16",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
  },
  {
    name: "Wood Pizza",
    description: "San Marzano, mozzarella, fresh basil.",
    price: "$19",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  },
  {
    name: "Dark Dessert",
    description: "70% chocolate fondant, sea salt caramel.",
    price: "$12",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-white">
            Our <span className="gradient-text">Menu</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center font-light text-neutral-400">
            A carefully curated selection, changed with the seasons.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 80}>
              <div className="group h-full overflow-hidden rounded-3xl glass transition duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={dish.img}
                    alt={dish.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {dish.name}
                    </h3>
                    <span className="text-primary">{dish.price}</span>
                  </div>
                  <p className="mt-2 text-sm font-light text-neutral-400">
                    {dish.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
