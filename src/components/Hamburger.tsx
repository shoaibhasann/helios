export default function Hamburger({ open }: { open: boolean }) {
    return (
        <div className="relative w-6 h-6 flex items-center justify-center">
            <span
                className={`absolute h-[2px] w-6 bg-ivory transition-all duration-300 ${open ? "rotate-45" : "-translate-y-2"
                    }`}
            />
            <span
                className={`absolute h-[2px] w-6 bg-ivory transition-all duration-300 ${open ? "opacity-0" : ""
                    }`}
            />
            <span
                className={`absolute h-[2px] w-6 bg-ivory transition-all duration-300 ${open ? "-rotate-45" : "translate-y-2"
                    }`}
            />
        </div>
    );
}
