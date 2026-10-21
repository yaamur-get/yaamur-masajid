import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { ClientOnly } from "@/components/ClientOnly";
import { type LucideIcon, Phone, Mail, MapPin, Twitter, Instagram, Linkedin, Music, Download } from "lucide-react";

const MapFrame = "iframe";

export default function SiteFooter() {
  const socialLinks: Array<{ label: string; href: string; Icon: LucideIcon }> = [
    { label: "منصة إكس", href: "https://twitter.com/YaamurOrg", Icon: Twitter },
    { label: "إنستقرام", href: "https://instagram.com/YaamurOrg", Icon: Instagram },
    {
      label: "لينكدإن",
      href: "https://www.linkedin.com/in/yaamurorg-%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D9%8A%D8%B9%D9%85%D8%B1-%D9%84%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AC%D8%AF-0a9562365",
      Icon: Linkedin,
    },
    { label: "تيك توك", href: "https://www.tiktok.com/@yaamurorg", Icon: Music },
  ];

  return (
    <footer id="contact" className="bg-white text-gray-900 border-t-4 border-[#08704C] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl overflow-hidden p-1 border border-gray-100">
                <NextImage src="/yaamurlogoone.png" alt="شعار جمعية يعمر" width={36} height={36} className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#08704C]">جمعية يعمر</h3>
                <p className="text-sm text-gray-600">لعناية المساجد</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              نسعى لتحقيق التميز في خدمة بيوت الله من خلال البناء والصيانة والتشغيل المتقن
            </p>
            <a
              href="/data/شهادة-التسجيل-الجمعية-1.pdf"
              download="شهادة-تسجيل-الجمعية.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00A186]/15 hover:bg-[#00A186] text-[#08704C] hover:text-white transition-colors font-semibold text-sm"
            >
              <Download className="w-4 h-4" />
              شهادة التسجيل
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-6 text-[#08704C]">حسابات الجمعية</h4>
            <nav className="flex flex-col gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#08704C] transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00A186]/15 text-[#08704C] flex items-center justify-center group-hover:bg-[#00A186] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-6 text-[#08704C]">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600 hover:text-[#08704C] transition-colors group">
                <div className="w-10 h-10 bg-[#00A186]/15 text-[#08704C] rounded-xl flex items-center justify-center group-hover:bg-[#00A186] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span dir="ltr">920011240</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600 hover:text-[#08704C] transition-colors group">
                <div className="w-10 h-10 bg-[#00A186]/15 text-[#08704C] rounded-xl flex items-center justify-center group-hover:bg-[#00A186] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@yaamur.org</span>
              </div>

              <div className="flex items-start gap-3 text-gray-600 hover:text-[#08704C] transition-colors group">
                <div className="w-10 h-10 bg-[#00A186]/15 text-[#08704C] rounded-xl flex items-center justify-center group-hover:bg-[#00A186] group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>المنطقة الشرقية، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#08704C]">موقع الجمعية</h4>
            <p className="text-gray-600 text-sm">الدمام، المنطقة الشرقية، المملكة العربية السعودية</p>

            <div className="w-full rounded-md overflow-hidden border-2 border-gray-200">
              <MapFrame
                title="خريطة موقع جمعية يعمر - الدمام"
                src="https://www.google.com/maps?q=Dammam,+Eastern+Province,+Saudi+Arabia&output=embed"
                className="w-full h-36 md:h-44"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a href="https://maps.app.goo.gl/nPK4ipHV1QLoYeQ6A" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white shadow-xl hover:shadow-2xl transition-all">
                <MapPin className="w-4 h-4 ml-2" />
                افتح الموقع على الخريطة
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center space-y-3">
          <p className="text-gray-600">
            جميع الحقوق محفوظة © <ClientOnly>{new Date().getFullYear()}</ClientOnly> جمعية يعمر لعناية المساجد
          </p>
          <p className="text-gray-500 text-sm">رقم الترخيص: 5161</p>
        </div>
      </div>
    </footer>
  );
}