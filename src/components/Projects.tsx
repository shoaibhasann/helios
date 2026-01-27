"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LuxuryCTA from "./LuxuryCTA";

export default function Projects() {
    return (
        <section className="py-28 bg-charcoal text-ivory px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-serif mb-6 text-center"
                >
                    Lighting Beyond Products
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto text-center text-lg font-light leading-relaxed text-ivory/80 mb-20"
                >
                    We design and execute complete lighting solutions for homes, offices,
                    and corporate environments — transforming spaces through thoughtful
                    illumination, not just fixtures.
                </motion.p>

                {/* Capability Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Residential */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="border border-white/10 hover:border-gold/40 transition-colors duration-500 overflow-hidden"
                    >
                        <div className="relative h-56 overflow-hidden">
                            <Image
                                src="/projects/project1.jpg"
                                alt="Residential Lighting Project"
                                fill
                                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>

                        <div className="p-8">
                            <h3 className="font-serif text-xl mb-4 text-gold">
                                Residential Projects
                            </h3>
                            <p className="text-sm text-ivory/70 leading-relaxed">
                                Villas, apartments, and private homes crafted with warmth,
                                balance, and personality.
                            </p>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-center mb-5"
                        >
                            <LuxuryCTA
                                text="Discuss Your Project"
                                href="/contact"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Corporate */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="border border-white/10 hover:border-gold/40 transition-colors duration-500 overflow-hidden"
                    >
                        <div className="relative h-56 overflow-hidden">
                            <Image
                                src="/projects/project2.jpg"
                                alt="Corporate Lighting Project"
                                fill
                                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>

                        <div className="p-8">
                            <h3 className="font-serif text-xl mb-4 text-gold">
                                Commercial Projects
                            </h3>
                            <p className="text-sm text-ivory/70 leading-relaxed">
                                Offices, showrooms, and workspaces designed for clarity,
                                comfort, and brand presence.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-center mb-5"
                        >
                            <LuxuryCTA
                                text="Discuss Your Project"
                                href="/contact"
                            />
                        </motion.div>
                    </motion.div>

                    {/* End-to-End Execution */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="border border-white/10 hover:border-gold/40 transition-colors duration-500 overflow-hidden"
                    >
                        <div className="relative h-56 overflow-hidden">
                            <Image
                                src="/projects/project3.jpg"
                                alt="End-to-End Lighting Execution"
                                fill
                                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>

                        <div className="p-8">
                            <h3 className="font-serif text-xl mb-4 text-gold">
                                End-to-End Execution
                            </h3>
                            <p className="text-sm text-ivory/70 leading-relaxed">
                                From concept and lighting design to installation and on-site
                                support.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-center mb-5"
                        >
                            <LuxuryCTA
                                text="Discuss Your Project"
                                href="/contact"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
