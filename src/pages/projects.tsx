// import { ExternalLink, Landmark } from "lucide-react";
// import { PageShell } from "@/components/PageShell";
// import { navLinks } from "@/data/navLinks";

// const page = navLinks[2];

// // مشاريع البناء: لإضافة مسجد جديد انسخ سطرًا وغيّر الاسم والرابط
// const mosques = [
//   { name: "مسجد الأطباء", href: "https://yaamur-get.github.io/bathD/" },
//   { name: "مسجد الضباط", href: "https://yaamur-get.github.io/thbat/" },
//   { name: "جامع الضاحية", href: "https://yaamur-get.github.io/bathDhi/" },
// ];

// export default function Page() {
//   return (
//     <PageShell title={page.label} description={page.description} Icon={page.Icon}>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {mosques.map(({ name, href }) => (
//           <a
//             key={href}
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group bg-white rounded-3xl border-2 border-gray-100 hover:border-[#08704C] shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
//           >
//             <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-2xl flex items-center justify-center">
//               <Landmark className="w-8 h-8 text-white" />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#08704C] mb-3">{name}</h2>
//             <span className="inline-flex items-center gap-2 text-[#08704C] font-semibold">
//               عرض المشروع
//               <ExternalLink className="w-4 h-4" />
//             </span>
//           </a>
//         ))}
//       </div>
//     </PageShell>
//   );
// }


import { ArrowLeft, PenTool, HardHat, Settings, type LucideIcon } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { navLinks } from "@/data/navLinks";

const page = navLinks[0];

// مراحل المشاريع: كل مربع يفتح صفحة خاصة به
const stages: Array<{ name: string; description: string; href: string; Icon: LucideIcon }> = [
  { name: "مشاريع في مرحلة التصاميم", description: "مشاريع يجري إعداد تصاميمها ومخططاتها", href: "/projects-design", Icon: PenTool },
  { name: "مشاريع في مرحلة التنفيذ", description: "مشاريع يجري بناؤها الآن", href: "/projects-execution", Icon: HardHat },
  { name: "مشاريع في مرحلة التشغيل", description: "مشاريع مكتملة وتعمل حاليًا", href: "/projects-operation", Icon: Settings },
];

export default function Page() {
  return (
    <PageShell title={page.label} description={page.description} Icon={page.Icon}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stages.map(({ name, description, href, Icon }) => (
          <a
            key={href}
            href={href}
            className="group bg-white rounded-3xl border-2 border-gray-100 hover:border-[#08704C] shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#08704C] mb-3">{name}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <span className="inline-flex items-center gap-2 text-[#08704C] font-semibold">
              عرض المشاريع
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}