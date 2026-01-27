"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, Info, Phone, Store } from "lucide-react";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
];

const mobileLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Collections", href: "/collections", icon: Store },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Contact Us", href: "/contact", icon: Phone },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerBg =
        scrolled || pathname === "/about" || pathname === "/contact"
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5";

    return (
        <>
            {/* ================= HEADER ================= */}
            {
                !mobileMenuOpen && (
                    <header
                        className={cn(
                            "fixed top-0 left-0 right-0 z-[1000] px-6 md:px-12 transition-all duration-500",
                            headerBg
                        )}
                    >
                        <div className="max-w-7xl mx-auto flex items-center justify-between">
                            {/* Logo */}
                            <Link href="/" className="z-[1001]">


                                <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-ivory">
                                    HELIOS
                                </h1>

                            </Link>

                            {/* Desktop Nav */}
                            <nav className="hidden md:flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="relative text-sm font-medium uppercase tracking-widest text-ivory group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                ))}

                                <Link
                                    href="/contact"
                                    className="ml-4 px-6 py-2 text-sm uppercase tracking-wider border border-white/20 text-ivory hover:text-gold transition-colors"
                                >
                                    Visit Showroom
                                </Link>
                            </nav>
                        </div>
                    </header>
                )
            }

            {/* Mobile Hamburger */}
            <button
                aria-label="Toggle menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="
              fixed 
              top-4
              right-6
              md:hidden
              z-[1001]
            "
            >
                <Hamburger open={mobileMenuOpen} />
            </button>

            {/* ================= MOBILE MENU ================= */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[900] md:hidden pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Sidebar */}
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="
                absolute right-0 top-0 h-full w-[80%]
                bg-charcoal border-l border-white/10
                flex flex-col items-center justify-center gap-8
                pointer-events-auto
              "
                        >
                            {mobileLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="
                      flex items-center gap-4
                      text-2xl font-serif
                      text-ivory
                      hover:text-gold
                      transition-colors
                    "
                                    >
                                        <Icon size={26} strokeWidth={1.5} />
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
