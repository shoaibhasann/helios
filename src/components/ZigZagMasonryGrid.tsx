"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type GridImage = {
    src: string;
    alt?: string;
};

interface ZigZagMasonryGridProps {
    images: GridImage[];
}

export default function ZigZagMasonryGrid({
    images,
}: ZigZagMasonryGridProps) {
    const [shuffled, setShuffled] = useState<GridImage[]>([]);

    useEffect(() => {
        const copy = [...images];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        setShuffled(copy);
    }, [images]);

    return (
        <section className="w-full py-16">
            <div
                className="
          mx-auto max-w-7xl
          columns-2
          md:columns-3
          lg:columns-4
          gap-6
        "
            >
                {shuffled.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: index * 0.04,
                        }}
                        className="
              mb-6
              break-inside-avoid
              rounded-2xl
              overflow-hidden
              bg-ivory
              shadow-sm
              hover:shadow-md
              transition-shadow
            "
                    >
                        <Image
                            src={img.src}
                            alt={img.alt || "Luxury product"}
                            width={600}
                            height={800}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
