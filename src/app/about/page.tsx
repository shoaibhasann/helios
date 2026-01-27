"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-charcoal overflow-hidden text-ivory">
            <Header />

            {/* Header Spacer */}
            <div className="h-24" />

            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-serif text-ivory mb-12"
                >
                    Our Story
                </motion.h1>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-square">
                        {/* Image Mask Reveal Effect */}
                        <motion.div
                            initial={{ width: "100%" }}
                            whileInView={{ width: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                            className="absolute inset-0 bg-charcoal z-20 pointer-events-none"
                        />
                        <motion.div
                            initial={{ scale: 1.1, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="/aboutus.jpg"
                                alt="Craftsmanship"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-serif text-gold">Legacy of Light</h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-ivory/80 font-sans leading-relaxed text-lg font-light"
                        >
                            For over two decades, Helios has been dedicated to the art of illumination. We believe that lighting is not just a functional necessity but the soul of a room.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-ivory/80 font-sans leading-relaxed text-lg font-light"
                        >
                            Our collection is curated from the finest artisans around the globe, focusing on materials that age beautifully and designs that stand the test of time. From hand-blown glass to precision-milled brass, every piece tells a story of craftsmanship.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-charcoal text-ivory px-6 md:px-12">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-serif mb-8"
                    >
                        The Experience
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl mx-auto font-light leading-relaxed mb-12 text-ivory/80"
                    >
                        We invite you to visit our showroom, a sensory journey where you can touch the materials, see the warmth of the light, and visualize how these pieces will transform your home.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { title: "Curated Selection", desc: "Only the finest designs make it to our floor." },
                            { title: "Expert Consultation", desc: "Our lighting designers are here to guide you." },
                            { title: "Bespoke Options", desc: "Custom finishes and modifications available." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 + (i * 0.2) }}
                                className="p-6 border border-white/10 hover:bg-white/5 transition-colors duration-500"
                            >
                                <h3 className="font-serif text-xl mb-4 text-gold">{item.title}</h3>
                                <p className="text-sm text-ivory/60">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
