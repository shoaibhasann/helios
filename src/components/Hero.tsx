"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

            {/* Background Image */}
            <motion.div
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/hero/hero1.jpg"
                    alt="Luxury interior lighting showroom with premium chandeliers"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Premium Cinematic Overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6))]" />
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center py-20 px-6">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory leading-tight mb-6 drop-shadow-[0_12px_35px_rgba(0,0,0,0.45)]"
                >
                    The Art of <br />
                    <span className="italic text-gold">Lighting</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-slate-200 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Refined collections of crafted chandeliers, lanterns, and modern fixtures designed to enhance the beauty and balance of your space.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <Link
                        href="/collections"
                        className="inline-block px-10 py-4 bg-ivory text-charcoal font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-gold hover:text-ivory hover:scale-105"
                    >
                        Explore Collections
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
