// import type { ReactNode } from "react";
// import Head from "next/head";
// import type { LucideIcon } from "lucide-react";
// import SiteFooter from "@/components/SiteFooter";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import { ScrollReveal } from "@/components/ScrollReveal";

// interface PageShellProps {
//   title: string;
//   description: string;
//   Icon: LucideIcon;
//   children?: ReactNode;
// }

// // قالب موحد للصفحات الداخلية: عنوان + وصف + المحتوى
// export function PageShell({ title, description, Icon, children }: PageShellProps) {
//   return (
//     <>
//       <Head>
//         <title>{`${title} | جمعية يعمر للعناية بالمساجد`}</title>
//         <meta name="description" content={description} />
//       </Head>

//       <div className="min-h-screen yaamur-bg" dir="rtl">
//         <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
//           <div className="container mx-auto relative z-10 text-center">
//             <ScrollReveal>
//               <div className="w-20 h-20 mx-auto mb-6 bg-white animate-float rounded-2xl flex items-center justify-center shadow-xl">
//                 <Icon className="w-10 h-10 text-[#08704C]" />
//               </div>
//               <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{title}</h1>
//               <p className="text-xl text-white/85 max-w-2xl mx-auto">{description}</p>
//             </ScrollReveal>
//           </div>
//         </section>

//         <section className="pb-24 px-4 sm:px-6 lg:px-8">
//           <div className="container mx-auto">
//             {children ?? (
//               <div className="bg-white rounded-3xl shadow-lg p-12 text-center text-gray-500 text-lg">
//                 سيتم إضافة المحتوى قريبًا
//               </div>
//             )}
//           </div>
//         </section>

//         <WhatsAppButton />
//         <SiteFooter />
//       </div>
//     </>
//   );
// }

import type { ReactNode } from "react";
import Head from "next/head";
import NextImage from "next/image";
import type { LucideIcon } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollReveal } from "@/components/ScrollReveal";

interface PageShellProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  children?: ReactNode;
}

// قالب موحد للصفحات الداخلية: عنوان + وصف + المحتوى
export function PageShell({ title, description, Icon, children }: PageShellProps) {
  return (
    <>
      <Head>
        <title>{`${title} | جمعية يعمر للعناية بالمساجد`}</title>
        <meta name="description" content={description} />
      </Head>

      <div className="relative isolate min-h-screen" dir="rtl">
        {/* صورة الخلفية ثابتة خلف كل الصفحة */}
        <div className="fixed inset-0 -z-10">
          <NextImage src="/Picture24.jpg" alt="" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#08704C]/75"></div>
        </div>

        <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="container mx-auto relative z-10 text-center">
            <ScrollReveal>
              <div className="w-20 h-20 mx-auto mb-6 bg-white animate-float rounded-2xl flex items-center justify-center shadow-xl">
                <Icon className="w-10 h-10 text-[#08704C]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">{title}</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow">{description}</p>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            {children ?? (
              <div className="bg-white rounded-3xl shadow-lg p-12 text-center text-gray-500 text-lg">
                سيتم إضافة المحتوى قريبًا
              </div>
            )}
          </div>
        </section>

        <WhatsAppButton />
        <SiteFooter />
      </div>
    </>
  );
}
