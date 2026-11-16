
import NextImage from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Landmark,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";

const files = [
  {
    name: "الدليل التطبيقي للمباني منخفضة الارتفاع",
    href: "/designs/sharqi1.pdf",
    image: "/designs/sahel.png",
  },
  {
    name: "الدليل التطبيقي للمباني منخفضة الارتفاع",
    href: "/designs/SDS.pdf",
    image: "/designs/ssds.png",
  },
  {
    name: "الموجهات التصميمية للساحل الشرقي",
    href: "/designs/sharqi2.pdf",
    image: "/designs/sahel.png",
  },
];

export default function Page() {
  return (
    <PageShell
      title="عمارة الساحل الشرقي"
      description="دليل الطابع العمراني لمساجد الساحل الشرقي"
      Icon={Landmark}
    >
      <a
        href="/articles"
        className="mb-6 inline-flex items-center gap-2 font-semibold text-white hover:underline"
      >
        <ArrowRight className="h-4 w-4 text-white" />
        العودة للمكتبة
      </a>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        {files.map(({ name, href, image }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border-2 border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#08704C] hover:shadow-2xl"
          >
            {/* صورة الغلاف */}
            <div className="relative flex h-52 shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-[#08704C] to-[#00A186]">
              {image ? (
                <NextImage
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <FileText className="h-14 w-14 text-white" />
              )}
            </div>

            {/* عنوان الملف وزر الفتح */}
            <div className="flex flex-1 flex-col items-center px-4 py-6 text-center">
              <h2 className="mb-4 flex min-h-[64px] w-full items-center justify-center text-center text-lg font-bold leading-relaxed text-gray-900 break-words transition-colors group-hover:text-[#08704C] sm:text-xl">
                {name}
              </h2>

              <span className="mt-auto inline-flex items-center gap-2 font-semibold text-[#08704C]">
                فتح الملف
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
