import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Landmark } from "lucide-react";
import { PageShell } from "@/components/PageShell";

type Status = "done" | "current" | "next";

// ===== بيانات الصفحة: عدّل هنا فقط =====
const name = "مسجد محمد الفوزان رحمه الله";
const pdf = "/designs/op2.pdf";

// صور الشريط: حط الصور في public/designs/fuzan/ واكتب أسماءها هنا
const images = [
   "/designs/fuz.png",
  "/designs/fuz1.png",
  "/designs/fuz2.png",
  "/designs/fuz3.png",
  "/designs/fuz4.png",

];

// الحالة: "done" = منجز (أخضر)، "current" = يحدث الآن (برتقالي)، "next" = لم يبدأ (رمادي)
const items: Array<{ label: string; status: Status }> = [
  { label: "العرض المبدئي", status: "done" },
  { label: "الاستلام الابتدائي", status: "done" },
  { label: "الاستلام النهائي", status: "done" },
  { label: "التسليم للوزارة", status: "done" },
  { label: "التشغيل المستمر", status: "current" },
];
// =======================================

// ألوان البنود: منجز = أخضر زيتي، يحدث الآن = برتقالي، لم يبدأ = رمادي
const itemStyle: Record<Status, string> = {
  done: "bg-[#7E9B2E] text-white",
  current: "bg-amber-500 text-white animate-pulse",
  next: "bg-gray-300 text-gray-600",
};

export default function Page() {
  const trackRef = useRef<HTMLDivElement>(null);

  function move(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
    const atStart = el.scrollLeft <= 5;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  }

  // يتحرك الشريط لحاله كل 4 ثواني
  useEffect(() => {
    if (images.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => move(1), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageShell title={name} description="مشروع في مرحلة التشغيل" Icon={Landmark}>
      <div className="mb-6">
        <a href="/projects-operation" className="text-white/90 hover:text-white font-semibold">→ الرجوع إلى مشاريع التشغيل</a>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8 space-y-8">
        {/* شريط الصور */}
        <div className="relative">
          <div ref={trackRef} dir="ltr" className="flex overflow-x-auto snap-x snap-mandatory rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {images.map((src, i) => (
              <div key={i} className="snap-start shrink-0 w-full md:w-1/2 p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`${name} ${i + 1}`} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover rounded-xl" />
              </div>
            ))}
          </div>
          {images.length > 1 && (
            <>
              <button type="button" aria-label="السابق" onClick={() => move(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow rounded-full p-2">
                <ChevronLeft className="w-5 h-5 text-[#08704C]" />
              </button>
              <button type="button" aria-label="التالي" onClick={() => move(1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow rounded-full p-2">
                <ChevronRight className="w-5 h-5 text-[#08704C]" />
              </button>
            </>
          )}
        </div>

        {/* البنود الفرعية: شريط واحد مقسّم بخطوط مائلة */}
        <div>
          <div className="text-gray-800 font-semibold mb-3">البنود الفرعية</div>
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 overflow-x-auto">
            <div className="flex w-max mx-auto rounded-full overflow-hidden shadow-lg">
              {items.map((s, i) => (
                <div
                  key={i}
                  className={`relative flex items-center justify-center text-center w-[90px] min-h-[64px] px-2 py-2 text-xs font-bold leading-tight ${itemStyle[s.status]}`}
                >
                  {i > 0 && <span className="absolute right-0 top-0 h-full w-[2px] bg-black/50 skew-x-[15deg]" />}
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
