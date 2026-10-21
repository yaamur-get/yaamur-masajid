import { useState, useEffect, useRef, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

type Achievement = {
  title: string;
  description: string;
  image: string;
};

export function AchievementsSlider({ items }: { items: Achievement[] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = items.length;

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % total), 2400);
    return () => clearInterval(t);
  }, [isPaused, total]);

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };
  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 60) next();
    if (diff < -60) prev();
  };

  return (
    <div
      className="relative w-full mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute -top-6 left-4 z-20 bg-white/90 px-3 py-1 rounded-full shadow text-xs text-gray-700">
        {current + 1}/{total}
      </div>

      <div
        className="overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="grid grid-cols-1 gap-6">
          {items.slice(current, current + 1).map((it) => (
            <Card key={current} className="border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-5/12 relative min-h-[280px] md:min-h-[420px] overflow-hidden flex items-center justify-center bg-gray-100">
                    <Image src={it.image} alt={it.title} fill className="object-contain" sizes="(min-width: 1024px) 35vw, 80vw" />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5" />
                  </div>

                  <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-center space-y-4 text-right">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{it.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{it.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button size="icon" variant="ghost" onClick={prev} className="w-9 h-9 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md">
          <ChevronRight className="w-5 h-5 text-[#08704C]" />
        </Button>

        <div className="flex justify-center gap-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-gradient-to-r from-[#08704C] to-[#00A186] shadow-md" : "w-2.5 bg-gray-300 hover:bg-[#08704C]/50 hover:w-6"}`}
              aria-label={`الشريحة ${i + 1}`}
            />
          ))}
        </div>

        <Button size="icon" variant="ghost" onClick={next} className="w-9 h-9 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md">
          <ChevronLeft className="w-5 h-5 text-[#08704C]" />
        </Button>
      </div>
    </div>
  );
}

export default AchievementsSlider;
