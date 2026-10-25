import NextImage from "next/image";
import { ArrowLeft, FileText } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { navLinks } from "@/data/navLinks";

const page = navLinks[3];

// ملفات المكتبة: href = ملف الـ PDF أو صفحة، و image = صورة الغلاف (حطهم داخل public/designs)
// إذا ما حطيت صورة اكتب image: "" ويطلع مكانها أيقونة
const files = [
  { name: "عمارة الساحل الشرقي", description: "دليل الطابع العمراني لمساجد الساحل الشرقي", href: "/library-east", image: "/designs/article1.png" },
  { name: "الأدلة الفنية لبناء وتطوير المساجد", description: "الأدلة والمواصفات الفنية لبناء المساجد وتطويرها", href: "/library-guides", image: "/designs/article2.png" },
  { name: "معايير واشتراطات المساجد", description: "معايير واشتراطات فرع الوزارة بالمنطقة الشرقية", href: "/library-standards", image: "/designs/article3.png" },
];

export default function Page() {
  return (
    <PageShell title={page.label} description={page.description} Icon={page.Icon}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {files.map(({ name, description, href, image }) => (
          <a
            key={href}
            href={href}
            target={href.endsWith(".pdf") ? "_blank" : undefined}
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
              <p className="text-gray-600 mb-4">{description}</p>
              <span className="inline-flex items-center gap-2 text-[#08704C] font-semibold">
                {href.endsWith(".pdf") ? "فتح الملف" : "عرض الملفات"}
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}