

import NextImage from "next/image";
import Link from "next/link";
import { Check, ExternalLink, Landmark, Settings } from "lucide-react";
import { PageShell } from "@/components/PageShell";

type Status = "done" | "current" | "next";

// مشاريع مرحلة التشغيل: لإضافة مشروع انسخ قوسًا كاملًا { ... } وغيّر البيانات
// page = صفحة الجامع الخاصة، href = ملف PDF
// حالة كل بند: "done" = منجز (أخضر)، "current" = يحدث الآن (برتقالي)، "next" = لم يبدأ (رمادي)
const projects: Array<{ name: string; page: string; href: string; image?: string; stages: Array<{ label: string; status: Status }> }> = [
  {
    name: "جامع منيرة الهاجري - حي ابن خلدون ",
    page: "/operation-munira",
    href: "/designs/munira.pdf",
    image: "/designs/mu.png",
    stages: [
      { label: "الفحص المبدئي", status: "done" },
      { label: "الاستلام الابتدائي", status: "done" },
      { label: "الاستلام النهائي", status: "done" },
      { label: "التسليم للوزارة", status: "current" },
      { label: "التشغيل المستمر", status: "next" },
    ],
  },
  {
    name: "مسجد محمد الفوزان رحمه الله - حي المنار",
    page: "/operation-fuzan",
    href: "/designs/op2.pdf",
    image: "/designs/fuzan.png",
    stages: [
      { label: "الفحص المبدئي", status: "done" },
      { label: "الاستلام الابتدائي", status: "done" },
      { label: "الاستلام النهائي", status: "done" },
      { label: "التسليم للوزارة", status: "done" },
      { label: "التشغيل المستمر", status: "current" },
    ],
  },
];

const pillStyle: Record<Status, string> = {
  done: "bg-[#08704C] text-white border-[#08704C]",
  current: "bg-amber-50 text-amber-700 border-amber-400 animate-pulse",
  next: "bg-gray-50 text-gray-400 border-gray-200",
};

export default function Page() {
  return (
    <PageShell title="مشاريع في مرحلة التشغيل" description="مشاريع مكتملة وتعمل حاليًا" Icon={Settings}>
      <div className="mb-6">
        <a href="/projects" className="text-white/90 hover:text-white font-semibold">→ الرجوع إلى متابعة المشاريع</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map(({ name, page, href, image, stages }, i) => {
          const doneCount = stages.filter((s) => s.status === "done").length;
          const percent = Math.round((doneCount / stages.length) * 100);
          return (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
              <Link href={page} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#08704C] to-[#00A186] flex items-center justify-center">
                  {image ? (
                    <NextImage src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <Landmark className="w-16 h-16 text-white" />
                  )}
                </div>
                <div className="px-5 pt-5 text-center">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#08704C] mb-1">{name}</h2>
                </div>
              </Link>
              <div className="text-center">
                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#08704C] font-semibold text-sm hover:underline">
                  عرض الملف PDF
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="p-5 mt-auto">
                <div className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-2">
                  <span>البنود الفرعية</span>
                  <span className="text-[#08704C]">{percent}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-gradient-to-l from-[#08704C] to-[#00A186] rounded-full transition-all duration-700" style={{ width: `${percent}%` }} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {stages.map((s) => (
                    <span key={s.label} className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full border text-xs font-semibold ${pillStyle[s.status]}`}>
                      {s.status === "done" && <Check className="w-3 h-3" />}
                      {s.label}
                      {s.status === "current" && <span className="mr-1">• يحدث الآن</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}
