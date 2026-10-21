import NextImage from "next/image";
import { ArrowLeft, ArrowRight, FileText, ClipboardCheck } from "lucide-react";
import { PageShell } from "@/components/PageShell";

// ملفات معايير واشتراطات المساجد: href = ملف الـ PDF، و image = صورة الغلاف (حطهم داخل public/designs)
// إذا ما حطيت صورة اكتب image: "" ويطلع مكانها أيقونة
const files = [
  { name: "أساسيات عند الكشف على المخططات المعمارية ", href: "/designs/lib4.pdf", image: "/designs/lib3.png" },
  { name: "الأنظمة والمعايير والاشتراطات ", href: "/designs/lib5.pdf", image: "/designs/maair.png" },
  { name: " انشاء المواضئ الخارجية.", href: "/designs/lib6.pdf", image: "/designs/moad.png" },
];

export default function Page() {
  return (
    <PageShell title="معايير واشتراطات المساجد" description="معايير واشتراطات فرع الوزارة بالمنطقة الشرقية" Icon={ClipboardCheck}>
      <a href="/articles" className="inline-flex items-center gap-2 mb-6 text-white  font-semibold hover:underline">
        <ArrowRight className="w-4 h-4" />
        العودة للمكتبة
      </a>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#08704C] mb-2">{name}</h2>
              
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