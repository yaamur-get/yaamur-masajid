import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink, Landmark, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";

type Status = "done" | "current" | "next";
type View = "outside" | "inside";

// ===== بيانات الصفحة: عدّل هنا فقط =====
const name = "جامع الضاحية - حي الضاحية  ";
const tag = "مرحلة التصاميم";
const map = "https://drive.google.com/drive/folders/1Jwmxz0DwUmQzlezt01yZNRlSM7PVE1-X?usp=sharing"

// صور الشريط (داخل public/designs/momneen):
// "outside" = من الخارج (تظهر أول ما تفتح الصفحة)، "inside" = من الداخل
// لنقل صورة من قسم لقسم: انقل سطرها. إذا قائمة "inside" فاضية يختفي زر "من الداخل"
const images: Record<View, string[]> = {
  outside: [
    "/designs/dha1.png",
    "/designs/dha2.png",
    "/designs/dha3.png",
    "/designs/dha4.png",
    "/designs/dha5.png",
    "/designs/dha6.png",
  ],
  inside: [
     "/designs/dhaa1.png",
    "/designs/dhaa2.png",
    "/designs/dhaa3.png",
    "/designs/dhaa4.png",
    "/designs/dhaa5.png",
  ],
};

const viewLabels: Record<View, string> = { outside: "من الخارج", inside: "من الداخل" };

// الحالة: "done" = منجز (أخضر)، "current" = يحدث الآن (برتقالي)، "next" = لم يبدأ (رمادي)
const items: Array<{ label: string; status: Status }> = [
  { label: "توقيع العقود مع التبرع", status: "done" },
  { label: "تعبئة النماذج", status: "done" },
  { label: "التصاميم", status: "done" },
  { label: "إصدار الرخص", status: "done" },
  { label: "تسعير المقاولين", status: "done" },
  { label: "تحليل العروض", status: "current" },
  { label: "التعاقد مع المقاول", status: "next" },
];

// نسبة الإنجاز: تنحسب تلقائيًا من البنود المنجزة. إذا عندك رقم رسمي اكتبه بدلها، مثل: const progress = 31;
const progress = Math.round((items.filter((s) => s.status === "done").length / items.length) * 100);
// =======================================

// ألوان البنود بألوان يعمر: منجز = أخضر يعمر، يحدث الآن = ذهبي، لم يبدأ = رمادي فاتح
const itemStyle: Record<Status, string> = {
  done: "bg-[#08704C] text-white",
  current: "bg-[#e6ca8d] text-[#003824] animate-pulse",
  next: "bg-[#e3ebe7] text-[#5f7a6e]",
};

// عدّاد نصف دائرة: يمتلي بهدوء من 0 إلى النسبة لما تفتح الصفحة
function Gauge({ value }: { value: number }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setShown(value), 200);
    return () => clearTimeout(t);
  }, [value]);
  const len = Math.PI * 40;
  return (
    <svg viewBox="0 0 100 56" className="w-full max-w-sm mx-auto">
      <path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="#e5e7eb" strokeWidth="9" strokeLinecap="round" />
      <path
        d="M10,50 A40,40 0 0,1 90,50"
        fill="none"
        stroke="url(#gaugeGrad)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray={len}
        strokeDashoffset={len * (1 - shown / 100)}
        style={{ transition: "stroke-dashoffset 2s ease-out" }}
      />
      <defs>
        <linearGradient id="gaugeGrad" x1="0" x2="1">
          <stop offset="0" stopColor="#00A186" />
          <stop offset="1" stopColor="#08704C" />
        </linearGradient>
      </defs>
      <text x="50" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#08704C">
        {value}%
      </text>
    </svg>
  );
}

export default function Page() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<View>("outside");
  const shownImages = images[view];
  const views = (Object.keys(images) as View[]).filter((v) => images[v].length > 0);

  function move(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
    const atStart = el.scrollLeft <= 5;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  }

  // يتحرك الشريط لحاله كل 4 ثواني، ولما تغيّر من الخارج/من الداخل يرجع لأول صورة
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    if (shownImages.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => move(1), 4000);
    return () => clearInterval(timer);
  }, [view]);

  return (
    <PageShell title={name} description="مشروع في مرحلة التصاميم" Icon={Landmark}>
      <div className="mb-6">
        <Link href="/projects-design" className="text-white/90 hover:text-white font-semibold">→ الرجوع إلى مشاريع التصاميم</Link>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8 space-y-8">
        {/* اللوكيشن */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl bg-gradient-to-br from-[#08704C] to-[#003824] text-white p-5">
          <div>
            <span className="inline-block rounded-full bg-[#e6ca8d] text-[#003824] text-xs font-bold px-3 py-1">{tag}</span>
            <h2 className="mt-2 text-xl md:text-2xl font-black">{name}</h2>
          </div>
          {/* من الخارج / من الداخل */}
          {views.length > 1 && (
            <div className="inline-flex self-start sm:self-auto rounded-full bg-white/15 p-1">
              {views.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setView(v)}
                  aria-pressed={view === v}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${view === v ? "bg-white text-[#08704C] shadow" : "text-white/90 hover:text-white"}`}
                >
                  {viewLabels[v]}
                </button>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-3">
            <a
              href={map}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#e6ca8d] text-[#003824] font-bold px-5 py-2.5 shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all"
            >
              <MapPin className="w-5 h-5" />
              موقع المسجد
            </a>
           
          </div>
        </div>

        {/* شريط الصور */}
        <div className="relative">
          <div ref={trackRef} dir="ltr" className="flex overflow-x-auto snap-x snap-mandatory rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {shownImages.map((src, i) => (
              <div key={`${view}-${i}`} className="snap-start shrink-0 w-full md:w-1/2 p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`${name} - ${viewLabels[view]} ${i + 1}`} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover rounded-xl" />
              </div>
            ))}
          </div>
          {shownImages.length > 1 && (
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

        {/* البنود الفرعية + نسبة الإنجاز في سطر واحد */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-stretch">
        <div className="flex flex-col">
          <div className="text-gray-800 font-semibold mb-3">البنود الفرعية</div>
          <div className="flex-1 flex items-center bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 overflow-x-auto">
            {/* كل بند شكل مائل بنفس الزاوية، وبينهم فاصل أبيض مائل */}
            <div className="flex w-max mx-auto rounded-full overflow-hidden shadow-lg bg-white">
              {items.map((s, i) => (
                <div
                  key={i}
                  style={{
                    // أول وآخر بند طرفهم الخارجي مستقيم عشان يركب على الحواف الدائرية
                    clipPath: `polygon(${i === items.length - 1 ? "0" : "14px"} 0, 100% 0, ${i === 0 ? "100%" : "calc(100% - 14px)"} 100%, 0 100%)`,
                    marginLeft: i < items.length - 1 ? -11 : 0,
                  }}
                  className={`relative flex items-center justify-center text-center w-[104px] min-h-[64px] px-5 py-2 text-xs font-bold leading-tight ${itemStyle[s.status]}`}
                >
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-gray-800 font-semibold mb-3">نسبة الإنجاز</div>
          <div className="flex-1 flex items-center bg-gray-50 border border-gray-100 rounded-3xl p-4 md:p-6">
            <Gauge value={progress} />
          </div>
        </div>
        </div>
      </div>
    </PageShell>
  );
}
