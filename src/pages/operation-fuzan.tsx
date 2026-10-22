// import { useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight, ExternalLink, Landmark } from "lucide-react";
// import { PageShell } from "@/components/PageShell";

// type Status = "done" | "current" | "next";

// // ===== بيانات الصفحة: عدّل هنا فقط =====
// const name = "مسجد محمد الفوزان رحمه الله";
// const pdf = "/designs/op2.pdf";

// // صور الشريط: حط الصور في public/designs/fuzan/ واكتب أسماءها هنا
// const images = [
//    "/designs/fuz.png",
//   "/designs/fuz1.png",
//   "/designs/fuz2.png",
//   "/designs/fuz3.png",
//   "/designs/fuz4.png",

// ];

// // الحالة: "done" = منجز (أخضر)، "current" = يحدث الآن (برتقالي)، "next" = لم يبدأ (رمادي)
// const items: Array<{ label: string; status: Status }> = [
//   { label: "العرض المبدئي", status: "done" },
//   { label: "الاستلام الابتدائي", status: "done" },
//   { label: "الاستلام النهائي", status: "done" },
//   { label: "التسليم للوزارة", status: "done" },
//   { label: "التشغيل المستمر", status: "current" },
// ];
// // =======================================

// // ألوان البنود: منجز = أخضر زيتي، يحدث الآن = برتقالي، لم يبدأ = رمادي
// const itemStyle: Record<Status, string> = {
//   done: "bg-[#7E9B2E] text-white",
//   current: "bg-amber-500 text-white animate-pulse",
//   next: "bg-gray-300 text-gray-600",
// };

// export default function Page() {
//   const trackRef = useRef<HTMLDivElement>(null);

//   function move(dir: 1 | -1) {
//     const el = trackRef.current;
//     if (!el) return;
//     const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
//     const atStart = el.scrollLeft <= 5;
//     if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
//     else if (dir === -1 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
//     else el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
//   }

//   // يتحرك الشريط لحاله كل 4 ثواني
//   useEffect(() => {
//     if (images.length <= 1) return;
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
//     const timer = setInterval(() => move(1), 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <PageShell title={name} description="مشروع في مرحلة التشغيل" Icon={Landmark}>
//       <div className="mb-6">
//         <a href="/projects-operation" className="text-white/90 hover:text-white font-semibold">→ الرجوع إلى مشاريع التشغيل</a>
//       </div>

//       <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8 space-y-8">
//         {/* شريط الصور */}
//         <div className="relative">
//           <div ref={trackRef} dir="ltr" className="flex overflow-x-auto snap-x snap-mandatory rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {images.map((src, i) => (
//               <div key={i} className="snap-start shrink-0 w-full md:w-1/2 p-1">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img src={src} alt={`${name} ${i + 1}`} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover rounded-xl" />
//               </div>
//             ))}
//           </div>
//           {images.length > 1 && (
//             <>
//               <button type="button" aria-label="السابق" onClick={() => move(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow rounded-full p-2">
//                 <ChevronLeft className="w-5 h-5 text-[#08704C]" />
//               </button>
//               <button type="button" aria-label="التالي" onClick={() => move(1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow rounded-full p-2">
//                 <ChevronRight className="w-5 h-5 text-[#08704C]" />
//               </button>
//             </>
//           )}
//         </div>

//         {/* البنود الفرعية: شريط واحد مقسّم بخطوط مائلة */}
//         <div>
//           <div className="text-gray-800 font-semibold mb-3">البنود الفرعية</div>
//           <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 overflow-x-auto">
//             <div className="flex w-max mx-auto rounded-full overflow-hidden shadow-lg">
//               {items.map((s, i) => (
//                 <div
//                   key={i}
//                   className={`relative flex items-center justify-center text-center w-[90px] min-h-[64px] px-2 py-2 text-xs font-bold leading-tight ${itemStyle[s.status]}`}
//                 >
//                   {i > 0 && <span className="absolute right-0 top-0 h-full w-[2px] bg-black/50 skew-x-[15deg]" />}
//                   {s.label}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageShell>
//   );
// }
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink, Landmark, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";

type Status = "done" | "current" | "next";

// ===== بيانات الصفحة: عدّل هنا فقط =====
const name = "مسجد محمد الفوزان رحمه الله";
const tag = "إكمال بناء";
const pdf = "/designs/op2.pdf";
const map = "https://maps.app.goo.gl/TX36KiggNtUZYzGU8"; // رابط اللوكيشن في قوقل ماب

// صور الشريط
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
        <Link href="/projects-operation" className="text-white/90 hover:text-white font-semibold">→ الرجوع إلى مشاريع التشغيل</Link>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8 space-y-8">
        {/* اللوكيشن */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl bg-gradient-to-br from-[#08704C] to-[#003824] text-white p-5">
          <div>
            <span className="inline-block rounded-full bg-[#e6ca8d] text-[#003824] text-xs font-bold px-3 py-1">{tag}</span>
            <h2 className="mt-2 text-xl md:text-2xl font-black">{name}</h2>
          </div>
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
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 font-bold px-5 py-2 hover:bg-white hover:text-[#08704C] transition-all"
            >
              ملف PDF
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

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
