import NextImage from "next/image";
import { ExternalLink, HardHat } from "lucide-react";
import { PageShell } from "@/components/PageShell";

// مشاريع التنفيذ: لإضافة مسجد جديد انسخ سطرًا وغيّر الاسم والرابط والصورة
const mosques = [
  { name: "مسجد الأطباء - اسكان الدمام الجنوبي", href: "https://yaamur-get.github.io/bathD/", image: "/designs/atibba.png" },
  { name: "جامع الضباط - اسكان الدمام الشمالي", href: "https://yaamur-get.github.io/thbat/", image: "/designs/d.png" },
  { name: "جامع الضاحية - حي الضاحية", href: "https://yaamur-get.github.io/bathDhi/", image: "/designs/dhi.png" },
];

export default function Page() {
  return (
    <PageShell title="مشاريع في مرحلة التنفيذ" description="مشاريع يجري بناؤها الآن" Icon={HardHat}>
      <div className="mb-6">
        <a href="/projects" className="text-white/90 hover:text-white font-semibold">→ الرجوع إلى متابعة المشاريع</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mosques.map(({ name, href, image }) => (
          <a
            key={href}
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
            <div className="px-4 py-5 text-center">
              <h2 className="text-[clamp(14px,1.4vw,22px)] font-bold text-gray-900 group-hover:text-[#08704C] mb-2 whitespace-nowrap">{name}</h2>
              <span className="inline-flex items-center gap-2 text-[#08704C] font-semibold">
                عرض المشروع
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}