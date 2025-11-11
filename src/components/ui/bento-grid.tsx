"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    demo?: string;
    github?: string;
}

interface BentoGridProps {
    items: BentoItem[];
    onItemClick?: (item: BentoItem) => void;
}

function BentoGrid({ items, onItemClick }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    onClick={() => onItemClick?.(item)}
                    className={cn(
                        "group relative p-6 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
                        "border border-white/10 bg-white/5 backdrop-blur-sm",
                        "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-white/20",
                        "hover:-translate-y-1 will-change-transform",
                        item.colSpan || "col-span-1",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                        {
                            "shadow-[0_8px_30px_rgba(0,0,0,0.12)] -translate-y-1 border-white/20":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gradient-rose/5 via-transparent to-gradient-amber/5" />
                    </div>

                    <div className="relative flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-gradient-rose/20 to-gradient-amber/20 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                                {item.icon}
                            </div>
                            <span
                                className={cn(
                                    "text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm",
                                    "bg-gradient-to-r from-gradient-rose/20 to-gradient-amber/20 text-white border border-white/10",
                                    "transition-all duration-300 group-hover:border-white/20 group-hover:shadow-lg"
                                )}
                            >
                                {item.status || "Active"}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-white tracking-tight text-lg">
                                {item.title}
                                {item.meta && (
                                    <span className="ml-2 text-xs text-foreground/60 font-normal">
                                        {item.meta}
                                    </span>
                                )}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex flex-wrap gap-2 text-xs text-foreground/60">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full bg-gradient-to-r from-gradient-rose/10 to-gradient-amber/10 border border-white/10 backdrop-blur-sm transition-all duration-200 hover:border-white/20 text-white"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.cta || "Explore →"}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-gradient-rose/10 via-transparent to-gradient-amber/10 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export { BentoGrid };
