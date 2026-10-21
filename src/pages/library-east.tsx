import NextImage from "next/image";
import { ArrowLeft, ArrowRight, FileText, Landmark } from "lucide-react";
import { PageShell } from "@/components/PageShell";

// ملفات عمارة الساحل الشرقي: href = ملف الـ PDF، و image = صورة الغلاف (حطهم داخل public/designs)
// إذا ما حطيت صورة اكتب image: "" ويطلع مكانها أيقونة
const files = [
  { name: "الدليل التطبيقي للمباني منخفضة الارتفاع", href: "/designs/sharqi1.pdf", image: "/designs/sahel.png" },
  { name: "الموجهات التصميمية للساحل الشرقي", href: "/designs/sharqi2.pdf", image: "/designs/sahel.png" },
];

export default function Page() {
  return (
    <PageShell title="عمارة الساحل الشرقي" description="دليل الطابع العمراني لمساجد الساحل الشرقي" Icon={Landmark}>
      <a href="/articles" className="inline-flex items-center gap-2 mb-6 text-white font-semibold hover:underline">
        <ArrowRight className="w-4 h-4 text-white" />
        العودة للمكتبة
      </a>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {files.map(({ name, href, image }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl border-2 border-gray-100 hover:border-[#08704C] shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-52 bg-gradient-to-br from-[#08704C] to-[#00A186] flex items-center justify-center overflow-hidden">
              {image ? (
                <NextImage src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <FileText className="w-14 h-14 text-white" />
              )}
            </div>
            <div className="px-4 py-6 text-center">
              <h2 className="text-[clamp(14px,1.5vw,22px)] font-bold text-gray-900 group-hover:text-[#08704C] mb-2 whitespace-nowrap">{name}</h2>
              
              <span className="inline-flex items-center gap-2 text-[#08704C] font-semibold">
                فتح الملف
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}