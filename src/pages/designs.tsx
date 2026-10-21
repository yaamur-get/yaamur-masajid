import NextImage from "next/image";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { navLinks } from "@/data/navLinks";

const page = navLinks[1];

// ملفات التصاميم: ضع الـ PDF والصورة في public/designs ثم انسخ سطرًا وغيّر الاسم والروابط
const designs = [
  { name: "مسجد الأطباء - اسكان الدمام الجنوبي ", href: "/designs/atibba.pdf", image: "/designs/atibba.png" },
  { name: "جامع الضاحية - حي الضاحية", href: "/designs/dhi.pdf", image: "/designs/dhi.png" },
  { name: "جامع الضباط - اسكان الدمام الشمالي ", href: "/designs/d.pdf", image: "/designs/d.png" },
  // { name: "مسجد الا", href: "/designs/alnawras.pdf", image: "/designs/n" },
];

export default function Page() {
  return (
    <PageShell title={page.label} description={page.description} Icon={page.Icon}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
        {designs.map(({ name, href, image }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#08704C] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <NextImage
                src={image}
                alt={name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#08704C] mb-2">{name}</h2>
              <span className="inline-flex items-center gap-2 text-[#08704C] font-semibold">
                عرض التصميم PDF
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}