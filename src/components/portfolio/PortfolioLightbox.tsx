"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Minus, Plus, X } from "lucide-react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

type PortfolioLightboxProps = {
  src?: string;
  images?: string[];
  alt: string;
  enabled?: boolean;
  className?: string;
  children: ReactNode;
};

export default function PortfolioLightbox({
  src,
  images,
  alt,
  enabled = true,
  className,
  children,
}: PortfolioLightboxProps) {
  const allImages = images && images.length > 0 ? images : src ? [src] : [];
  const canOpen = enabled && allImages.length > 0;
  const isCarousel = allImages.length > 1;

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [mounted, setMounted] = useState(false);

  const dragStartRef = useRef<{
    mx: number;
    my: number;
    px: number;
    py: number;
  } | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [currentIndex]);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    resetZoom();
  }, [resetZoom]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : allImages.length - 1));
  }, [allImages.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i < allImages.length - 1 ? i + 1 : 0));
  }, [allImages.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (isCarousel && e.key === "ArrowLeft") prev();
      if (isCarousel && e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, isCarousel, prev, next, handleClose]);

  useEffect(() => {
    if (!isOpen) return;
    const el = imageContainerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.25 : 0.25;
      const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom + delta));
      setZoom(newZoom);
      if (newZoom <= MIN_ZOOM) setPan({ x: 0, y: 0 });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [isOpen, zoom]);

  const handleDoubleClick = () => {
    if (zoom > 1) {
      resetZoom();
    } else {
      setZoom(2);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      mx: e.clientX,
      my: e.clientY,
      px: pan.x,
      py: pan.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStartRef.current) return;
    setPan({
      x: dragStartRef.current.px + (e.clientX - dragStartRef.current.mx),
      y: dragStartRef.current.py + (e.clientY - dragStartRef.current.my),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    dragStartRef.current = null;
  };

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, z + 0.5));
  const zoomOut = () => {
    const nextZoom = Math.max(MIN_ZOOM, zoom - 0.5);
    setZoom(nextZoom);
    if (nextZoom <= MIN_ZOOM) setPan({ x: 0, y: 0 });
  };

  if (!canOpen) {
    return <div className={className}>{children}</div>;
  }

  const handleOpen = () => {
    setCurrentIndex(0);
    resetZoom();
    setIsOpen(true);
  };

  const overlay = isOpen ? (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} full view`}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-[var(--background)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--primary)] shadow-sm transition hover:bg-white"
          aria-label="Close full view"
        >
          <X className="h-5 w-5" />
        </button>

        {isCarousel && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">
            {currentIndex + 1} / {allImages.length}
          </div>
        )}

        <div
          ref={imageContainerRef}
          className="relative h-[70vh] w-full select-none overflow-hidden bg-[var(--background-alt)]"
        >
          <div
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "center center",
              transition: isDragging ? "none" : "transform 0.15s ease",
              cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
            }}
            className="relative h-full w-full"
            onDoubleClick={handleDoubleClick}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <Image
              key={allImages[currentIndex]}
              src={allImages[currentIndex]}
              alt={
                isCarousel
                  ? `${alt} — ${currentIndex + 1} of ${allImages.length}`
                  : alt
              }
              fill
              sizes="100vw"
              className="object-contain"
              draggable={false}
            />
          </div>

          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 shadow-sm">
            <button
              type="button"
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              className="flex h-7 w-7 items-center justify-center rounded-full text-[var(--primary)] transition hover:bg-black/10 disabled:opacity-30"
              aria-label="Zoom out"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="min-w-[2.75rem] text-center text-[11px] font-semibold text-[var(--primary)]">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              className="flex h-7 w-7 items-center justify-center rounded-full text-[var(--primary)] transition hover:bg-black/10 disabled:opacity-30"
              aria-label="Zoom in"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {isCarousel && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--primary)] shadow-sm transition hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--primary)] shadow-sm transition hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="flex justify-center gap-2 py-4">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-6 bg-[var(--primary)]"
                      : "w-2 bg-[var(--border-light)] hover:bg-[var(--muted-foreground)]"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={`group relative w-full cursor-zoom-in text-left ${className ?? ""}`}
        aria-label={`Open full view of ${alt}`}
      >
        {children}
        <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--primary)] opacity-0 shadow-sm transition group-hover:opacity-100">
          {isCarousel ? `View ${allImages.length} images` : "Click to expand"}
        </span>
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
