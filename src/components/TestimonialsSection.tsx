
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    id: 1,
    quote: " رأيت في يعمر ما أثلج صدري من التميز في العمل والإتقان في الأداء والتكامل مع بقية المؤسسات المماثلة والتنسيق المستمر مع فرع وزارة الشؤون الإسلامية مما كان له بالغ الأثر في مخرجات عمل الجمعية، فالشكر للقائمين على الجمعية على هذه الجهود المباركة ونسأل الله للجميع التوفيق والسداد.",
    author: "الشيخ عمر الدويش",
    role: "مدير ​عام فرع وزارة الشؤون الإسلامية بالمنطقة الشرقية ",
    rating: 5
  },
  {
    id: 2,
    quote: "قد أبهجني المستوى الراقي والتنظيم الرائع في جمعية يعمر للعناية بالمساجد، كما أسعدني كثيراً رؤية الأبطال من منسوبي الجمعية. أتمنى كل التوفيق والنجاح والسداد لهذه الجمعية الرائدة.",
    author: "م. وليد محمد الفوزان",
    role: "",
    rating: 5
  },
  {
    id: 3,
    quote: "في هذا اليوم المبارك سعدت كثيرا في لقائي مع جمعية يعمر للعناية بالمساجد، هذه الجمعية المميزة في جهودها وعطائها وتفانيها لخدمة مساجد وبيوت الله.",
    author: "أ.سالم العجيمي",
    role: "",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#00A186]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7B4F28]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">قالوا عنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفخر بثقة شركائنا ومجتمعنا في خدماتنا المتميزة
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 100}>
              <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[#08704C]/30 transition-all duration-500 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <Quote className="w-12 h-12 text-[#08704C]/20 group-hover:text-[#08704C]/40 transition-colors" />
                    <div className="flex gap-1">
                     
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-bold text-gray-900 mb-1">{testimonial.author}</p>
                    <p className="text-sm text-[#08704C]">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
