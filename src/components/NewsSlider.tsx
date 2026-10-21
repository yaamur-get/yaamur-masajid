import { useState, useEffect, useRef, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Calendar, ArrowLeft } from "lucide-react";
import { ClientOnly } from "@/components/ClientOnly";
import Image from "next/image";

export const sliderNewsItems = [
  {
    id: 1,
    title: "تجربة نوعية",
    description:
      "نفّذت #جمعية_يعمر للعناية بالمساجد بالتعاون مع @SaudiRedCrescent محاكاةً واقعية لحالة توقف قلب داخل مقرها بالدمام، نفّذها فريق يعمر بعد تلقيه التدريب الإسعافي.",
    date: "2025-11-05",
    image: "/hart.jpg",
    moreUrl: "https://x.com/Yaamurorg/status/1986043268635750642"
  },
  {
    id: 2,
    title: "يعمر والتميمي للطاقة.",
    description:
      "وقّعت جمعية يعمر للعناية بالمساجد اتفاقية تعاون مع شركة التميمي للطاقة، تهدف إلى التعاون في مجالات دعم واستدامة مشاريع العناية ببيوت الله.",
    date: "2025-10-28",
    image: "/tammamy.jpg",
    moreUrl: "https://x.com/Yaamurorg/status/1980949618113343675"
  },
  {
    id: 3,
    title: "بروحٍ واحدة وولاءٍ متجدد ",
    description:
      "احتفى موظفو #جمعية_يعمر للعناية بالمساجد باليوم الوطني السعودي الـ95، تجديدًا للعهد والوفاء، وفخرًا بالمسيرة المباركة التي وحّدها المؤسس.",
    date: "2025-10-25",
    image: "/dayksa.jpg",
    // ضع هنا رابط التغريدة أو موضوع تويتر تريد فتحه عند الضغط "اقرأ المزيد"
    moreUrl: "https://x.com/Yaamurorg/status/1970805024243474541"
  },
  {
    id: 4,
    title: "إفتتاح المقر الجديد",
    description:
      "دشن مدير عام فرع وزارة الشؤون الإسلامية والدعوة والإرشاد بالمنطقة الشرقية، فضيلة الشيخ/ عمر بن فيصل الدويش مقر جمعية يعمر للعناية بالمساجد في المنطقة الشرقية وذلك بحضور رئيس مجلس إدارة الجمعية الدكتور صالح الرشيد وعدد من الداعمين والمهتمين بالعمل الخيري والمجتمعي.",
    date: "2025-10-20",
    image: "/yaamur_go.jpg",
    moreUrl: "https://x.com/Yaamurorg/status/1965356817011122643"
  }
];

// Reuse the same data in this component
const newsItems = sliderNewsItems;

// Format date as DD/MM/YYYY using Gregorian calendar and Latin numerals
function formatDMY(isoDate: string) {
  const d = new Date(isoDate);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export function NewsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 1; // always show one full-width card
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // itemsPerSlide is fixed to 1 to show a single full-width card per slide

  const totalSlides = Math.ceil(newsItems.length / itemsPerSlide);

  useEffect(() => {
    setCurrentSlide((prev) => {
      const maxIndex = totalSlides - 1;
      return prev > maxIndex ? maxIndex : prev;
    });
  }, [itemsPerSlide, totalSlides]);

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 1900);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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

    if (diff > 60) handleNext();
    if (diff < -60) handlePrevious();
  };

  const startIndex = currentSlide * itemsPerSlide;
  const visibleItems = newsItems.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div
      className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute -top-8 left-4 z-20 bg-white/90 px-3 py-1 rounded-full shadow text-xs text-gray-700">
        {currentSlide + 1}/{totalSlides}
      </div>

      <div
        className="overflow-hidden rounded-3xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="grid gap-6 grid-cols-1">
          {visibleItems.map((news, index) => (
            <Card
              key={news.id}
              className="border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-3xl min-h-[320px] md:min-h-[360px]"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-6/12 relative min-h-[220px] md:min-h-[360px] overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-black/5 to-black/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      
                    </div>
                  </div>

                  <div className="md:w-6/12 p-6 md:p-8 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-2 text-[#08704C]">
                      <Calendar className="w-4 h-4" />
                      <ClientOnly>
                        <span className="text-base md:text-lg font-semibold" dir="ltr">
                          {formatDMY(news.date)}
                        </span>
                      </ClientOnly>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                      {news.description}
                    </p>

                    {news.moreUrl ? (
                      /^https?:\/\//i.test(news.moreUrl) ? (
                        <a
                          href={news.moreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-6"
                        >
                          <Button
                            variant="ghost"
                            className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-base md:text-lg font-bold group/btn transition-all duration-300"
                          >
                            <span className="group-hover/btn:mr-2 transition-all duration-300">
                              اقرأ المزيد
                            </span>
                            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
                          </Button>
                        </a>
                      ) : (
                        <Link href={news.moreUrl} className="inline-block mt-6">
                          <Button
                            variant="ghost"
                            className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-base md:text-lg font-bold group/btn transition-all duration-300"
                          >
                            <span className="group-hover/btn:mr-2 transition-all duration-300">
                              اقرأ المزيد
                            </span>
                            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
                          </Button>
                        </Link>
                      )
                    ) : (
                      <Link href={`/news/${news.id}`} className="inline-block mt-6">
                        <Button
                          variant="ghost"
                          className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-base md:text-lg font-bold group/btn transition-all duration-300"
                        >
                          <span className="group-hover/btn:mr-2 transition-all duration-300">
                            اقرأ المزيد
                          </span>
                          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          size="icon"
          variant="ghost"
          onClick={handlePrevious}
          className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
          aria-label="السابق"
        >
          <ChevronRight className="w-5 h-5 text-[#08704C]" />
        </Button>

        <div className="flex justify-center gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-10 bg-gradient-to-r from-[#08704C] to-[#00A186] shadow-md"
                  : "w-2.5 bg-gray-300 hover:bg-[#08704C]/50 hover:w-6"
              }`}
              aria-label={`الشريحة ${index + 1}`}
            />
          ))}
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={handleNext}
          className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
          aria-label="التالي"
        >
          <ChevronLeft className="w-5 h-5 text-[#08704C]" />
        </Button>
      </div>
    </div>
  );
}
