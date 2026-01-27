"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LuxuryCTA from "@/components/LuxuryCTA";

const categories = [
    {
        id: "chandeliers",
        title: "Chandeliers",
        description:
            "Grand centerpieces crafted to define luxury interiors with crystal brilliance and sculptural form.",
        image: "/chandeliers/chandelier1.jpg",
    },
    {
        id: "pendant-lights",
        title: "Pendant Lights",
        description:
            "Elegant hanging lights designed for dining spaces, kitchens, and refined modern interiors.",
        image: "/pendant-lights/pendantlight1.jpg",
    },
    {
        id: "floor-lamps",
        title: "Floor Lamps",
        description:
            "Architectural floor lamps that bring warmth, height, and ambient balance to living spaces.",
        image: "/lamps/floor/floorlamp1.jpg",
    },
    {
        id: "wall-lamps",
        title: "Wall Lamps",
        description:
            "Wall-mounted lighting solutions that blend functional illumination with artistic presence.",
        image: "/lamps/wall/walllamp1.jpg",
    },
    {
        id: "lanterns",
        title: "Lanterns",
        description:
            "Statement lantern lighting designed to create dramatic ambience through bold illumination and refined craftsmanship.",
        image: "/lanterns/lantern1.jpg",
    },
    {
        id: "table-lamps",
        title: "Table Lamps",
        description:
            "Refined table lamps crafted to bring intimate illumination and sculptural elegance to bedside and accent spaces.",
        image: "/lamps/table/tablelamp1.jpg",
    },
];



export default function CategoryShowcase() {
    return (
        <section className="relative py-28 bg-charcoal">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Title */}
                <div className="text-center mb-28">
                    <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-6">
                        Signature Lighting Collections
                    </h2>
                    <div className="w-28 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
                </div>

                <div className="space-y-32">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* CARD */}
                            <div
                                className={`
                  grid grid-cols-1 md:grid-cols-2
                  bg-charcoal-soft
                  border border-white/5
                  min-h-[520px] md:h-[520px]
                `}
                            >
                                {/* IMAGE BLOCK */}
                                <div
                                    className={`
                    relative
                    h-[260px] md:h-full
                    overflow-hidden
                    ${index % 2 !== 0 ? "md:order-2" : ""}
                  `}
                                >
                                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-60 transition duration-700 z-10" />
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-[900ms] ease-out hover:scale-105"
                                    />
                                </div>

                                {/* CONTENT BLOCK */}
                                <div
                                    className={`
                    flex flex-col justify-center
                    px-6 py-12 md:px-14
                    ${index % 2 !== 0 ? "md:order-1" : ""}
                  `}
                                >
                                    <span className="uppercase tracking-[0.35em] text-xs text-sage mb-6">
                                        0{index + 1} — Collection
                                    </span>

                                    <h3 className="text-4xl font-serif text-ivory mb-6">
                                        {category.title}
                                    </h3>

                                    <p className="text-ivory/70 text-lg leading-relaxed mb-10 max-w-md">
                                        {category.description}
                                    </p>

                                    <LuxuryCTA
                                        text="Discover More"
                                        href={`/collections?category=${category.id}`}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
