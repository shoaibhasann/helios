"use client";

import { useState } from "react";
// import emailjs from "@emailjs/browser"; // Uncomment when keys are available

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call for demo purposes
        // implement emailjs.sendForm(...) here
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors"
                    placeholder="+1 (555) 000-0000"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors"
                    placeholder="I am interested in..."
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full md:w-auto px-10 py-4 bg-charcoal text-ivory uppercase tracking-widest text-sm hover:bg-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "submitting" ? "Sending..." : status === "success" ? "Enquiry Sent" : "Send Enquiry"}
            </button>

            {status === "success" && (
                <p className="text-green-600 text-sm mt-4">Thank you! We will contact you shortly.</p>
            )}
        </form>
    );
}
