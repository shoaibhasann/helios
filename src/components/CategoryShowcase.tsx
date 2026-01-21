"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // In real app, use next/image. For now using img for Unsplash. Wait, next/image requires domain config. I'll configure next.config if needed, or just use <img> for placeholders to avoid error. Or use unoptimized prop.

const categories = [
    {
        id: "chandeliers",
        title: "Chandeliers",
        description: "Grand centerpieces that define the atmosphere of any room. Crystal, glass, and modern metals.",
        image: "/chandeliers/chandelier1.jpg",
    },
    {
        id: "hanging-lights",
        title: "Hanging Lights",
        description: "Versatile hanging lights for kitchens, dining areas, and bedside accents. Sleek and contemporary.",
        image: "/hanging-lights/hanginglight1.jpg",
    },
    {
        id: "floor-lamps",
        title: "Floor Lamps",
        description: "Statement pieces that add height and ambient glow to your living spaces.",
        image: "/lamps/floor/floorlamp1.jpg",
        // Placeholder: Floor lamp
    },
    {
        id: "wall-lights",
        title: "Wall Lights",
        description: "Functional art for your walls. Sconces and fixtures that provide perfect accent lighting.",
        image: "/wall-lights/walllight1.jpg",
        // Placeholder: Wall light
    },
];

export default function CategoryShowcase() {
    return (
        <section className="py-24 bg-ivory">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">Our Collections</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
                </div>

                <div className="space-y-32">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } items-center gap-12 md:gap-24`}
                        >
                            {/* Image Section */}
                            <div
                                className="
    w-full
    md:w-1/2
    relative
    aspect-[4/5]
    md:aspect-auto
    md:h-[520px]
    lg:h-[580px]
    overflow-hidden
    group
    shadow-xl
  "
                            >

                                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10" />
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <span className="text-sage uppercase tracking-widest text-sm font-medium mb-2 block">
                                    0{index + 1} — Collection
                                </span>
                                <h3 className="text-4xl font-serif text-charcoal mb-6">
                                    {category.title}
                                </h3>
                                <p className="text-charcoal/70 text-lg leading-relaxed mb-8 font-light">
                                    {category.description}
                                </p>
                                <Link
                                    href={`/contact?enquiry=${category.id}`}
                                    className="inline-block border-b border-gold text-charcoal uppercase tracking-widest text-sm pb-1 hover:text-gold transition-colors"
                                >
                                    Enquire Now
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
