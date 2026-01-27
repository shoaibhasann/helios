import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-charcoal border-t border-white/5 text-ivory px-6 md:px-12 pt-20 pb-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="md:col-span-2">
                    <h2 className="font-serif text-gold text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                        HELIOS
                    </h2>
                    <p className="text-ivory/80 max-w-sm font-sans text-sm leading-relaxed">
                        Illuminating spaces with timeless elegance. Visit our showroom to
                        experience the warmth and craftsmanship of our premium lighting
                        collection.
                    </p>

                    <p className="max-w-sm font-sans text-sm leading-relaxed mt-6 text-gold">Follow Us</p>

                    {/* Socials */}
                    <div className="flex items-center gap-4 my-2">
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="text-ivory/80 hover:text-gold transition-colors"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="text-ivory/80 hover:text-gold transition-colors"
                        >
                            <Facebook size={18} />
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="text-ivory/80 hover:text-gold transition-colors"
                        >
                            <Twitter size={18} />
                        </a>
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="text-ivory/80 hover:text-gold transition-colors"
                        >
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>

                {/* Visit */}
                <div>
                    <h3 className="font-serif text-lg mb-4 text-gold">Visit Us</h3>
                    <address className="not-italic text-ivory/80 text-sm space-y-2 font-sans">
                        <p>123 Luxury Avenue</p>
                        <p>Design District, NY 10012</p>
                        <p className="pt-2">+91 7818906577</p>
                        <p>hi@iamshoaib.tech</p>
                    </address>
                </div>

                {/* Explore */}
                <div>
                    <h3 className="font-serif text-lg mb-4 text-gold">Explore</h3>
                    <ul className="space-y-2 text-sm text-ivory/80 font-sans">
                        <li>
                            <Link href="/" className="hover:text-gold transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gold transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gold transition-colors">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-ivory/50 font-sans">
                <p>
                    &copy; {new Date().getFullYear()} Helios Lighting. All rights reserved.
                </p>
                <a href="https://iamshoaib.tech" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 hover:underline">Made with ❤️ by Shoaib.</a>
            </div>
        </footer>
    );
}
