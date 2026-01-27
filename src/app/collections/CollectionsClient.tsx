"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Projects from "@/components/Projects";
import { FaWhatsapp } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const collections = [
    {
        id: "chandeliers",
        title: "Chandeliers",
        images: [
            "/chandeliers/chandelier2.jpg",
            "/chandeliers/chandelier3.jpg",
            "/chandeliers/chandelier4.jpg",
            "/chandeliers/chandelier5.jpg",
        ],
    },
    {
        id: "pendant-lights",
        title: "Pendant Lights",
        images: [
            "/pendant-lights/pendantlight2.jpg",
            "/pendant-lights/pendantlight3.jpg",
            "/pendant-lights/pendantlight4.jpg",
            "/pendant-lights/pendantlight5.jpg",
        ],
    },
    {
        id: "wall-lamps",
        title: "Wall Lamps",
        images: [
            "/lamps/wall/walllamp2.jpg",
            "/lamps/wall/walllamp3.jpg",
            "/lamps/wall/walllamp4.jpg",
            "/lamps/wall/walllamp5.jpg",
        ],
    },
    {
        id: "hanging-lamps",
        title: "Hanging Lamps",
        images: [
            "/lamps/hanging/hanginglamp2.jpg",
            "/lamps/hanging/hanginglamp3.jpg",
            "/lamps/hanging/hanginglamp4.jpg",
            "/lamps/hanging/hanginglamp5.jpg",
        ],
    },
    {
        id: "table-lamps",
        title: "Table Lamps",
        images: [
            "/lamps/table/tablelamp2.jpg",
            "/lamps/table/tablelamp3.jpg",
            "/lamps/table/tablelamp4.jpg",
            "/lamps/table/tablelamp5.jpg",
        ],
    },
    {
        id: "floor-lamps",
        title: "Floor Lamps",
        images: [
            "/lamps/floor/floorlamp2.jpg",
            "/lamps/floor/floorlamp3.jpg",
            "/lamps/floor/floorlamp4.jpg",
            "/lamps/floor/floorlamp5.jpg",
        ],
    },
];

export default function CollectionsClient() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const category = searchParams.get("category");

        if (category) {
            const el = document.getElementById(category);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 300);
            }
        }
    }, [searchParams]);

    return (
        <main className="min-h-screen bg-charcoal text-ivory overflow-hidden">
            <Header />

            <div className="h-24" />

            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
                {collections.map((collection, idx) => (
                    <section key={idx} id={collection.id}>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-5xl font-serif mb-6 text-center md:text-left"
                        >
                            {collection.title}
                        </motion.h2>

                        <div className="w-full md:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent md:from-gold md:to-transparent mb-12" />

                        <div className="hidden md:grid grid-cols-4 gap-10">
                            {collection.images.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <Image
                                            src={img}
                                            alt={collection.title}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                                        />
                                    </div>

                                    <a
                                        href="https://wa.me/917818906577"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-ivory/70 hover:text-green-400 transition-colors"
                                    >
                                        <FaWhatsapp className="text-lg" />
                                        Enquire Now
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}
            </section>

            <Projects />
            <Footer />
        </main>
    );
}
