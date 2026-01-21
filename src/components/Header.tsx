"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    Menu,
    X,
    Home,
    Info,
    Phone,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
];

const mobileLinks = [
    { name: "Home", href: "/", icon: Home },
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

    // Header color logic (DESKTOP + HEADER ONLY)
    const isLightHeader =
        scrolled || pathname === "/about" || pathname === "/contact";

    const textColor = isLightHeader ? "text-charcoal" : "text-ivory";
    const borderColor = isLightHeader ? "border-charcoal" : "border-ivory";
    const hoverBg = isLightHeader
        ? "hover:bg-charcoal hover:text-ivory"
        : "hover:bg-ivory hover:text-charcoal";

    return (
        <>
            {/* ================= HEADER ================= */}
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-500",
                    isLightHeader
                        ? "bg-ivory/90 backdrop-blur-md shadow-sm py-3"
                        : "bg-black/20 backdrop-blur-sm py-5"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="z-50">
                        <h1
                            className={cn(
                                "font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors",
                                textColor
                            )}
                        >
                            HELIOS
                        </h1>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative text-sm font-medium uppercase tracking-widest transition-colors group",
                                    textColor
                                )}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className={cn(
                                "ml-4 px-6 py-2 text-sm uppercase tracking-wider border transition-all duration-300",
                                textColor,
                                borderColor,
                                hoverBg
                            )}
                        >
                            Visit Showroom
                        </Link>
                    </nav>

                    {/* Mobile Button */}
                    <button
                        className={cn("md:hidden z-50 transition-colors", textColor)}
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* ================= MOBILE OVERLAY (OUTSIDE HEADER) ================= */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Dark Overlay */}
                        <div
                            className="absolute inset-0 bg-black/40"
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
                bg-ivory
                flex flex-col items-center justify-center gap-8
              "
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-6 right-6 text-charcoal"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>

                            {/* Links */}
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
                      text-charcoal
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
