// import Head from "next/head";
// import NextImage from "next/image";
// import { Button } from "@/components/ui/button";
// import { Sparkles, TrendingUp } from "lucide-react";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import SiteFooter from "@/components/SiteFooter";
// import { navLinks } from "@/data/navLinks";

// export default function HomePage() {
//   return (
//     <>
//       <Head>
//         <title>جمعية يعمر للعناية بالمساجد | Ya&apos;mur Association</title>
//         <meta name="description" content="جمعية يعمر للعناية بالمساجد - متابعة المشاريع وتصاميم يعمر ومسار البناء" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
//       </Head>

//       <div className="min-h-screen yaamur-bg" dir="rtl">
//         <section id="home" className="relative pt-6 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
//           <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>

//           <div className="container mx-auto relative z-10">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div className="space-y-8">
//                 <div className="flex w-full justify-center">
//                   <NextImage
//                     src="/maidelog.png"
//                     alt="جمعية يعمر للعناية بالمساجد | Yaamur Association for Mosque Care"
//                     width={1000}
//                     height={600}
//                     className="mx-auto h-auto w-[min(90vw,640px)] object-contain brightness-0 invert drop-shadow-lg"
//                     priority
//                   />
//                 </div>

//                 <div className="block md:hidden mt-4">
//                   <div className="rounded-2xl overflow-hidden shadow-2xl">
//                     <NextImage
//                       src="/Picture24.jpg"
//                       alt="مشاريع يعمر"
//                       width={1200}
//                       height={700}
//                       className="w-full h-auto object-cover"
//                       priority
//                     />
//                   </div>
//                 </div>

//                 <ScrollReveal delay={200}>
//                   <p className="text-xl text-white/90 leading-relaxed max-w-xl">
//                     جمعية أهلية تُعنى بتقديم خدمات العناية المتكاملة بالمساجد والجوامع من بناء وصيانة وتشغيل, صدر ترخيصها رقم 5161 بتاريخ 1444/08/17
//                   </p>
//                 </ScrollReveal>

//                 <ScrollReveal delay={300}>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-fit">
//                     {navLinks.map(({ href, label, Icon }, i) => (
//                       <a key={href} href={href} className="w-full">
//                         <Button
//                           size="lg"
//                           variant={i === 0 ? "default" : "outline"}
//                           className={
//                             i === 0
//                               ? "bg-white text-[#08704C] hover:bg-white/90 shadow-2xl text-lg px-10 py-7 hover:scale-105 transition-all duration-300 w-full"
//                               : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#08704C] text-lg px-10 py-7 hover:scale-105 transition-all duration-300 w-full"
//                           }
//                         >
//                           <Icon className="w-5 h-5 ml-2" />
//                           {label}
//                         </Button>
//                       </a>
//                     ))}
//                   </div>
//                 </ScrollReveal>

//                 <ScrollReveal delay={400}>
//                   <div className="flex items-center gap-8 pt-4">
//                     <div className="flex items-center gap-4">
//                       <div className="flex -space-x-4">
//                         {[1, 2, 3, 4, 5].map((i) => (
//                           <div
//                             key={i}
//                             className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#08704C] flex items-center justify-center text-[#08704C] font-bold text-sm md:text-base shadow-md"
//                           >
//                             {i}
//                           </div>
//                         ))}
//                       </div>
//                       <span className="text-sm md:text-base text-white/90 font-medium">5+ عدد بناء المساجد جديدة</span>
//                     </div>
//                   </div>
//                 </ScrollReveal>
//               </div>

//               <ScrollReveal delay={200}>
//                 <div className="relative hidden md:block">
//                   <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl card-elevated border-4 border-white/20">
//                     <div className="aspect-[4/4] relative">
//                       <NextImage src="/Picture24.jpg" alt="مشاريع يعمر" fill className="object-cover" />

//                       <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
//                         <div className="flex items-center gap-3">
//                           <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-xl flex items-center justify-center">
//                             <TrendingUp className="w-6 h-6 text-white" />
//                           </div>
//                           <div>
//                             <p className="text-2xl font-bold text-gray-900">512+</p>
//                             <p className="text-xs text-gray-600">عدد المساجد المخدومة</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
//                         <div className="flex items-center gap-3">
//                           <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-xl flex items-center justify-center">
//                             <Sparkles className="w-6 h-6 text-white" />
//                           </div>
//                           <div>
//                             <p className="text-2xl font-bold text-gray-900">305+</p>
//                             <p className="text-xs text-gray-600">عدد المشاريع و المبادرات المنفذة</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         <WhatsAppButton />
//         <SiteFooter />
//       </div>
//     </>
//   );
// }

import Head from "next/head";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";
import { navLinks } from "@/data/navLinks";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>جمعية يعمر للعناية بالمساجد | Ya&apos;mur Association</title>
        <meta name="description" content="جمعية يعمر للعناية بالمساجد - متابعة المشاريع وتصاميم يعمر ومسار البناء" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>

      <div className="min-h-screen yaamur-bg" dir="rtl">
        <section id="home" className="relative min-h-screen flex items-center pt-6 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <NextImage src="/Picture24.jpg" alt="مشاريع يعمر" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#08704C]/90 via-[#08704C]/60 to-black/20"></div>

          <div className="container mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex w-full justify-center">
                  <NextImage
                    src="/maidelog.png"
                    alt="جمعية يعمر للعناية بالمساجد | Yaamur Association for Mosque Care"
                    width={1000}
                    height={600}
                    className="mx-auto h-auto w-[min(90vw,640px)] object-contain brightness-0 invert drop-shadow-lg"
                    priority
                  />
                </div>

                <ScrollReveal delay={200}>
                  <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                    جمعية أهلية تُعنى بتقديم خدمات العناية المتكاملة بالمساجد والجوامع من بناء وصيانة وتشغيل, صدر ترخيصها رقم 5161 بتاريخ 1444/08/17
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-fit">
                    {navLinks.map(({ href, label, Icon }, i) => (
                      <a key={href} href={href} className="w-full">
                        <Button
                          size="lg"
                          variant={i === 0 ? "default" : "outline"}
                          className={
                            i === 0
                              ? "bg-white text-[#08704C] hover:bg-white/90 shadow-2xl text-lg px-10 py-7 hover:scale-105 transition-all duration-300 w-full"
                              : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#08704C] text-lg px-10 py-7 hover:scale-105 transition-all duration-300 w-full"
                          }
                        >
                          <Icon className="w-5 h-5 ml-2" />
                          {label}
                        </Button>
                      </a>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="flex items-center gap-8 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#08704C] flex items-center justify-center text-[#08704C] font-bold text-sm md:text-base shadow-md"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                      <span className="text-sm md:text-base text-white/90 font-medium">5+ عدد بناء المساجد جديدة</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={200}>
                <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">512+</p>
                        <p className="text-xs text-gray-600">عدد المساجد المخدومة</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">305+</p>
                        <p className="text-xs text-gray-600">عدد المشاريع و المبادرات المنفذة</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <WhatsAppButton />
        <SiteFooter />
      </div>
    </>
  );
}
