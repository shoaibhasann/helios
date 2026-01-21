"use client";

import ZigZagMasonryGrid from "./ZigZagMasonryGrid";

const images = [
    { src: "/products/p1.jpg" },
    { src: "/products/p2.jpg" },
    { src: "/products/p3.jpg" },
    { src: "/products/p4.jpg" },
    { src: "/products/p5.jpg" },
    { src: "/products/p6.jpg" },
    { src: "/products/p7.jpg" },
    { src: "/products/p8.jpg" },
    { src: "/products/p9.jpg" },
    { src: "/products/p10.jpg" },
    { src: "/products/p11.jpg" },
    { src: "/products/p13.jpg" },
    { src: "/products/p14.jpg" },
    { src: "/products/p15.jpg" },
    { src: "/products/p16.jpg" },
];

export default function Collections() {
    return (
        <section className="w-full py-16">
            <ZigZagMasonryGrid images={images} />
        </section>
    );
}
