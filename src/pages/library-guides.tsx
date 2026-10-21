import NextImage from "next/image";
import { ArrowLeft, ArrowRight, FileText, BookOpen } from "lucide-react";
import { PageShell } from "@/components/PageShell";

// ملفات الأدلة الفنية لبناء وتطوير المساجد: href = ملف الـ PDF، و image = صورة الغلاف (حطهم داخل public/designs)
// إذا ما حطيت صورة اكتب image: "" ويطلع مكانها أيقونة
const files = [
  { name: "مقدمة الأدلة الفنية لبناء وتطوير المساجد",  href: "/designs/dl1.pdf", image: "/designs/dl.png" },
  { name: "الاشتراطات الشرعية",  href: "/designs/dl2.pdf", image: "/designs/dl.png" },
  { name: "اشتراطات التخطيط العمراني",  href: "/designs/dl3.pdf", image: "/designs/dl3.png" },
  { name: " الاشتراطات المعمارية، والكماليات والمكملات",  href: "/designs/dl4.pdf", image: "/designs/dl4.png" },
  { name: "الاشتراطات الإنشائية",  href: "/designs/dl5.pdf", image: "/designs/dl5.png" },
  { name: "اشتراطات ترشيد الطاقة ",  href: "/designs/dl6.pdf", image: "/designs/dl6.png" },
  { name: " الاشتراطات الميكانيكية",  href: "/designs/dl7.pdf", image: "/designs/dl7.png" },
  { name: "الاشتراطات الكهربائية",  href: "/designs/dl8.pdf", image: "/designs/dl8.png" },
  { name: " اشتراطات الإضاءة",  href: "/designs/dl9.pdf", image: "/designs/dl9.png" },
  { name: "اشتراطات الحماية من الحريق",  href: "/designs/dl10.pdf", image: "/designs/dl10.png" },
  { name: "الاشتراطات الصحية",  href: "/designs/dl11.pdf", image: "/designs/dl11.png" },
  { name: "اشتراطات التشغيل والصيانة",  href: "/designs/dl12.pdf", image: "/designs/dl12.png" },
];

export default function Page() {
  return (
    <PageShell title="الأدلة الفنية لبناء وتطوير المساجد" description="الأدلة والمواصفات الفنية لبناء المساجد وتطويرها" Icon={BookOpen}>
      <a href="/articles" className="inline-flex items-center gap-2 mb-6 text-white  font-semibold hover:underline">
        <ArrowRight className="w-4 h-4" />
        العودة للمكتبة
      </a>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {files.map(({ name,  href, image }) => (
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