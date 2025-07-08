import React, { useState, useRef } from "react";
import Image from "next/image";
import { withBasePath } from "@/utils/withBasePath";

interface ImageCarouselProps {
    folder: string;
    images: string[];
    altPrefix?: string;
    mainImageClassName?: string;
    thumbClassName?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
    folder,
    images,
    altPrefix = "Screenshot",
    mainImageClassName = "rounded max-h-80 object-contain",
    thumbClassName = "object-cover",
}) => {
    const [current, setCurrent] = useState(0);
    const goLeft = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const goRight = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    // Swipe support
    const touchStartX = useRef<number | null>(null);
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(deltaX) > 40) {
            if (deltaX > 0) {
                goLeft();
            } else {
                goRight();
            }
        }
        touchStartX.current = null;
    };

    return (
        <div
            className="relative flex flex-col items-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <button
                onClick={goLeft}
                aria-label="Previous"
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-slate-700 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-slate-600 z-10"
            >
                &#8592;
            </button>
            <Image
                src={withBasePath(`/${folder}/${images[current]}`)}
                alt={`${altPrefix} ${current + 1}`}
                width={500}
                height={300}
                className={mainImageClassName}
            />
            <button
                onClick={goRight}
                aria-label="Next"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-slate-700 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-slate-600 z-10"
            >
                &#8594;
            </button>
            {/* Thumbnail bar*/}
            <div className="flex gap-2 mt-4 justify-center">
                {images.map((img, idx) => (
                    <button
                        key={img + "-thumb"}
                        onClick={() => setCurrent(idx)}
                        className={`border-2 rounded overflow-hidden focus:outline-none transition-all duration-200 ${idx === current
                            ? "border-blue-600 dark:border-blue-500"
                            : "border-transparent"
                            } focus-visible:ring-2 focus-visible:ring-blue-400 dark:focus-visible:ring-blue-300`}
                        aria-label={`Select image ${idx + 1}`}
                        tabIndex={0}
                    >
                        <Image
                            src={withBasePath(`/${folder}/${img}`)}
                            alt={`Thumbnail ${idx + 1}`}
                            width={60}
                            height={36}
                            className={thumbClassName}
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
