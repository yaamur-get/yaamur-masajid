import NextImage from "next/image";
import { Check, ExternalLink, Landmark, PenTool } from "lucide-react";
import { PageShell } from "@/components/PageShell";

type Status = "done" | "current" | "next";

// مشاريع مرحلة التصاميم: لإضافة مشروع انسخ قوسًا كاملًا { ... } وغيّر البيانات
// حالة كل بند: "done" = منجز (أخضر)، "current" = يحدث الآن (برتقالي)، "next" = لم يبدأ (رمادي)
const projects: Array<{ name: string; href: string; image?: string; stages: Array<{ label: string; status: Status }> }> = [
  {
    name: "جامع أمهات المؤمنين - حي النورس ",
       href: "/designs/alnawras.pdf",
       image: "/designs/nn.png",
    stages: [
      { label: "توقيع العقود مع التبرع", status: "done" },
      { label: "تعبئة النماذج ", status: "done" },
      { label: "االتصاميم ", status: "done" },
      { label: "اصدار الرخص ", status: "done" },
      { label: "تسعير المقاولين", status: "done" },
      { label: "تحليل العروض", status: "current" },
      { label: "التعاقد مع المقاول", status: "next" },
    ],
  },
  {
    name: "جامع سارة المساعد - حي غرناطة",
    href: "/designs/saara.pdf",
    image: "/designs/s.png",
    stages: [
       { label: "توقيع العقود مع التبرع", status: "done" },
      { label: "تعبئة النماذج ", status: "done" },
      { label: "االتصاميم ", status: "done" },
      { label: "اصدار الرخص ", status: "current" },
      { label: "تسعير المقاولين", status: "next" },
      { label: "تحليل العروض", status: "next" },
      { label: "التعاقد مع المقاول", status: "next" },
    ],
  },
  {
    name: "مسجد الحي العاشر - حي الضاحية ",
    href: "/designs/he10.pdf",
    image: "/designs/alashir-photo.png",
    stages: [
        { label: "توقيع العقود مع التبرع", status: "done" },
      { label: "تعبئة النماذج ", status: "done" },
      { label: "االتصاميم ", status: "current" },
      { label: "اصدار الرخص ", status: "next" },
      { label: "تسعير المقاولين", status: "next" },
      { label: "تحليل العروض", status: "next" },
      { label: "التعاقد مع المقاول", status: "next" },
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
    <PageShell title="مشاريع في مرحلة التصاميم" description="مشاريع يجري إعداد تصاميمها ومخططاتها" Icon={PenTool}>
      <div className="mb-6">
        <a href="/projects" className="text-white/90 hover:text-white font-semibold">→ الرجوع إلى متابعة المشاريع</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ name, href, image, stages }, i) => {
          const doneCount = stages.filter((s) => s.status === "done").length;
          const percent = Math.round((doneCount / stages.length) * 100);
          return (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
              <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#08704C] to-[#00A186] flex items-center justify-center">
                  {image ? (
                    <NextImage src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <Landmark className="w-16 h-16 text-white" />
                  )}
                </div>
                <div className="px-5 pt-5 text-center">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#08704C] mb-1">{name}</h2>
                  <span className="inline-flex items-center gap-2 text-[#08704C] font-semibold text-sm">
                    عرض التصميم PDF
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </a>

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