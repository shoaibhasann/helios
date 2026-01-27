"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-charcoal overflow-hidden text-ivory">
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
                        <span className="text-gold uppercase tracking-widest text-sm font-medium mb-4 block">
                            Get in Touch
                        </span>

                        <h1 className="text-5xl md:text-6xl font-serif text-ivory mb-8">
                            Visit Our Showroom
                        </h1>

                        <p className="text-ivory/80 font-light text-lg mb-12 max-w-md leading-relaxed">
                            We look forward to welcoming you. Please fill out the form for
                            inquiries or call us directly to schedule a consultation.
                        </p>

                        <div className="space-y-8">
                            {/* Address */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h3 className="font-serif text-xl mb-2 text-gold">Address</h3>
                                <p className="text-ivory/70 font-sans">
                                    123 Luxury Avenue
                                </p>
                                <p className="text-ivory/70 font-sans">
                                    Design District, NY 10012
                                </p>

                                {/* Google Maps Link */}
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=123+Luxury+Avenue+Design+District+NY+10012"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    inline-flex items-center gap-2 mt-3
                    text-sm font-light
                    text-ivory/60
                    hover:text-blue-400
                    transition-colors duration-300
                  "
                                >
                                    <FaMapMarkerAlt className="text-base" />
                                    View on Google Maps
                                </a>
                            </motion.div>

                            {/* Contact */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.55 }}
                            >
                                <h3 className="font-serif text-xl mb-2 text-gold">Contact</h3>

                                <p className="text-ivory/70 font-sans">
                                    +91 7818906577
                                </p>
                                <p className="text-ivory/70 font-sans">
                                    hi@iamshoaib.tech
                                </p>

                                {/* WhatsApp CTA */}
                                <a
                                    href="https://wa.me/917818906577"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    inline-flex items-center gap-2 mt-4
                    text-sm font-light
                    text-ivory/60
                    hover:text-green-400
                    transition-colors duration-300
                  "
                                >
                                    <FaWhatsapp className="text-lg" />
                                    Chat with us
                                </a>
                            </motion.div>

                            {/* Hours */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                <h3 className="font-serif text-xl mb-2 text-gold">Hours</h3>
                                <p className="text-ivory/70 font-sans">
                                    Mon - Sat: 10:00 AM - 7:00 PM
                                </p>
                                <p className="text-ivory/70 font-sans">
                                    Sun: By Appointment
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-white/10 shadow-sm md:max-h-[500px]"
                    >
                        <ContactForm />
                    </motion.div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
