"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-ivory overflow-hidden">
            <Header />

            {/* Header Spacer */}
            <div className="h-24" />

            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-sage uppercase tracking-widest text-sm font-medium mb-4 block">Get in Touch</span>
                        <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-8">Visit Our Showroom</h1>
                        <p className="text-charcoal/80 font-light text-lg mb-12 max-w-md leading-relaxed">
                            We look forward to welcoming you. Please fill out the form for inquiries or call us directly to schedule a consultation.
                        </p>

                        <div className="space-y-8">
                            {[
                                { title: "Address", lines: ["123 Luxury Avenue", "Design District, NY 10012"] },
                                { title: "Contact", lines: ["+91 7060478080", "hello@helioslighting.com"] },
                                { title: "Hours", lines: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sun: By Appointment"] }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + (i * 0.15) }}
                                >
                                    <h3 className="font-serif text-xl mb-2 text-charcoal">{item.title}</h3>
                                    {item.lines.map((line, j) => (
                                        <p key={j} className="text-charcoal/70 font-sans">{line}</p>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="bg-white/50 backdrop-blur-sm p-8 md:p-12 border border-charcoal/5 shadow-sm"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
