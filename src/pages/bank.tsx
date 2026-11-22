// // // import { useEffect, useState } from "react";
// // // import NextImage from "next/image";
// // // import { MapPin, MapPinned, PlayCircle, Video, X } from "lucide-react";
// // // import { PageShell } from "@/components/PageShell";

// // // // ===== بيانات الصفحة: عدّل هنا فقط =====
// // // // الصور داخل public/land-bank باسم 1.jpg و 2.jpg ...
// // // // المقاطع داخل public/land-bank/videos باسم 1.mp4 و 2.mp4 ...
// // // // إذا المقطع مو موجود يظهر مكانه "سيتم إضافة مقطع الحي قريبًا"
// // // const img = (n: number) => `/land-bank/${n}.jpg`;
// // // const vid = (n: number) => `/land-bank/videos/${n}.mp4`;

// // // const offers = [
// // //   { title: "الموقع الأول", photos: [img(3), img(4)], video: vid(1) },
// // //   { title: "الموقع الثاني", photos: [img(7), img(8)], video: vid(2) },
// // //   { title: "الموقع الثالث", photos: [img(11), img(12)], video: vid(3) },
// // //   { title: "الموقع الرابع", photos: [img(15), img(16)], video: vid(4) },
// // //   { title: "الموقع الخامس", photos: [img(19), img(20)], video: vid(5) },
// // // ];
// // // // =======================================

// // // // دبوس خريطة فيه مسجد: يسقط وينط لما تفتح الصفحة، وينط من جديد لما تمر بالماوس
// // // function MosquePin({ delay }: { delay: number }) {
// // //   return (
// // //     <span className="absolute top-3 left-4 z-10 flex flex-col items-center" style={{ animation: `lbDrop 2.2s ease-out ${delay}ms both` }}>
// // //       <span className="group-hover:animate-[lbBounce_1.8s_ease-in-out]">
// // //         <svg viewBox="0 0 48 60" className="w-11 h-14 drop-shadow-lg" aria-hidden="true">
// // //           <path d="M24 59 C24 59 3 36 3 22 A21 21 0 0 1 45 22 C45 36 24 59 24 59Z" fill="#e6ca8d" stroke="#fff" strokeWidth="2" />
// // //           <circle cx="24" cy="22" r="15" fill="#fff" />
// // //           <rect x="15" y="30" width="18" height="3" fill="#08704C" />
// // //           <rect x="18" y="23" width="12" height="7" fill="#08704C" />
// // //           <path d="M18 23 Q24 13 30 23Z" fill="#08704C" />
// // //           <rect x="14" y="17" width="2.5" height="13" fill="#08704C" />
// // //           <rect x="31.5" y="17" width="2.5" height="13" fill="#08704C" />
// // //           <circle cx="24" cy="14" r="1.3" fill="#c0841a" />
// // //         </svg>
// // //       </span>
// // //       <span className="mt-0.5 h-1.5 w-6 rounded-full bg-black/30 animate-[lbShadow_3.5s_ease-in-out_infinite]" />
// // //     </span>
// // //   );
// // // }

// // // // غلاف المربع: تصميم بدل الصورة (رقم الموقع + رسمة مسجد)
// // // function Cover({ n }: { n: number }) {
// // //   return (
// // //     <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#08704C] via-[#0a5c40] to-[#003824]">
// // //       <div
// // //         className="absolute inset-0"
// // //         style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.14) 1px, transparent 0)", backgroundSize: "18px 18px", animation: "lbDrift 12s linear infinite" }}
// // //       />
// // //       {/* لمعة تمر على المربع */}
// // //       <span className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] animate-[lbShine_3.5s_ease-in-out_infinite]" />
// // //       <svg
// // //         viewBox="0 0 400 120"
// // //         fill="currentColor"
// // //         className="absolute bottom-0 inset-x-0 w-full text-white/15 group-hover:text-white/30 transition-colors duration-500 animate-[lbFloat_8s_ease-in-out_infinite]"
// // //       >
// // //         <rect x="0" y="104" width="400" height="16" />
// // //         <path d="M50 104 Q80 72 110 104Z M290 104 Q320 72 350 104Z" />
// // //         <rect x="120" y="70" width="160" height="34" />
// // //         <path d="M140 70 Q200 0 260 70Z" />
// // //         <circle cx="200" cy="20" r="4" className="text-[#e6ca8d] animate-pulse" fill="#e6ca8d" />
// // //         <rect x="96" y="28" width="14" height="76" />
// // //         <path d="M96 28 L103 10 L110 28Z" />
// // //         <rect x="290" y="28" width="14" height="76" />
// // //         <path d="M290 28 L297 10 L304 28Z" />
// // //       </svg>
// // //       <MosquePin delay={400 + (n - 1) * 450} />
// // //       <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-sm font-bold text-white">
// // //         <span className="relative flex w-4 h-4 items-center justify-center">
// // //           <span className="absolute inline-flex h-full w-full rounded-full bg-[#e6ca8d] opacity-75 animate-ping" />
// // //           <MapPin className="relative w-4 h-4" />
// // //         </span>
// // //         حاضرة الدمام
// // //       </span>
// // //       <div className="absolute inset-0 flex flex-col items-center justify-center text-white pb-20">
// // //         <span className="text-7xl font-black drop-shadow-lg group-hover:scale-125 group-hover:text-[#e6ca8d] transition-all duration-500">{n}</span>
// // //         <span className="mt-1 font-bold text-[#e6ca8d]">أرض مقترحة لبناء مسجد</span>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default function Page() {
// // //   const [open, setOpen] = useState<number | null>(null);
// // //   const [videoFailed, setVideoFailed] = useState(false);
// // //   const offer = open === null ? null : offers[open];

// // //   // زر Esc يقفل النافذة، والصفحة ما تتحرك خلفها
// // //   useEffect(() => {
// // //     setVideoFailed(false);
// // //     if (open === null) return;
// // //     const onKey = (e: KeyboardEvent) => {
// // //       if (e.key === "Escape") setOpen(null);
// // //     };
// // //     document.addEventListener("keydown", onKey);
// // //     document.body.style.overflow = "hidden";
// // //     return () => {
// // //       document.removeEventListener("keydown", onKey);
// // //       document.body.style.overflow = "";
// // //     };
// // //   }, [open]);

// // //   return (
// // //     <PageShell title="بنك الأراضي" description="أراضٍ مقترحة لبناء المساجد في حاضرة الدمام" Icon={MapPinned}>
// // //       {/* المربعات */}
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // //         {offers.map((o, i) => (
// // //           <button
// // //             key={o.title}
// // //             type="button"
// // //             onClick={() => setOpen(i)}
// // //             style={{ animation: `lbUp .7s ease-out ${i * 150}ms both` }}
// // //             className="group text-right bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#08704C] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
// // //           >
// // //             <Cover n={i + 1} />
// // //             <div className="p-5 text-center">
// // //               <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#08704C] mb-2">{o.title}</h2>
// // //               <span className="inline-flex items-center gap-2 text-[#08704C] font-semibold">
// // //                 عرض الصور ومقطع الحي
// // //                 <PlayCircle className="w-4 h-4" />
// // //               </span>
// // //             </div>
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* النافذة: صورتين + مقطع الحي */}
// // //       {offer && (
// // //         <div
// // //           className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center overflow-y-auto p-4 md:p-10 animate-[lbFade_.25s_ease-out]"
// // //           onClick={() => setOpen(null)}
// // //         >
// // //           <div
// // //             className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl p-5 md:p-8 animate-[lbZoom_.35s_ease-out]"
// // //             onClick={(e) => e.stopPropagation()}
// // //           >
// // //             <button
// // //               type="button"
// // //               aria-label="إغلاق"
// // //               onClick={() => setOpen(null)}
// // //               className="absolute top-4 left-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
// // //             >
// // //               <X className="w-6 h-6 text-gray-700" />
// // //             </button>

// // //             <h2 className="text-2xl md:text-3xl font-black text-[#08704C] mb-6 text-center">{offer.title}</h2>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
// // //               {offer.photos.map((p, j) => (
// // //                 <a
// // //                   key={p}
// // //                   href={p}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="relative block aspect-video rounded-2xl overflow-hidden shadow-lg"
// // //                 >
// // //                   <NextImage
// // //                     src={p}
// // //                     alt={`${offer.title}: صورة ${j + 1}`}
// // //                     fill
// // //                     className="object-cover hover:scale-105 transition-transform duration-500"
// // //                   />
// // //                 </a>
// // //               ))}
// // //             </div>

// // //             <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-3">
// // //               <Video className="w-5 h-5 text-[#08704C]" />
// // //               مقطع الحي
// // //             </h3>
// // //             {offer.video && !videoFailed ? (
// // //               <video
// // //                 key={offer.video}
// // //                 src={offer.video}
// // //                 controls
// // //                 playsInline
// // //                 preload="metadata"
// // //                 onError={() => setVideoFailed(true)}
// // //                 className="w-full aspect-video rounded-2xl bg-black"
// // //               />
// // //             ) : (
// // //               <div className="aspect-video rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 font-semibold">
// // //                 سيتم إضافة مقطع الحي قريبًا
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* الحركات */}
// // //       <style jsx global>{`
// // //         @keyframes lbUp { from { opacity: 0; transform: translateY(40px) scale(.96) } to { opacity: 1; transform: none } }
// // //         @keyframes lbFloat { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
// // //         @keyframes lbDrift { from { background-position: 0 0 } to { background-position: 36px 36px } }
// // //         @keyframes lbShine { 0% { left: -50% } 60%, 100% { left: 130% } }
// // //         @keyframes lbDrop { 0% { opacity: 0; transform: translateY(-120px) } 55% { opacity: 1; transform: translateY(0) } 70% { transform: translateY(-16px) } 85% { transform: translateY(0) } 93% { transform: translateY(-5px) } 100% { transform: translateY(0) } }
// // //         @keyframes lbBounce { 0%, 100% { transform: translateY(0) } 30% { transform: translateY(-14px) } 55% { transform: translateY(0) } 75% { transform: translateY(-5px) } }
// // //         @keyframes lbShadow { 0%, 100% { transform: scale(1); opacity: .35 } 50% { transform: scale(1.5); opacity: .15; box-shadow: 0 0 0 6px rgba(230,202,141,.4) } }
// // //         @keyframes lbFade { from { opacity: 0 } to { opacity: 1 } }
// // //         @keyframes lbZoom { from { opacity: 0; transform: scale(.92) translateY(20px) } to { opacity: 1; transform: none } }
// // //         @media (prefers-reduced-motion: reduce) { * { animation: none !important } }
// // //       `}</style>
// // //     </PageShell>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import NextImage from "next/image";
// // import { ChevronLeft, ChevronRight, ExternalLink, MapPin, MapPinned, PlayCircle, Video, X, ZoomIn } from "lucide-react";
// // import { PageShell } from "@/components/PageShell";

// // // ===== بيانات الصفحة: عدّل هنا فقط =====
// // // الصور داخل public/land-bank باسم 1.jpg و 2.jpg ...
// // // المقاطع داخل public/land-bank/videos باسم 1.mp4 و 2.mp4 ...
// // // إذا المقطع مو موجود يظهر مكانه "سيتم إضافة مقطع الحي قريبًا"
// // const img = (n: number) => `/land-bank/${n}.jpg`;
// // const vid = (n: number) => `/land-bank/videos/${n}.mp4`;

// // // بيانات البانر لكل موقع: انقلها من شريحة الموقع في البوربوينت
// // // name: اسم الأرض والحي        plan: رقم المخطط والقطعة        map: رابط قوقل ماب
// // // stats: كل سطر بند، mosque = قيمة المسجد، jami = قيمة الجامع (اتركه "" إذا ما فيه)
// // // مثال سطر: { label: "مساحة الأرض", mosque: "5,372 م²", jami: "5,372 م²" }
// // // أي خانة فاضية "" ما تظهر في الصفحة

// // // بيانات البانر لكل موقع (من شرائح البوربوينت)
// // // باقي الأرقام (مسطح البناء ومساحة البناء والسعة) نفسها في كل المواقع، والمساحة تختلف
// // const stats = (land: string) => [
// //   { label: "مساحة الأرض", mosque: `${land} م²`, jami: `${land} م²` },
// //   { label: "مسطح البناء", mosque: "1,350 م²", jami: "1,812 م²" },
// //   { label: "مساحة البناء في المشروع", mosque: "1,071.5 م²", jami: "1,533.5 م²" },
// //   { label: "السعة الاستيعابية", mosque: "300 مصلٍ", jami: "650 مصلٍ" },
// // ];

// // const offers = [
// //   {
// //     title: "الموقع الأول",
// //     name: "أرض مسجد / جامع – الإسكان الجنوبي \"البيرق\"",
// //     plan: "مخطط رقم 188/4/ع قطعة – 180م إسكان البيرق",
// //     map: "https://maps.app.goo.gl/nGAU1LcH9TCwUnWi6",
// //     stats: stats("5,616"),
// //     photos: [img(3), img(4)],
// //     video: vid(1),
// //   },
// //   {
// //     title: "الموقع الثاني",
// //     name: "أرض مسجد / جامع – الإسكان الجنوبي \"نساج تاون 2\"",
// //     plan: "مخطط رقم 1884/ع قطعة – 183م نساج تاون 2",
// //     map: "https://maps.app.goo.gl/n7z92HqHMGw4Uz2D6",
// //     stats: stats("5,372"),
// //     photos: [img(7), img(8)],
// //     video: vid(2),
// //   },
// //   {
// //     title: "الموقع الثالث",
// //     name: "أرض مسجد / جامع – ضاحية الدمام الحي الثالث",
// //     plan: "مخطط 294 / 1 قطعة (خ18) الحي الثالث البيضاء ضاحية الدمام",
// //     map: "https://maps.app.goo.gl/Viy89aEVqjp5WRDQA",
// //     stats: stats("2,625"),
// //     photos: [img(11), img(12)],
// //     video: vid(3),
// //   },
// //   {
// //     title: "الموقع الرابع",
// //     name: "أرض مسجد / جامع – غرب الدمام حي الشعلة",
// //     plan: "مخطط ش د 1432 قطعة (خ 22) الدمام الشعلة",
// //     map: "https://maps.app.goo.gl/s2GVmeUJrgv2SuMo9",
// //     stats: stats("3,389.58"),
// //     photos: [img(15), img(16)],
// //     video: vid(4),
// //   },
// //   {
// //     title: "الموقع الخامس",
// //     name: "أرض مسجد / جامع – جنوب غربي حي العزيزية",
// //     plan: "مخطط 2/277 | قطعة 13",
// //     map: "https://maps.app.goo.gl/Nk6YUqGcx7GZXsCL8",
// //     stats: stats("2,000"),
// //     photos: [img(19), img(20)],
// //     video: vid(5),
// //   },
// // ];

// // type Offer = (typeof offers)[number];

// // // البانر أعلى النافذة: العنوان + زر الموقع + أرقام الأرض
// // function Banner({ offer }: { offer: Offer }) {
// //   const stats = offer.stats.filter((s) => s.mosque || s.jami);
// //   const hasJami = stats.some((s) => s.jami);
// //   return (
// //     <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#08704C] via-[#0a5c40] to-[#003824] text-white p-5 md:p-7 mb-6">
// //       <div
// //         className="absolute inset-0 pointer-events-none"
// //         style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.12) 1px, transparent 0)", backgroundSize: "18px 18px" }}
// //       />
// //       <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// //         <div>
// //           <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#e6ca8d]">
// //             <MapPinned className="w-4 h-4" />
// //             بنك الأراضي · {offer.title}
// //           </span>
// //           <h2 className="mt-2 text-2xl md:text-3xl font-black leading-snug">{offer.name || offer.title}</h2>
// //           {offer.plan && <p className="mt-1 text-white/80 text-sm">{offer.plan}</p>}
// //         </div>
// //         {offer.map && (
// //           <a
// //             href={offer.map}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="shrink-0 inline-flex items-center gap-2 self-start md:self-center rounded-full bg-[#e6ca8d] text-[#003824] font-bold px-5 py-2.5 shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all"
// //           >
// //             <MapPin className="w-5 h-5" />
// //             موقع الأرض
// //             <ExternalLink className="w-4 h-4" />
// //           </a>
// //         )}
// //       </div>

// //       {stats.length > 0 && (
// //         <div className="relative mt-6 overflow-hidden rounded-2xl bg-white text-gray-900 shadow-lg">
// //           <table className="w-full text-center text-xs sm:text-sm md:text-base">
// //             <thead>
// //               <tr className="bg-[#86a886] text-white">
// //                 <th className="py-3 px-3 font-bold">البند</th>
// //                 <th className="py-3 px-3 font-bold">مسجد</th>
// //                 {hasJami && <th className="py-3 px-3 font-bold">جامع</th>}
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {stats.map((s, i) => (
// //                 <tr key={s.label} className={i % 2 ? "bg-[#f3f6f1]" : "bg-white"}>
// //                   <td className="py-3 px-3 font-semibold text-[#08704C]">{s.label}</td>
// //                   <td className="py-3 px-2 md:px-3 font-bold whitespace-nowrap">{s.mosque || "—"}</td>
// //                   {hasJami && <td className="py-3 px-2 md:px-3 font-bold whitespace-nowrap">{s.jami || "—"}</td>}
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// // // =======================================

// // // دبوس خريطة فيه مسجد: يسقط وينط لما تفتح الصفحة، وينط من جديد لما تمر بالماوس
// // function MosquePin({ delay }: { delay: number }) {
// //   return (
// //     <span className="absolute top-3 left-4 z-10 flex flex-col items-center" style={{ animation: `lbDrop 4s ease-in-out ${delay}ms both` }}>
// //       <span className="group-hover:animate-[lbBounce_3s_ease-in-out]">
// //         <svg viewBox="0 0 48 60" className="w-11 h-14 drop-shadow-lg" aria-hidden="true">
// //           <path d="M24 59 C24 59 3 36 3 22 A21 21 0 0 1 45 22 C45 36 24 59 24 59Z" fill="#e6ca8d" stroke="#fff" strokeWidth="2" />
// //           <circle cx="24" cy="22" r="15" fill="#fff" />
// //           <rect x="15" y="30" width="18" height="3" fill="#08704C" />
// //           <rect x="18" y="23" width="12" height="7" fill="#08704C" />
// //           <path d="M18 23 Q24 13 30 23Z" fill="#08704C" />
// //           <rect x="14" y="17" width="2.5" height="13" fill="#08704C" />
// //           <rect x="31.5" y="17" width="2.5" height="13" fill="#08704C" />
// //           <circle cx="24" cy="14" r="1.3" fill="#c0841a" />
// //         </svg>
// //       </span>
// //       <span className="mt-0.5 h-1.5 w-6 rounded-full bg-black/30 animate-[lbShadow_6s_ease-in-out_infinite]" />
// //     </span>
// //   );
// // }

// // // غلاف المربع: تصميم بدل الصورة (رقم الموقع + رسمة مسجد)
// // function Cover({ n }: { n: number }) {
// //   return (
// //     <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#08704C] via-[#0a5c40] to-[#003824]">
// //       <div
// //         className="absolute inset-0"
// //         style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.14) 1px, transparent 0)", backgroundSize: "18px 18px", animation: "lbDrift 12s linear infinite" }}
// //       />
// //       {/* لمعة تمر على المربع */}
// //       <span className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] animate-[lbShine_8s_ease-in-out_infinite]" />
// //       <svg
// //         viewBox="0 0 400 120"
// //         fill="currentColor"
// //         className="absolute bottom-0 inset-x-0 w-full text-white/15 group-hover:text-white/30 transition-colors duration-500 animate-[lbFloat_14s_ease-in-out_infinite]"
// //       >
// //         <rect x="0" y="104" width="400" height="16" />
// //         <path d="M50 104 Q80 72 110 104Z M290 104 Q320 72 350 104Z" />
// //         <rect x="120" y="70" width="160" height="34" />
// //         <path d="M140 70 Q200 0 260 70Z" />
// //         <circle cx="200" cy="20" r="4" className="text-[#e6ca8d] animate-pulse" fill="#e6ca8d" />
// //         <rect x="96" y="28" width="14" height="76" />
// //         <path d="M96 28 L103 10 L110 28Z" />
// //         <rect x="290" y="28" width="14" height="76" />
// //         <path d="M290 28 L297 10 L304 28Z" />
// //       </svg>
// //       <MosquePin delay={400 + (n - 1) * 700} />
// //       <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-sm font-bold text-white">
// //         <span className="relative flex w-4 h-4 items-center justify-center">
// //           <span className="absolute inline-flex h-full w-full rounded-full bg-[#e6ca8d] opacity-75 animate-ping" />
// //           <MapPin className="relative w-4 h-4" />
// //         </span>
// //         حاضرة الدمام
// //       </span>
// //       <div className="absolute inset-0 flex flex-col items-center justify-center text-white pb-20">
// //         <span className="text-7xl font-black drop-shadow-lg group-hover:scale-125 group-hover:text-[#e6ca8d] transition-all duration-500">{n}</span>
// //         <span className="mt-1 font-bold text-[#e6ca8d]">أرض مقترحة لبناء مسجد</span>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function Page() {
// //   const [open, setOpen] = useState<number | null>(null);
// //   const [videoFailed, setVideoFailed] = useState(false);
// //   const [zoom, setZoom] = useState<number | null>(null); // الصورة المكبّرة داخل النافذة
// //   const offer = open === null ? null : offers[open];

// //   // التنقل بين المواقع (السابق/التالي) بدون ما تقفل النافذة
// //   const goSite = (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + offers.length) % offers.length));
// //   // التنقل بين الصور المكبّرة
// //   const goPhoto = (dir: 1 | -1) =>
// //     setZoom((z) => (z === null || !offer ? z : (z + dir + offer.photos.length) % offer.photos.length));

// //   // Esc يقفل، والأسهم في الكيبورد تنقلك: بين الصور إذا فيه صورة مكبّرة، وإلا بين المواقع
// //   useEffect(() => {
// //     setVideoFailed(false);
// //     setZoom(null);
// //     if (open === null) return;
// //     document.body.style.overflow = "hidden";
// //     return () => {
// //       document.body.style.overflow = "";
// //     };
// //   }, [open]);

// //   useEffect(() => {
// //     if (open === null) return;
// //     const onKey = (e: KeyboardEvent) => {
// //       if (e.key === "Escape") (zoom !== null ? setZoom(null) : setOpen(null));
// //       if (e.key === "ArrowLeft") (zoom !== null ? goPhoto(1) : goSite(1));
// //       if (e.key === "ArrowRight") (zoom !== null ? goPhoto(-1) : goSite(-1));
// //     };
// //     document.addEventListener("keydown", onKey);
// //     return () => document.removeEventListener("keydown", onKey);
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [open, zoom]);

// //   return (
// //     <PageShell title="بنك الأراضي" description="أراضٍ مقترحة لبناء المساجد في حاضرة الدمام" Icon={MapPinned}>
// //       {/* المربعات */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {offers.map((o, i) => (
// //           <button
// //             key={o.title}
// //             type="button"
// //             onClick={() => setOpen(i)}
// //             style={{ animation: `lbUp .7s ease-out ${i * 150}ms both` }}
// //             className="group text-right bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#08704C] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
// //           >
// //             <Cover n={i + 1} />
// //             <div className="p-5 text-center">
// //               <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#08704C] mb-2">{o.title}</h2>
// //               <span className="inline-flex items-center gap-2 text-[#08704C] font-semibold">
// //                 عرض الصور ومقطع الحي
// //                 <PlayCircle className="w-4 h-4" />
// //               </span>
// //             </div>
// //           </button>
// //         ))}
// //       </div>

// //       {/* النافذة: صورتين + مقطع الحي */}
// //       {offer && (
// //         <div
// //           key={open}
// //           className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center overflow-y-auto p-4 md:p-10 animate-[lbFade_.25s_ease-out]"
// //           onClick={() => setOpen(null)}
// //         >
// //           <div
// //             className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl p-5 md:p-8 animate-[lbZoom_.35s_ease-out]"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <button
// //               type="button"
// //               aria-label="إغلاق"
// //               onClick={() => setOpen(null)}
// //               className="absolute top-8 left-8 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow"
// //             >
// //               <X className="w-6 h-6 text-gray-700" />
// //             </button>

// //             <Banner offer={offer} />

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
// //               {offer.photos.map((p, j) => (
// //                 <button
// //                   key={p}
// //                   type="button"
// //                   onClick={() => setZoom(j)}
// //                   className="group/ph relative block aspect-video rounded-2xl overflow-hidden shadow-lg"
// //                 >
// //                   <NextImage
// //                     src={p}
// //                     alt={`${offer.title}: صورة ${j + 1}`}
// //                     fill
// //                     className="object-cover group-hover/ph:scale-105 transition-transform duration-500"
// //                   />
// //                   <span className="absolute inset-0 bg-[#08704C]/0 group-hover/ph:bg-[#08704C]/30 transition-colors flex items-center justify-center">
// //                     <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover/ph:opacity-100 transition-opacity" />
// //                   </span>
// //                 </button>
// //               ))}
// //             </div>

// //             <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-3">
// //               <Video className="w-5 h-5 text-[#08704C]" />
// //               مقطع الحي
// //             </h3>
// //             {offer.video && !videoFailed ? (
// //               <video
// //                 key={offer.video}
// //                 src={offer.video}
// //                 controls
// //                 playsInline
// //                 preload="metadata"
// //                 onError={() => setVideoFailed(true)}
// //                 className="w-full aspect-video rounded-2xl bg-black"
// //               />
// //             ) : (
// //               <div className="aspect-video rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 font-semibold">
// //                 سيتم إضافة مقطع الحي قريبًا
// //               </div>
// //             )}

// //             {/* الانتقال للموقع السابق / التالي */}
// //             <div className="mt-8 flex items-center justify-between gap-3">
// //               <button
// //                 type="button"
// //                 onClick={() => goSite(-1)}
// //                 className="inline-flex items-center gap-2 rounded-full border-2 border-[#08704C]/20 px-5 py-2.5 font-bold text-[#08704C] hover:bg-[#08704C] hover:text-white transition-colors"
// //               >
// //                 <ChevronRight className="w-5 h-5" />
// //                 {offers[(open! - 1 + offers.length) % offers.length].title}
// //               </button>
// //               <span className="text-sm font-semibold text-gray-500">
// //                 {open! + 1} / {offers.length}
// //               </span>
// //               <button
// //                 type="button"
// //                 onClick={() => goSite(1)}
// //                 className="inline-flex items-center gap-2 rounded-full border-2 border-[#08704C]/20 px-5 py-2.5 font-bold text-[#08704C] hover:bg-[#08704C] hover:text-white transition-colors"
// //               >
// //                 {offers[(open! + 1) % offers.length].title}
// //                 <ChevronLeft className="w-5 h-5" />
// //               </button>
// //             </div>
// //           </div>

// //           {/* الصورة المكبّرة مع أسهم التنقل */}
// //           {zoom !== null && (
// //             <div
// //               className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 animate-[lbFade_.2s_ease-out]"
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 setZoom(null);
// //               }}
// //             >
// //               {/* eslint-disable-next-line @next/next/no-img-element */}
// //               <img
// //                 key={zoom}
// //                 src={offer.photos[zoom]}
// //                 alt={`${offer.title}: صورة ${zoom + 1}`}
// //                 onClick={(e) => e.stopPropagation()}
// //                 className="max-h-[85vh] max-w-full rounded-xl shadow-2xl animate-[lbZoom_.3s_ease-out]"
// //               />
// //               <button type="button" aria-label="إغلاق" onClick={() => setZoom(null)} className="absolute top-4 right-4 bg-white/15 hover:bg-white/30 rounded-full p-2">
// //                 <X className="w-7 h-7 text-white" />
// //               </button>
// //               <button
// //                 type="button"
// //                 aria-label="الصورة السابقة"
// //                 onClick={(e) => { e.stopPropagation(); goPhoto(-1); }}
// //                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 rounded-full p-3"
// //               >
// //                 <ChevronRight className="w-8 h-8 text-white" />
// //               </button>
// //               <button
// //                 type="button"
// //                 aria-label="الصورة التالية"
// //                 onClick={(e) => { e.stopPropagation(); goPhoto(1); }}
// //                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 rounded-full p-3"
// //               >
// //                 <ChevronLeft className="w-8 h-8 text-white" />
// //               </button>
// //               <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 font-semibold">
// //                 {zoom + 1} / {offer.photos.length}
// //               </span>
// //             </div>
// //           )}
// //         </div>
// //       )}

// //       {/* الحركات */}
// //       <style jsx global>{`
// //         @keyframes lbUp { from { opacity: 0; transform: translateY(40px) scale(.96) } to { opacity: 1; transform: none } }
// //         @keyframes lbFloat { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-3px) } }
// //         @keyframes lbDrift { from { background-position: 0 0 } to { background-position: 36px 36px } }
// //         @keyframes lbShine { 0% { left: -50% } 60%, 100% { left: 130% } }
// //         @keyframes lbDrop { 0% { opacity: 0; transform: translateY(-50px) } 60% { opacity: 1; transform: translateY(0) } 80% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
// //         @keyframes lbBounce { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
// //         @keyframes lbShadow { 0%, 100% { transform: scale(1); opacity: .35 } 50% { transform: scale(1.5); opacity: .15; box-shadow: 0 0 0 6px rgba(230,202,141,.4) } }
// //         @keyframes lbFade { from { opacity: 0 } to { opacity: 1 } }
// //         @keyframes lbZoom { from { opacity: 0; transform: scale(.92) translateY(20px) } to { opacity: 1; transform: none } }
// //         @media (prefers-reduced-motion: reduce) { * { animation: none !important } }
// //       `}</style>
// //     </PageShell>
// //   );
// // }

// import { useEffect, useState } from "react";
// import NextImage from "next/image";
// import { BadgeCheck, ChevronLeft, ChevronRight, ExternalLink, MapPin, MapPinned, PlayCircle, Video, X, ZoomIn } from "lucide-react";
// import { PageShell } from "@/components/PageShell";

// // ===== بيانات الصفحة: عدّل هنا فقط =====
// // الصور داخل public/land-bank باسم 1.jpg و 2.jpg ...
// // المقاطع داخل public/land-bank/videos باسم 1.mp4 و 2.mp4 ...
// // إذا المقطع مو موجود يظهر مكانه "سيتم إضافة مقطع الحي قريبًا"
// const img = (n: number) => `/land-bank/${n}.jpg`;
// const vid = (n: number) => `/land-bank/videos/${n}.mp4`;

// // بيانات البانر لكل موقع: انقلها من شريحة الموقع في البوربوينت
// // name: اسم الأرض والحي        plan: رقم المخطط والقطعة        map: رابط قوقل ماب
// // reserved: true = الأرض محجوزة (يطلع عليها ختم "تم الحجز")، احذف السطر أو خلّه false إذا متاحة
// // stats: كل سطر بند، mosque = قيمة المسجد، jami = قيمة الجامع (اتركه "" إذا ما فيه)
// // أي خانة فاضية "" ما تظهر في الصفحة

// // باقي الأرقام (مسطح البناء ومساحة البناء والسعة) نفسها في كل المواقع، والمساحة تختلف
// const stats = (land: string) => [
//   { label: "مساحة الأرض", mosque: `${land} م²`, jami: `${land} م²` },
//   { label: "مسطح البناء", mosque: "1,350 م²", jami: "1,812 م²" },
//   { label: "مساحة البناء في المشروع", mosque: "1,071.5 م²", jami: "1,533.5 م²" },
//   { label: "السعة الاستيعابية", mosque: "300 مصلٍ", jami: "650 مصلٍ" },
// ];

// const offers = [
//   {
//     title: "الموقع الأول",
//     name: "أرض مسجد / جامع – الإسكان الجنوبي \"البيرق\"",
//     plan: "مخطط رقم 188/4/ع قطعة – 180م إسكان البيرق",
//     map: "https://maps.app.goo.gl/nGAU1LcH9TCwUnWi6",
//     reserved: true,
//     stats: stats("5,616"),
//     photos: [img(3), img(4)],
//     video: vid(1),
//   },
//   {
//     title: "الموقع الثاني",
//     name: "أرض مسجد / جامع – الإسكان الجنوبي \"نساج تاون 2\"",
//     plan: "مخطط رقم 1884/ع قطعة – 183م نساج تاون 2",
//     map: "https://maps.app.goo.gl/n7z92HqHMGw4Uz2D6",
//     reserved: true,
//     stats: stats("5,372"),
//     photos: [img(7), img(8)],
//     video: vid(2),
//   },
//   {
//     title: "الموقع الثالث",
//     name: "أرض مسجد / جامع – ضاحية الدمام الحي الثالث",
//     plan: "مخطط 294 / 1 قطعة (خ18) الحي الثالث البيضاء ضاحية الدمام",
//     map: "https://maps.app.goo.gl/Viy89aEVqjp5WRDQA",
//     reserved: false,
//     stats: stats("2,625"),
//     photos: [img(11), img(12)],
//     video: vid(3),
//   },
//   {
//     title: "الموقع الرابع",
//     name: "أرض مسجد / جامع – غرب الدمام حي الشعلة",
//     plan: "مخطط ش د 1432 قطعة (خ 22) الدمام الشعلة",
//     map: "https://maps.app.goo.gl/s2GVmeUJrgv2SuMo9",
//     reserved: false,
//     stats: stats("3,389.58"),
//     photos: [img(15), img(16)],
//     video: vid(4),
//   },
//   {
//     title: "الموقع الخامس",
//     name: "أرض مسجد / جامع – جنوب غربي حي العزيزية",
//     plan: "مخطط 2/277 | قطعة 13",
//     map: "https://maps.app.goo.gl/Nk6YUqGcx7GZXsCL8",
//     reserved: false,
//     stats: stats("2,000"),
//     photos: [img(19), img(20)],
//     video: vid(5),
//   },
// ];

// type Offer = (typeof offers)[number];

// // ختم "تم الحجز": يطلع على المربع وفي البانر
// function ReservedStamp({ size = "md" }: { size?: "sm" | "md" }) {
//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 rounded-full bg-[#e6ca8d] text-[#003824] font-black shadow-lg ring-2 ring-white/70 ${
//         size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"
//       }`}
//     >
//       <BadgeCheck className={size === "sm" ? "w-4 h-4" : "w-5 h-5"} />
//       تم الحجز
//     </span>
//   );
// }

// // البانر أعلى النافذة: العنوان + زر الموقع + أرقام الأرض
// function Banner({ offer }: { offer: Offer }) {
//   const stats = offer.stats.filter((s) => s.mosque || s.jami);
//   const hasJami = stats.some((s) => s.jami);
//   return (
//     <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#08704C] via-[#0a5c40] to-[#003824] text-white p-5 md:p-7 mb-6">
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.12) 1px, transparent 0)", backgroundSize: "18px 18px" }}
//       />
//       <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//         <div>
//           <div className="flex flex-wrap items-center gap-3">
//             <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#e6ca8d]">
//               <MapPinned className="w-4 h-4" />
//               بنك الأراضي · {offer.title}
//             </span>
//             {offer.reserved && <ReservedStamp size="sm" />}
//           </div>
//           <h2 className="mt-2 text-2xl md:text-3xl font-black leading-snug">{offer.name || offer.title}</h2>
//           {offer.plan && <p className="mt-1 text-white/80 text-sm">{offer.plan}</p>}
//           {offer.reserved && (
//             <p className="mt-3 inline-block rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white/90">
//               تم حجز هذه الأرض لبناء مسجد، جزى الله المتبرع خيرًا. البيانات معروضة للاطلاع.
//             </p>
//           )}
//         </div>
//         {offer.map && (
//           <a
//             href={offer.map}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="shrink-0 inline-flex items-center gap-2 self-start md:self-center rounded-full bg-[#e6ca8d] text-[#003824] font-bold px-5 py-2.5 shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all"
//           >
//             <MapPin className="w-5 h-5" />
//             موقع الأرض
//             <ExternalLink className="w-4 h-4" />
//           </a>
//         )}
//       </div>

//       {stats.length > 0 && (
//         <div className="relative mt-6 overflow-hidden rounded-2xl bg-white text-gray-900 shadow-lg">
//           <table className="w-full text-center text-xs sm:text-sm md:text-base">
//             <thead>
//               <tr className="bg-[#86a886] text-white">
//                 <th className="py-3 px-3 font-bold">البند</th>
//                 <th className="py-3 px-3 font-bold">مسجد</th>
//                 {hasJami && <th className="py-3 px-3 font-bold">جامع</th>}
//               </tr>
//             </thead>
//             <tbody>
//               {stats.map((s, i) => (
//                 <tr key={s.label} className={i % 2 ? "bg-[#f3f6f1]" : "bg-white"}>
//                   <td className="py-3 px-3 font-semibold text-[#08704C]">{s.label}</td>
//                   <td className="py-3 px-2 md:px-3 font-bold whitespace-nowrap">{s.mosque || "—"}</td>
//                   {hasJami && <td className="py-3 px-2 md:px-3 font-bold whitespace-nowrap">{s.jami || "—"}</td>}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }
// // =======================================

// // دبوس خريطة فيه مسجد: يسقط وينط لما تفتح الصفحة، وينط من جديد لما تمر بالماوس
// function MosquePin({ delay }: { delay: number }) {
//   return (
//     <span className="absolute top-3 left-4 z-10 flex flex-col items-center" style={{ animation: `lbDrop 4s ease-in-out ${delay}ms both` }}>
//       <span className="group-hover:animate-[lbBounce_3s_ease-in-out]">
//         <svg viewBox="0 0 48 60" className="w-11 h-14 drop-shadow-lg" aria-hidden="true">
//           <path d="M24 59 C24 59 3 36 3 22 A21 21 0 0 1 45 22 C45 36 24 59 24 59Z" fill="#e6ca8d" stroke="#fff" strokeWidth="2" />
//           <circle cx="24" cy="22" r="15" fill="#fff" />
//           <rect x="15" y="30" width="18" height="3" fill="#08704C" />
//           <rect x="18" y="23" width="12" height="7" fill="#08704C" />
//           <path d="M18 23 Q24 13 30 23Z" fill="#08704C" />
//           <rect x="14" y="17" width="2.5" height="13" fill="#08704C" />
//           <rect x="31.5" y="17" width="2.5" height="13" fill="#08704C" />
//           <circle cx="24" cy="14" r="1.3" fill="#c0841a" />
//         </svg>
//       </span>
//       <span className="mt-0.5 h-1.5 w-6 rounded-full bg-black/30 animate-[lbShadow_6s_ease-in-out_infinite]" />
//     </span>
//   );
// }

// // غلاف المربع: تصميم بدل الصورة (رقم الموقع + رسمة مسجد)، وإذا محجوزة يطلع شريط "تم الحجز"
// function Cover({ n, reserved }: { n: number; reserved?: boolean }) {
//   return (
//     <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#08704C] via-[#0a5c40] to-[#003824]">
//       <div
//         className="absolute inset-0"
//         style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.14) 1px, transparent 0)", backgroundSize: "18px 18px", animation: "lbDrift 12s linear infinite" }}
//       />
//       {/* لمعة تمر على المربع */}
//       <span className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] animate-[lbShine_8s_ease-in-out_infinite]" />
//       <svg
//         viewBox="0 0 400 120"
//         fill="currentColor"
//         className="absolute bottom-0 inset-x-0 w-full text-white/15 group-hover:text-white/30 transition-colors duration-500 animate-[lbFloat_14s_ease-in-out_infinite]"
//       >
//         <rect x="0" y="104" width="400" height="16" />
//         <path d="M50 104 Q80 72 110 104Z M290 104 Q320 72 350 104Z" />
//         <rect x="120" y="70" width="160" height="34" />
//         <path d="M140 70 Q200 0 260 70Z" />
//         <circle cx="200" cy="20" r="4" className="text-[#e6ca8d] animate-pulse" fill="#e6ca8d" />
//         <rect x="96" y="28" width="14" height="76" />
//         <path d="M96 28 L103 10 L110 28Z" />
//         <rect x="290" y="28" width="14" height="76" />
//         <path d="M290 28 L297 10 L304 28Z" />
//       </svg>
//       <MosquePin delay={400 + (n - 1) * 700} />
//       <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-sm font-bold text-white">
//         <span className="relative flex w-4 h-4 items-center justify-center">
//           <span className="absolute inline-flex h-full w-full rounded-full bg-[#e6ca8d] opacity-75 animate-ping" />
//           <MapPin className="relative w-4 h-4" />
//         </span>
//         حاضرة الدمام
//       </span>
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-white pb-20">
//         <span className="text-7xl font-black drop-shadow-lg group-hover:scale-125 group-hover:text-[#e6ca8d] transition-all duration-500">{n}</span>
//         <span className="mt-1 font-bold text-[#e6ca8d]">{reserved ? "تم حجزها لبناء مسجد" : "أرض مقترحة لبناء مسجد"}</span>
//       </div>
//       {/* شريط مائل "تم الحجز" على زاوية المربع */}
//       {reserved && (
//         <span
//           className="absolute bottom-6 -left-12 z-20 w-48 rotate-45 bg-[#e6ca8d] text-[#003824] text-center text-sm font-black py-1.5 shadow-lg ring-1 ring-white/60"
//           style={{ animation: "lbStamp .6s ease-out both", animationDelay: `${600 + (n - 1) * 700}ms` }}
//         >
//           تم الحجز ✓
//         </span>
//       )}
//     </div>
//   );
// }

// export default function Page() {
//   const [open, setOpen] = useState<number | null>(null);
//   const [videoFailed, setVideoFailed] = useState(false);
//   const [zoom, setZoom] = useState<number | null>(null); // الصورة المكبّرة داخل النافذة
//   const offer = open === null ? null : offers[open];
//   const reservedCount = offers.filter((o) => o.reserved).length;

//   // التنقل بين المواقع (السابق/التالي) بدون ما تقفل النافذة
//   const goSite = (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + offers.length) % offers.length));
//   // التنقل بين الصور المكبّرة
//   const goPhoto = (dir: 1 | -1) =>
//     setZoom((z) => (z === null || !offer ? z : (z + dir + offer.photos.length) % offer.photos.length));

//   // Esc يقفل، والأسهم في الكيبورد تنقلك: بين الصور إذا فيه صورة مكبّرة، وإلا بين المواقع
//   useEffect(() => {
//     setVideoFailed(false);
//     setZoom(null);
//     if (open === null) return;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   useEffect(() => {
//     if (open === null) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") (zoom !== null ? setZoom(null) : setOpen(null));
//       if (e.key === "ArrowLeft") (zoom !== null ? goPhoto(1) : goSite(1));
//       if (e.key === "ArrowRight") (zoom !== null ? goPhoto(-1) : goSite(-1));
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [open, zoom]);

//   return (
//     <PageShell title="بنك الأراضي" description="أراضٍ مقترحة لبناء المساجد في حاضرة الدمام" Icon={MapPinned}>
//       {/* ملخص الحجوزات */}
//       {reservedCount > 0 && (
//         <div className="mb-6 flex flex-wrap items-center gap-3 text-white font-semibold">
//           <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5">
//             <BadgeCheck className="w-5 h-5 text-[#e6ca8d]" />
//             تم حجز {reservedCount} من {offers.length} أراضٍ
//           </span>
//           <span className="text-white/80">والباقي متاح لمن أراد بناء بيت لله</span>
//         </div>
//       )}

//       {/* المربعات */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {offers.map((o, i) => (
//           <button
//             key={o.title}
//             type="button"
//             onClick={() => setOpen(i)}
//             style={{ animation: `lbUp .7s ease-out ${i * 150}ms both` }}
//             className="group text-right bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#08704C] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
//           >
//             <Cover n={i + 1} reserved={o.reserved} />
//             <div className="p-5 text-center">
//               <h2 className="flex items-center justify-center gap-2 text-xl font-bold text-gray-900 group-hover:text-[#08704C] mb-2">
//                 {o.title}
//                 {o.reserved && <ReservedStamp size="sm" />}
//               </h2>
//               <span className="inline-flex items-center gap-2 text-[#08704C] font-semibold">
//                 عرض الصور ومقطع الحي
//                 <PlayCircle className="w-4 h-4" />
//               </span>
//             </div>
//           </button>
//         ))}
//       </div>

//       {/* النافذة: صورتين + مقطع الحي */}
//       {offer && (
//         <div
//           key={open}
//           className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center overflow-y-auto p-4 md:p-10 animate-[lbFade_.25s_ease-out]"
//           onClick={() => setOpen(null)}
//         >
//           <div
//             className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl p-5 md:p-8 animate-[lbZoom_.35s_ease-out]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               type="button"
//               aria-label="إغلاق"
//               onClick={() => setOpen(null)}
//               className="absolute top-8 left-8 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow"
//             >
//               <X className="w-6 h-6 text-gray-700" />
//             </button>

//             <Banner offer={offer} />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//               {offer.photos.map((p, j) => (
//                 <button
//                   key={p}
//                   type="button"
//                   onClick={() => setZoom(j)}
//                   className="group/ph relative block aspect-video rounded-2xl overflow-hidden shadow-lg"
//                 >
//                   <NextImage
//                     src={p}
//                     alt={`${offer.title}: صورة ${j + 1}`}
//                     fill
//                     className="object-cover group-hover/ph:scale-105 transition-transform duration-500"
//                   />
//                   <span className="absolute inset-0 bg-[#08704C]/0 group-hover/ph:bg-[#08704C]/30 transition-colors flex items-center justify-center">
//                     <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover/ph:opacity-100 transition-opacity" />
//                   </span>
//                 </button>
//               ))}
//             </div>

//             <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-3">
//               <Video className="w-5 h-5 text-[#08704C]" />
//               مقطع الحي
//             </h3>
//             {offer.video && !videoFailed ? (
//               <video
//                 key={offer.video}
//                 src={offer.video}
//                 controls
//                 playsInline
//                 preload="metadata"
//                 onError={() => setVideoFailed(true)}
//                 className="w-full aspect-video rounded-2xl bg-black"
//               />
//             ) : (
//               <div className="aspect-video rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 font-semibold">
//                 سيتم إضافة مقطع الحي قريبًا
//               </div>
//             )}

//             {/* الانتقال للموقع السابق / التالي */}
//             <div className="mt-8 flex items-center justify-between gap-3">
//               <button
//                 type="button"
//                 onClick={() => goSite(-1)}
//                 className="inline-flex items-center gap-2 rounded-full border-2 border-[#08704C]/20 px-5 py-2.5 font-bold text-[#08704C] hover:bg-[#08704C] hover:text-white transition-colors"
//               >
//                 <ChevronRight className="w-5 h-5" />
//                 {offers[(open! - 1 + offers.length) % offers.length].title}
//               </button>
//               <span className="text-sm font-semibold text-gray-500">
//                 {open! + 1} / {offers.length}
//               </span>
//               <button
//                 type="button"
//                 onClick={() => goSite(1)}
//                 className="inline-flex items-center gap-2 rounded-full border-2 border-[#08704C]/20 px-5 py-2.5 font-bold text-[#08704C] hover:bg-[#08704C] hover:text-white transition-colors"
//               >
//                 {offers[(open! + 1) % offers.length].title}
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* الصورة المكبّرة مع أسهم التنقل */}
//           {zoom !== null && (
//             <div
//               className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 animate-[lbFade_.2s_ease-out]"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setZoom(null);
//               }}
//             >
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 key={zoom}
//                 src={offer.photos[zoom]}
//                 alt={`${offer.title}: صورة ${zoom + 1}`}
//                 onClick={(e) => e.stopPropagation()}
//                 className="max-h-[85vh] max-w-full rounded-xl shadow-2xl animate-[lbZoom_.3s_ease-out]"
//               />
//               <button type="button" aria-label="إغلاق" onClick={() => setZoom(null)} className="absolute top-4 right-4 bg-white/15 hover:bg-white/30 rounded-full p-2">
//                 <X className="w-7 h-7 text-white" />
//               </button>
//               <button
//                 type="button"
//                 aria-label="الصورة السابقة"
//                 onClick={(e) => { e.stopPropagation(); goPhoto(-1); }}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 rounded-full p-3"
//               >
//                 <ChevronRight className="w-8 h-8 text-white" />
//               </button>
//               <button
//                 type="button"
//                 aria-label="الصورة التالية"
//                 onClick={(e) => { e.stopPropagation(); goPhoto(1); }}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 rounded-full p-3"
//               >
//                 <ChevronLeft className="w-8 h-8 text-white" />
//               </button>
//               <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 font-semibold">
//                 {zoom + 1} / {offer.photos.length}
//               </span>
//             </div>
//           )}
//         </div>
//       )}

//       {/* الحركات */}
//       <style jsx global>{`
//         @keyframes lbUp { from { opacity: 0; transform: translateY(40px) scale(.96) } to { opacity: 1; transform: none } }
//         @keyframes lbFloat { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-3px) } }
//         @keyframes lbDrift { from { background-position: 0 0 } to { background-position: 36px 36px } }
//         @keyframes lbShine { 0% { left: -50% } 60%, 100% { left: 130% } }
//         @keyframes lbDrop { 0% { opacity: 0; transform: translateY(-50px) } 60% { opacity: 1; transform: translateY(0) } 80% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
//         @keyframes lbBounce { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
//         @keyframes lbShadow { 0%, 100% { transform: scale(1); opacity: .35 } 50% { transform: scale(1.5); opacity: .15; box-shadow: 0 0 0 6px rgba(230,202,141,.4) } }
//         @keyframes lbFade { from { opacity: 0 } to { opacity: 1 } }
//         @keyframes lbZoom { from { opacity: 0; transform: scale(.92) translateY(20px) } to { opacity: 1; transform: none } }
//         @keyframes lbStamp { 0% { opacity: 0; transform: rotate(45deg) scale(1.6) } 70% { opacity: 1; transform: rotate(45deg) scale(.95) } 100% { opacity: 1; transform: rotate(45deg) scale(1) } }
//         @media (prefers-reduced-motion: reduce) { * { animation: none !important } }
//       `}</style>
//     </PageShell>
//   );
// }

import { useEffect, useState } from "react";
import NextImage from "next/image";
import { BadgeCheck, ChevronLeft, ChevronRight, ExternalLink, Lock, MapPin, MapPinned, PlayCircle, Video, X, ZoomIn } from "lucide-react";
import { PageShell } from "@/components/PageShell";

// ===== بيانات الصفحة: عدّل هنا فقط =====
// الصور داخل public/land-bank باسم 1.jpg و 2.jpg ...  (كل موقع له صورتين: رقم الشريحة 3 و 4 من شرائحه)
// المقاطع داخل public/land-bank/videos باسم 1.mp4 و 2.mp4 ... (رقم المقطع = رقم الموقع)
// إذا المقطع مو موجود يظهر مكانه "سيتم إضافة مقطع الحي قريبًا"
const img = (n: number) => `/land-bank/${n}.jpg`;
const vid = (n: number) => `/land-bank/videos/${n}.mp4`;

// صور الموقع رقم k: الصورتين 4k-1 و 4k  (الموقع 1 = 3 و 4، الموقع 2 = 7 و 8، ...)
const photosOf = (k: number) => [img(4 * k - 1), img(4 * k)];

// حالة الأرض (status):
//   "yaamur"  = تم الحجز  ← محجوزة لصالح جمعية يعمر (ختم ذهبي)
//   "other"   = محجوز     ← محجوزة لجهة أخرى غير جمعية يعمر (ختم رمادي)
//   "free"    = متاحة     ← بدون ختم
type Status = "yaamur" | "other" | "free";

// شرح الحالات: يظهر بخط صغير أعلى الصفحة وداخل نافذة كل موقع
const STATUS_INFO: Record<Exclude<Status, "free">, { label: string; note: string }> = {
  yaamur: { label: "تم الحجز", note: "محجوزة لصالح جمعية يعمر لبناء مسجد" },
  other: { label: "محجوز", note: "محجوزة لجهة أخرى غير جمعية يعمر" },
};

// باقي الأرقام (مسطح البناء ومساحة البناء والسعة) نفسها في كل المواقع، والمساحة تختلف
const stats = (land: string) => [
  { label: "مساحة الأرض", mosque: `${land} م²`, jami: `${land} م²` },
  { label: "مسطح البناء", mosque: "1,350 م²", jami: "1,812 م²" },
  { label: "مساحة البناء في المشروع", mosque: "1,071.5 م²", jami: "1,533.5 م²" },
  { label: "السعة الاستيعابية", mosque: "300 مصلٍ", jami: "650 مصلٍ" },
];

const offers: {
  title: string;
  name: string;
  plan: string;
  map: string;
  status: Status;
  stats: ReturnType<typeof stats>;
  photos: string[];
  video: string;
}[] = [
  {
    title: "الموقع الأول",
    name: "أرض مسجد / جامع – الإسكان الجنوبي \"البيرق\"",
    plan: "مخطط رقم 188/4/ع قطعة – 180م إسكان البيرق",
    map: "https://maps.app.goo.gl/nGAU1LcH9TCwUnWi6",
    status: "other",
    stats: stats("5,616"),
    photos: photosOf(1),
    video: vid(1),
  },
  {
    title: "الموقع الثاني",
    name: "أرض مسجد / جامع – الإسكان الجنوبي \"نساج تاون 2\"",
    plan: "مخطط رقم 1884/ع قطعة – 183م الموقع الأول نساج تاون 2",
    map: "https://maps.app.goo.gl/n7z92HqHMGw4Uz2D6",
    status: "other",
    stats: stats("5,372"),
    photos: photosOf(2),
    video: vid(2),
  },
  {
    title: "الموقع الثالث",
    name: "أرض مسجد / جامع – ضاحية الدمام الحي الثالث",
    plan: "مخطط 294 / 1 قطعة (خ18) الحي الثالث البيضاء ضاحية الدمام",
    map: "https://maps.app.goo.gl/Viy89aEVqjp5WRDQA",
    status: "free",
    stats: stats("2,625"),
    photos: photosOf(3),
    video: vid(3),
  },
  {
    title: "الموقع الرابع",
    name: "أرض مسجد / جامع – غرب الدمام حي الشعلة",
    plan: "مخطط ش د 1432 قطعة (خ 22) الدمام الشعلة",
    map: "https://maps.app.goo.gl/s2GVmeUJrgv2SuMo9",
    status: "yaamur",
    stats: stats("3,389.58"),
    photos: photosOf(4),
    video: vid(4),
  },
  {
    title: "الموقع الخامس",
    name: "أرض مسجد / جامع – جنوب غربي حي العزيزية",
    plan: "مخطط 2/277 | قطعة 13",
    map: "https://maps.app.goo.gl/Nk6YUqGcx7GZXsCL8",
    status: "free",
    stats: stats("2,000"),
    photos: photosOf(5),
    video: vid(5),
  },
  {
    title: "الموقع السادس",
    name: "أرض مسجد / جامع – الإسكان الشمالي \"نساج تاون 2\"",
    plan: "مخطط رقم 188/4/ع/س قطعة – 154م الموقع الثاني نساج تاون 2",
    map: "https://maps.app.goo.gl/dqosfs3889FB8grq7",
    status: "free",
    stats: stats("7,082"),
    photos: photosOf(6),
    video: vid(6),
  },
  {
    title: "الموقع السابع",
    name: "أرض مسجد / جامع – الإسكان الشمالي \"البيرق\"",
    plan: "مخطط رقم 4/188/ع/س قطعة – 171م الموقع الثاني إسكان البيرق",
    map: "https://maps.app.goo.gl/2dGcZCgXkfAodTrBA",
    status: "free",
    stats: stats("4,297"),
    photos: photosOf(7),
    video: vid(7),
  },
  {
    title: "الموقع الثامن",
    name: "أرض مسجد / جامع – ضاحية الدمام حي الأمانة",
    plan: "مخطط رقم 1/704 قطعة (خ62، خ63، خ64، م4ب) الأمانة",
    map: "https://maps.app.goo.gl/i9LJSTH1GT5vvsea9",
    status: "free",
    stats: stats("3,310"),
    photos: photosOf(8),
    video: vid(8),
  },
  {
    title: "الموقع التاسع",
    name: "أرض مسجد / جامع – ضاحية الدمام الحي السابع",
    plan: "مخطط رقم 1/294 قطعة (خ4) الحي السابع ضاحية الدمام",
    map: "https://maps.app.goo.gl/UU5f6AadMd9huaA76",
    status: "free",
    stats: stats("2,250"),
    photos: photosOf(9),
    video: vid(9),
  },
  {
    title: "الموقع العاشر",
    name: "أرض مسجد / جامع – ضاحية الدمام الحي العاشر",
    plan: "مخطط 294 / 1 قطعة (خ9) الحي العاشر البيضاء ضاحية الدمام",
    map: "https://maps.app.goo.gl/pPDFoLfp9M2fSBoBA",
    status: "free",
    stats: stats("3,900"),
    photos: photosOf(10),
    video: vid(10),
  },
  {
    title: "الموقع الحادي عشر",
    name: "أرض مسجد / جامع – ضاحية الدمام الحي التاسع",
    plan: "مخطط 294 / 1 قطعة (خ10، خ11، خ12) الحي التاسع البيضاء ضاحية الدمام",
    map: "https://maps.app.goo.gl/xtc2bn685CVzk4Fk7",
    status: "free",
    stats: stats("2,619"),
    photos: photosOf(11),
    video: vid(11),
  },
  {
    title: "الموقع الثاني عشر",
    name: "أرض مسجد / جامع – ضاحية الدمام الحي الرابع",
    plan: "مخطط 294 / 1 قطعة (خ16) الحي الرابع البيضاء ضاحية الدمام",
    map: "https://maps.app.goo.gl/1PStzCyz29mBcakt8",
    status: "free",
    stats: stats("1,800"),
    photos: photosOf(12),
    video: vid(12),
  },
];
// =======================================

type Offer = (typeof offers)[number];

// ختم الحالة: "تم الحجز" (ذهبي، يعمر) أو "محجوز" (رمادي، جهة أخرى)
function StatusStamp({ status, size = "md" }: { status: Status; size?: "sm" | "md" }) {
  if (status === "free") return null;
  const yaamur = status === "yaamur";
  const Icon = yaamur ? BadgeCheck : Lock;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-black shadow-lg ring-2 ${
        yaamur ? "bg-[#e6ca8d] text-[#003824] ring-white/70" : "bg-gray-500 text-white ring-white/50"
      } ${size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"}`}
    >
      <Icon className={size === "sm" ? "w-4 h-4" : "w-5 h-5"} />
      {STATUS_INFO[status].label}
    </span>
  );
}

// شرح الحالات بخط صغير
function StatusLegend() {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/80">
      <span className="inline-flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#e6ca8d]" />
        <b className="text-white">تم الحجز:</b> {STATUS_INFO.yaamur.note}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
        <b className="text-white">محجوز:</b> {STATUS_INFO.other.note}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full border border-white/70" />
        <b className="text-white">بدون ختم:</b> متاحة لمن أراد بناء بيت لله
      </span>
    </div>
  );
}

// البانر أعلى النافذة: العنوان + زر الموقع + أرقام الأرض
function Banner({ offer }: { offer: Offer }) {
  const rows = offer.stats.filter((s) => s.mosque || s.jami);
  const hasJami = rows.some((s) => s.jami);
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#08704C] via-[#0a5c40] to-[#003824] text-white p-5 md:p-7 mb-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.12) 1px, transparent 0)", backgroundSize: "18px 18px" }}
      />
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#e6ca8d]">
              <MapPinned className="w-4 h-4" />
              بنك الأراضي · {offer.title}
            </span>
            <StatusStamp status={offer.status} size="sm" />
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-black leading-snug">{offer.name || offer.title}</h2>
          {offer.plan && <p className="mt-1 text-white/80 text-sm">{offer.plan}</p>}
          {offer.status === "yaamur" && (
            <p className="mt-3 inline-block rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white/90">
              تم حجز هذه الأرض لصالح جمعية يعمر لبناء مسجد، جزى الله المتبرع خيرًا.
              <span className="block mt-0.5 text-xs font-normal text-white/70">البيانات معروضة للاطلاع.</span>
            </p>
          )}
          {offer.status === "other" && (
            <p className="mt-3 inline-block rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white/90">
              هذه الأرض محجوزة لجهة أخرى.
              <span className="block mt-0.5 text-xs font-normal text-white/70">الحجز ليس لصالح جمعية يعمر، والبيانات معروضة للاطلاع فقط.</span>
            </p>
          )}
        </div>
        {offer.map && (
          <a
            href={offer.map}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 self-start md:self-center rounded-full bg-[#e6ca8d] text-[#003824] font-bold px-5 py-2.5 shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all"
          >
            <MapPin className="w-5 h-5" />
            موقع الأرض
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {rows.length > 0 && (
        <div className="relative mt-6 overflow-hidden rounded-2xl bg-white text-gray-900 shadow-lg">
          <table className="w-full text-center text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-[#86a886] text-white">
                <th className="py-3 px-3 font-bold">البند</th>
                <th className="py-3 px-3 font-bold">مسجد</th>
                {hasJami && <th className="py-3 px-3 font-bold">جامع</th>}
              </tr>
            </thead>
            <tbody>
              {rows.map((s, i) => (
                <tr key={s.label} className={i % 2 ? "bg-[#f3f6f1]" : "bg-white"}>
                  <td className="py-3 px-3 font-semibold text-[#08704C]">{s.label}</td>
                  <td className="py-3 px-2 md:px-3 font-bold whitespace-nowrap">{s.mosque || "—"}</td>
                  {hasJami && <td className="py-3 px-2 md:px-3 font-bold whitespace-nowrap">{s.jami || "—"}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// دبوس خريطة فيه مسجد: يسقط وينط لما تفتح الصفحة، وينط من جديد لما تمر بالماوس
function MosquePin({ delay }: { delay: number }) {
  return (
    <span className="absolute top-3 left-4 z-10 flex flex-col items-center" style={{ animation: `lbDrop 4s ease-in-out ${delay}ms both` }}>
      <span className="group-hover:animate-[lbBounce_3s_ease-in-out]">
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
      <span className="mt-0.5 h-1.5 w-6 rounded-full bg-black/30 animate-[lbShadow_6s_ease-in-out_infinite]" />
    </span>
  );
}

// غلاف المربع: تصميم بدل الصورة (رقم الموقع + رسمة مسجد)، وشريط مائل حسب الحالة
function Cover({ n, status }: { n: number; status: Status }) {
  // التأخير يتكرر كل 6 مربعات عشان آخر المواقع ما تتأخر كثير
  const delay = 400 + ((n - 1) % 6) * 500;
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#08704C] via-[#0a5c40] to-[#003824]">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.14) 1px, transparent 0)", backgroundSize: "18px 18px", animation: "lbDrift 12s linear infinite" }}
      />
      {/* لمعة تمر على المربع */}
      <span className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] animate-[lbShine_8s_ease-in-out_infinite]" />
      <svg
        viewBox="0 0 400 120"
        fill="currentColor"
        className="absolute bottom-0 inset-x-0 w-full text-white/15 group-hover:text-white/30 transition-colors duration-500 animate-[lbFloat_14s_ease-in-out_infinite]"
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
      <MosquePin delay={delay} />
      <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-sm font-bold text-white">
        <span className="relative flex w-4 h-4 items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#e6ca8d] opacity-75 animate-ping" />
          <MapPin className="relative w-4 h-4" />
        </span>
        حاضرة الدمام
      </span>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white pb-20">
        <span className="text-7xl font-black drop-shadow-lg group-hover:scale-125 group-hover:text-[#e6ca8d] transition-all duration-500">{n}</span>
        <span className="mt-1 font-bold text-[#e6ca8d]">
          {status === "yaamur" ? "تم حجزها لصالح جمعية يعمر" : status === "other" ? "محجوزة لجهة أخرى" : "أرض مقترحة لبناء مسجد"}
        </span>
      </div>
      {/* شريط مائل على زاوية المربع */}
      {status !== "free" && (
        <span
          className={`absolute bottom-6 -left-12 z-20 w-48 rotate-45 text-center text-sm font-black py-1.5 shadow-lg ring-1 ${
            status === "yaamur" ? "bg-[#e6ca8d] text-[#003824] ring-white/60" : "bg-gray-500 text-white ring-white/40"
          }`}
          style={{ animation: "lbStamp .6s ease-out both", animationDelay: `${delay + 200}ms` }}
        >
          {status === "yaamur" ? "تم الحجز ✓" : "محجوز 🔒"}
        </span>
      )}
    </div>
  );
}

export default function Page() {
  const [open, setOpen] = useState<number | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [zoom, setZoom] = useState<number | null>(null); // الصورة المكبّرة داخل النافذة
  const offer = open === null ? null : offers[open];
  const yaamurCount = offers.filter((o) => o.status === "yaamur").length;
  const otherCount = offers.filter((o) => o.status === "other").length;
  const freeCount = offers.length - yaamurCount - otherCount;

  // التنقل بين المواقع (السابق/التالي) بدون ما تقفل النافذة
  const goSite = (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + offers.length) % offers.length));
  // التنقل بين الصور المكبّرة
  const goPhoto = (dir: 1 | -1) =>
    setZoom((z) => (z === null || !offer ? z : (z + dir + offer.photos.length) % offer.photos.length));

  // Esc يقفل، والأسهم في الكيبورد تنقلك: بين الصور إذا فيه صورة مكبّرة، وإلا بين المواقع
  useEffect(() => {
    setVideoFailed(false);
    setZoom(null);
    if (open === null) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") (zoom !== null ? setZoom(null) : setOpen(null));
      if (e.key === "ArrowLeft") (zoom !== null ? goPhoto(1) : goSite(1));
      if (e.key === "ArrowRight") (zoom !== null ? goPhoto(-1) : goSite(-1));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, zoom]);

  return (
    <PageShell title="بنك الأراضي" description="أراضٍ مقترحة لبناء المساجد في حاضرة الدمام" Icon={MapPinned}>
      {/* ملخص الحالات */}
      <div className="mb-3 flex flex-wrap items-center gap-3 text-white font-semibold">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5">
          <MapPinned className="w-5 h-5 text-[#e6ca8d]" />
          {offers.length} أرضًا مقترحة
        </span>
        {yaamurCount > 0 && (
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e6ca8d] text-[#003824] px-4 py-1.5">
            <BadgeCheck className="w-5 h-5" />
            تم الحجز: {yaamurCount}
          </span>
        )}
        {otherCount > 0 && (
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-500 text-white px-4 py-1.5">
            <Lock className="w-4 h-4" />
            محجوز: {otherCount}
          </span>
        )}
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5">متاح: {freeCount}</span>
      </div>

      {/* شرح الحالات بخط صغير */}
      <StatusLegend />

      {/* المربعات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((o, i) => (
          <button
            key={o.title}
            type="button"
            onClick={() => setOpen(i)}
            style={{ animation: `lbUp .7s ease-out ${(i % 6) * 120}ms both` }}
            className="group text-right bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#08704C] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <Cover n={i + 1} status={o.status} />
            <div className="p-5 text-center">
              <h2 className="flex items-center justify-center gap-2 text-xl font-bold text-gray-900 group-hover:text-[#08704C] mb-1">
                {o.title}
                <StatusStamp status={o.status} size="sm" />
              </h2>
              {o.status !== "free" && <p className="mb-2 text-xs text-gray-500">{STATUS_INFO[o.status].note}</p>}
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
          key={open}
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
              className="absolute top-8 left-8 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <Banner offer={offer} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {offer.photos.map((p, j) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setZoom(j)}
                  className="group/ph relative block aspect-video rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src={p}
                    alt={`${offer.title}: صورة ${j + 1}`}
                    fill
                    className="object-cover group-hover/ph:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute inset-0 bg-[#08704C]/0 group-hover/ph:bg-[#08704C]/30 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover/ph:opacity-100 transition-opacity" />
                  </span>
                </button>
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

            {/* الانتقال للموقع السابق / التالي */}
            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => goSite(-1)}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#08704C]/20 px-5 py-2.5 font-bold text-[#08704C] hover:bg-[#08704C] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
                {offers[(open! - 1 + offers.length) % offers.length].title}
              </button>
              <span className="text-sm font-semibold text-gray-500">
                {open! + 1} / {offers.length}
              </span>
              <button
                type="button"
                onClick={() => goSite(1)}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#08704C]/20 px-5 py-2.5 font-bold text-[#08704C] hover:bg-[#08704C] hover:text-white transition-colors"
              >
                {offers[(open! + 1) % offers.length].title}
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* الصورة المكبّرة مع أسهم التنقل */}
          {zoom !== null && (
            <div
              className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 animate-[lbFade_.2s_ease-out]"
              onClick={(e) => {
                e.stopPropagation();
                setZoom(null);
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={zoom}
                src={offer.photos[zoom]}
                alt={`${offer.title}: صورة ${zoom + 1}`}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-full rounded-xl shadow-2xl animate-[lbZoom_.3s_ease-out]"
              />
              <button type="button" aria-label="إغلاق" onClick={() => setZoom(null)} className="absolute top-4 right-4 bg-white/15 hover:bg-white/30 rounded-full p-2">
                <X className="w-7 h-7 text-white" />
              </button>
              <button
                type="button"
                aria-label="الصورة السابقة"
                onClick={(e) => { e.stopPropagation(); goPhoto(-1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 rounded-full p-3"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
              <button
                type="button"
                aria-label="الصورة التالية"
                onClick={(e) => { e.stopPropagation(); goPhoto(1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 rounded-full p-3"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 font-semibold">
                {zoom + 1} / {offer.photos.length}
              </span>
            </div>
          )}
        </div>
      )}

      {/* الحركات */}
      <style jsx global>{`
        @keyframes lbUp { from { opacity: 0; transform: translateY(40px) scale(.96) } to { opacity: 1; transform: none } }
        @keyframes lbFloat { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-3px) } }
        @keyframes lbDrift { from { background-position: 0 0 } to { background-position: 36px 36px } }
        @keyframes lbShine { 0% { left: -50% } 60%, 100% { left: 130% } }
        @keyframes lbDrop { 0% { opacity: 0; transform: translateY(-50px) } 60% { opacity: 1; transform: translateY(0) } 80% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
        @keyframes lbBounce { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
        @keyframes lbShadow { 0%, 100% { transform: scale(1); opacity: .35 } 50% { transform: scale(1.5); opacity: .15; box-shadow: 0 0 0 6px rgba(230,202,141,.4) } }
        @keyframes lbFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lbZoom { from { opacity: 0; transform: scale(.92) translateY(20px) } to { opacity: 1; transform: none } }
        @keyframes lbStamp { 0% { opacity: 0; transform: rotate(45deg) scale(1.6) } 70% { opacity: 1; transform: rotate(45deg) scale(.95) } 100% { opacity: 1; transform: rotate(45deg) scale(1) } }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important } }
      `}</style>
    </PageShell>
  );
}