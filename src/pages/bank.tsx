import { useEffect, useState } from "react";
import NextImage from "next/image";
import { MapPin, MapPinned, PlayCircle, Video, X } from "lucide-react";
import { PageShell } from "@/components/PageShell";

// ===== بيانات الصفحة: عدّل هنا فقط =====
// الصور داخل public/land-bank باسم 1.jpg و 2.jpg ...
// المقاطع داخل public/land-bank/videos باسم 1.mp4 و 2.mp4 ...
// إذا المقطع مو موجود يظهر مكانه "سيتم إضافة مقطع الحي قريبًا"
const img = (n: number) => `/land-bank/${n}.jpg`;
const vid = (n: number) => `/land-bank/videos/${n}.mp4`;

const offers = [
  { title: "الموقع الأول", photos: [img(3), img(4)], video: vid(1) },
  { title: "الموقع الثاني", photos: [img(7), img(8)], video: vid(2) },
  { title: "الموقع الثالث", photos: [img(11), img(12)], video: vid(3) },
  { title: "الموقع الرابع", photos: [img(15), img(16)], video: vid(4) },
  { title: "الموقع الخامس", photos: [img(19), img(20)], video: vid(5) },
];
// =======================================

// دبوس خريطة فيه مسجد: يسقط وينط لما تفتح الصفحة، وينط من جديد لما تمر بالماوس
function MosquePin({ delay }: { delay: number }) {
  return (
    <span className="absolute top-3 left-4 z-10 flex flex-col items-center" style={{ animation: `lbDrop 2.2s ease-out ${delay}ms both` }}>
      <span className="group-hover:animate-[lbBounce_1.8s_ease-in-out]">
        <svg viewBox="0 0 48 60" className="w-11 h-14 drop-shadow-lg" aria-hidden="true">
          <path d="M24 59 C24 59 3 36 3 22 A21 21 0 0 1 45 22 C45 36 24 59 24 59Z" fill="#e6ca8d" stroke="#fff" strokeWidth="2" />
          <circle cx="24" cy="22" r="15" fill="#fff" />
          <rect x="15" y="30" width="18" height="3" fill="#08704C" />
          <rect x="18" y="23" width="12" height="7" fill="#08704C" />
          <path d="M18 23 Q24 13 30 23Z" fill="#08704C" />
          <rect x="14" y="17" width="2.5" height="13" fill="#08704C" />
          <rect x="31.5" y="17" width="2.5" height="13" fill="#08704C" />
          <circle cx="24" cy="14" r="1.3" fill="#c0841a" />
        </svg>
      </span>
      <span className="mt-0.5 h-1.5 w-6 rounded-full bg-black/30 animate-[lbShadow_3.5s_ease-in-out_infinite]" />
    </span>
  );
}

// غلاف المربع: تصميم بدل الصورة (رقم الموقع + رسمة مسجد)
function Cover({ n }: { n: number }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#08704C] via-[#0a5c40] to-[#003824]">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.14) 1px, transparent 0)", backgroundSize: "18px 18px", animation: "lbDrift 12s linear infinite" }}
      />
      {/* لمعة تمر على المربع */}
      <span className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] animate-[lbShine_3.5s_ease-in-out_infinite]" />
      <svg
        viewBox="0 0 400 120"
        fill="currentColor"
        className="absolute bottom-0 inset-x-0 w-full text-white/15 group-hover:text-white/30 transition-colors duration-500 animate-[lbFloat_8s_ease-in-out_infinite]"
      >
        <rect x="0" y="104" width="400" height="16" />
        <path d="M50 104 Q80 72 110 104Z M290 104 Q320 72 350 104Z" />
        <rect x="120" y="70" width="160" height="34" />
        <path d="M140 70 Q200 0 260 70Z" />
        <circle cx="200" cy="20" r="4" className="text-[#e6ca8d] animate-pulse" fill="#e6ca8d" />
        <rect x="96" y="28" width="14" height="76" />
        <path d="M96 28 L103 10 L110 28Z" />
        <rect x="290" y="28" width="14" height="76" />
        <path d="M290 28 L297 10 L304 28Z" />
      </svg>
      <MosquePin delay={400 + (n - 1) * 450} />
      <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-sm font-bold text-white">
        <span className="relative flex w-4 h-4 items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#e6ca8d] opacity-75 animate-ping" />
          <MapPin className="relative w-4 h-4" />
        </span>
        حاضرة الدمام
      </span>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white pb-20">
        <span className="text-7xl font-black drop-shadow-lg group-hover:scale-125 group-hover:text-[#e6ca8d] transition-all duration-500">{n}</span>
        <span className="mt-1 font-bold text-[#e6ca8d]">أرض مقترحة لبناء مسجد</span>
      </div>
    </div>
  );
}

export default function Page() {
  const [open, setOpen] = useState<number | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const offer = open === null ? null : offers[open];

  // زر Esc يقفل النافذة، والصفحة ما تتحرك خلفها
  useEffect(() => {
    setVideoFailed(false);
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <PageShell title="بنك الأراضي" description="أراضٍ مقترحة لبناء المساجد في حاضرة الدمام" Icon={MapPinned}>
      {/* المربعات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((o, i) => (
          <button
            key={o.title}
            type="button"
            onClick={() => setOpen(i)}
            style={{ animation: `lbUp .7s ease-out ${i * 150}ms both` }}
            className="group text-right bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#08704C] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <Cover n={i + 1} />
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#08704C] mb-2">{o.title}</h2>
              <span className="inline-flex items-center gap-2 text-[#08704C] font-semibold">
                عرض الصور ومقطع الحي
                <PlayCircle className="w-4 h-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* النافذة: صورتين + مقطع الحي */}
      {offer && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center overflow-y-auto p-4 md:p-10 animate-[lbFade_.25s_ease-out]"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl p-5 md:p-8 animate-[lbZoom_.35s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="إغلاق"
              onClick={() => setOpen(null)}
              className="absolute top-4 left-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <h2 className="text-2xl md:text-3xl font-black text-[#08704C] mb-6 text-center">{offer.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {offer.photos.map((p, j) => (
                <a
                  key={p}
                  href={p}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src={p}
                    alt={`${offer.title}: صورة ${j + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </a>
              ))}
            </div>

            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-3">
              <Video className="w-5 h-5 text-[#08704C]" />
              مقطع الحي
            </h3>
            {offer.video && !videoFailed ? (
              <video
                key={offer.video}
                src={offer.video}
                controls
                playsInline
                preload="metadata"
                onError={() => setVideoFailed(true)}
                className="w-full aspect-video rounded-2xl bg-black"
              />
            ) : (
              <div className="aspect-video rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 font-semibold">
                سيتم إضافة مقطع الحي قريبًا
              </div>
            )}
          </div>
        </div>
      )}

      {/* الحركات */}
      <style jsx global>{`
        @keyframes lbUp { from { opacity: 0; transform: translateY(40px) scale(.96) } to { opacity: 1; transform: none } }
        @keyframes lbFloat { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
        @keyframes lbDrift { from { background-position: 0 0 } to { background-position: 36px 36px } }
        @keyframes lbShine { 0% { left: -50% } 60%, 100% { left: 130% } }
        @keyframes lbDrop { 0% { opacity: 0; transform: translateY(-120px) } 55% { opacity: 1; transform: translateY(0) } 70% { transform: translateY(-16px) } 85% { transform: translateY(0) } 93% { transform: translateY(-5px) } 100% { transform: translateY(0) } }
        @keyframes lbBounce { 0%, 100% { transform: translateY(0) } 30% { transform: translateY(-14px) } 55% { transform: translateY(0) } 75% { transform: translateY(-5px) } }
        @keyframes lbShadow { 0%, 100% { transform: scale(1); opacity: .35 } 50% { transform: scale(1.5); opacity: .15; box-shadow: 0 0 0 6px rgba(230,202,141,.4) } }
        @keyframes lbFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lbZoom { from { opacity: 0; transform: scale(.92) translateY(20px) } to { opacity: 1; transform: none } }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important } }
      `}</style>
    </PageShell>
  );
}
