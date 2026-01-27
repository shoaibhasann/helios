"use client";

import Link from "next/link";
import clsx from "clsx";

type LuxuryCTAProps = {
    text: string;
    href: string;
    borderColor?: string;
    textColor?: string;
    bgColor?: string;
    className?: string;
};

export default function LuxuryCTA({
    text,
    href,
    borderColor = "bg-gold",
    textColor = "text-ivory",
    bgColor = "bg-transparent",
    className,
}: LuxuryCTAProps) {
    return (
        <Link
            href={href}
            className={clsx(
                "group relative inline-flex items-center max-w-xs justify-center",
                "px-12 py-4 uppercase tracking-widest text-sm",
                textColor,
                bgColor,
                className
            )}
        >
            <span className="relative z-10">{text}</span>

            {/* Border Layer */}
            <span className="absolute inset-0 pointer-events-none">
                {/* TOP LEFT CORNER */}
                <span
                    className={clsx(
                        "absolute top-0 left-0 h-px w-6 transition-all duration-500 ease-out group-hover:w-full",
                        borderColor
                    )}
                />
                <span
                    className={clsx(
                        "absolute top-0 left-0 w-px h-6 transition-all duration-500 ease-out group-hover:h-full",
                        borderColor
                    )}
                />

                {/* BOTTOM RIGHT CORNER */}
                <span
                    className={clsx(
                        "absolute bottom-0 right-0 h-px w-6 transition-all duration-500 ease-out delay-150 group-hover:w-full",
                        borderColor
                    )}
                />
                <span
                    className={clsx(
                        "absolute bottom-0 right-0 w-px h-6 transition-all duration-500 ease-out delay-150 group-hover:h-full",
                        borderColor
                    )}
                />
            </span>
        </Link>
    );
}
