import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Eye, ArrowLeft, Shield, Users, BarChart, FileCheck, Scale, UserCheck, AlertCircle, Lock, ClipboardList, MessageSquare, ThumbsUp, FileBarChart, DollarSign, Archive } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";

interface Document {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  filePath: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  documents: Document[];
}

const governanceSections: Section[] = [
  {
    id: "bylaws",
    title: "اللائحة الأساسية",
    description: "اللائحة الأساسية للجمعية المعتمدة من الجهات المختصة",
    icon: Scale,
    documents: [
      {
        id: "main-bylaws",
        title: "اللائحة الأساسية للجمعية",
        description: "النسخة المعتمدة ",
        icon: FileText,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2023/10/اللائحة-الاساسية-اعضاء-الجمعية-العمومية.pdf"
      }
    ]
  },
  {
    id: "policies",
    title: "السياسات",
    description: "السياسات المعتمدة لتنظيم عمل الجمعية",
    icon: FileCheck,
    documents: [
      {
        id: "policy-fundraising",
        title: "سياسة جمع التبرعات",
        description: "القواعد والإجراءات المتبعة في جمع التبرعات",
        icon: DollarSign,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2023/12/8.سياسة-جمع-التبرعات-1.pdf"
      },
      {
        id: "policy-beneficiaries",
        title: "سياسة تنظيم العلاقة مع المستفيدين وتقديم الخدمات",
        description: "معايير وإجراءات تقديم الخدمات للمستفيدين",
        icon: Users,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2023/12/9.سياسة-تنظيم-العلاقة-مع-المستفيدين-1.pdf"
      },
      {
        id: "policy-volunteers",
        title: "سياسة إدارة المتطوعين",
        description: "تنظيم العلاقة مع المتطوعين وإدارتهم",
        icon: UserCheck,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2023/12/10.آلية-إدارة-المتطوعين.pdf"
      },
      {
        id: "policy-conflict",
        title: "سياسة تعارض المصالح",
        description: "الضوابط لتجنب تعارض المصالح في عمل الجمعية",
        icon: AlertCircle,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2023/12/4.سياسة-تعارض-المصالح-1.pdf"
      },
      {
        id: "policy-whistleblowing",
        title: "سياسة البلاغات عن المخالفات وحماية مقدمي البلاغات",
        description: "آلية الإبلاغ عن المخالفات وحماية المبلغين",
        icon: Shield,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2023/12/5.سياسة-الإبلاغ-عن-المخالفات-وحماية-مقدمي-البلاغات.pdf"
      },
      {
        id: "policy-privacy",
        title: "سياسة خصوصية البيانات",
        description: "حماية البيانات الشخصية والمعلومات السرية",
        icon: Lock,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2023/12/6.سياسة-خصوصية-البيانات-1.pdf"
      },
      {
        id: "policy-records",
        title: "سياسة حفظ وإتلاف الوثائق",
        description: "إجراءات حفظ الوثائق والسجلات وإتلافها",
        icon: Archive,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2023/12/7.سياسة-الاحتفاظ-بالوثائق-وإتلافها-2.pdf"
      }
    ]
  },
  {
    id: "procedures",
    title: "الآليات والإجراءات",
    description: "الآليات التنفيذية لتطبيق السياسات",
    icon: ClipboardList,
    documents: [
      {
        id: "proc-volunteers",
        title: "آلية إدارة المتطوعين",
        description: "الإجراءات التفصيلية لإدارة المتطوعين",
        icon: UserCheck,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2023/12/10.آلية-إدارة-المتطوعين.pdf"
      },
      {
        id: "proc-complaints",
        title: "آلية استقبال الشكاوى والاقتراحات والاستفسارات والتعامل معها",
        description: "نظام استقبال ومعالجة الشكاوى والاقتراحات",
        icon: MessageSquare,
        filePath: ""
      },
      {
        id: "proc-satisfaction",
        title: "آلية قياس رضا المستفيدين والتغذية الراجعة",
        description: "طرق قياس رضا المستفيدين وجمع التغذية الراجعة",
        icon: ThumbsUp,
        filePath: ""
      }
    ]
  },
  {
    id: "disclosure",
    title: "الإفصاح والبيانات التنظيمية",
    description: "المعلومات والبيانات التنظيمية للجمعية",
    icon: FileBarChart,
    documents: [
      {
        id: "disc-members",
        title: "أسماء أعضاء الجمعية العمومية",
        description: "قائمة أعضاء الجمعية العمومية الحاليين",
        icon: Users,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2023/10/%D8%A7%D9%84%D9%84%D8%A7%D8%A6%D8%AD%D8%A9-%D8%A7%D9%84%D8%A7%D8%B3%D8%A7%D8%B3%D9%8A%D8%A9-%D8%A7%D8%B9%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D9%85%D9%88%D9%85%D9%8A%D8%A9.pdf"
      },
      {
        id: "disc-meetings",
        title: " اجتماع الجمعية العمومية لعام 2023",
        description: "سجل اجتماعات الجمعية العمومية",
        icon: FileText,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2024/04/محضر-اجتماع-الجمعية-العمومية-العادي-الأول.pdf"
      },
        {
        id: "disc-meetings",
        title: " اجتماع الجمعية العمومية لعام 2024",
        description: "سجل اجتماعات الجمعية العمومية",
        icon: FileText,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2025/10/محضر-اجتماع-الجمعية-العمومية-العادية-2024م.pdf"
      },
        {
        id: "disc-meetings",
        title: " اجتماع الجمعية العمومية لعام 2025",
        description: "سجل اجتماعات الجمعية العمومية",
        icon: FileText,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2025/10/محضر-اجتماع-الجمعية-العمومية-جمعية-يعمر-2025م.pdf"
      },
      
      
    ]
  },
  {
    id: "reports",
    title: "التقارير والبيانات المالية",
    description: "الأهداف والتقارير والقوائم المالية",
    icon: BarChart,
    documents: [
      
      {
        id: "rep-programs",
        title: "تقارير البرامج والأنشطة لعام 2023",
        description: "تقارير البرامج والأنشطة المنفذة",
        icon: FileBarChart,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2024/03/النسخة-النهائية-التقرير-السنوي-لجمعية-يعمر-تعديل-نهائي.pdf"
      },
      {
        id: "rep-programs",
        title: "تقارير البرامج والأنشطة لعام 2024",
        description: "تقارير البرامج والأنشطة المنفذة",
        icon: FileBarChart,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2025/10/تقرير-جمعية-يعمر-24-1-3.pdf"
      },
      
      {
        id: "rep-financial",
        title: "القوائم المالية السنوية لعام 2023",
        description: "القوائم المالية المدققة والمعتمدة",
        icon: FileBarChart,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2025/10/القوائم-لعام-2023.pdf"
      },
     {
        id: "rep-financial",
        title: "القوائم المالية السنوية لعام 2024",
        description: "القوائم المالية المدققة والمعتمدة",
        icon: FileBarChart,
        filePath: "https://yaamur.org.sa/wp-content/uploads/sites/2193/2025/10/جمعية-يعمر-الجديدة-24-1.pdf"
      }
    ]
  }
];

export default function GovernancePage() {
  const handleView = (filePath: string) => {
    window.open(filePath, "_blank");
  };

  const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>الحوكمة  | جمعية يعمر لعناية المساجد</title>
        <meta name="description" content="وثائق الحوكمة والشفافية - اللوائح، السياسات، الآليات، الإفصاح، والتقارير المالية" />
      </Head>

      <div className="min-h-screen bg-[#F8F4ED]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7B4F28]/5 rounded-full blur-3xl"></div>
        </div>

       

        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-12">
            
                <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
                  الحوكمة والشفافية
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  نلتزم بأعلى معايير الشفافية والحوكمة . جميع الوثائق والبيانات متاحة للاطلاع والتحميل
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-gradient-to-r from-[#08704C]/10 to-[#00A186]/10 rounded-3xl p-8 mb-12 border-2 border-[#08704C]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#08704C] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">التزامنا بالشفافية</h3>
                    <p className="text-gray-700 leading-relaxed">
                      نؤمن بأهمية الشفافية والمساءلة في عملنا. جميع الوثائق أدناه متاحة للجمهور وفقاً لمعايير الحوكمة المعتمدة في المملكة العربية السعودية.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {governanceSections.map((section, sectionIndex) => (
          <section id={section.id} key={section.id} className="pb-16 px-4 sm:px-6 lg:px-8 relative scroll-mt-28">
            <div className="container mx-auto relative z-10">
              <ScrollReveal delay={sectionIndex * 50}>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-3xl flex items-center justify-center shadow-xl">
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-gray-900">{section.title}</h2>
                      <p className="text-gray-600 mt-1">{section.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.documents.map((doc, docIndex) => (
                  <ScrollReveal key={doc.id} delay={(sectionIndex * 50) + (docIndex * 30)}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#08704C]/30 h-full bg-white">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-[#08704C]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#08704C] transition-colors">
                            <doc.icon className="w-6 h-6 text-[#08704C] group-hover:text-white transition-colors" />
                          </div>
                          <CardTitle className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#08704C] transition-colors">
                            {doc.title}
                          </CardTitle>
                        </div>
                        {doc.description && (
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {doc.description}
                          </p>
                        )}
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleView(doc.filePath)}
                            className="flex-1 bg-[#08704C] hover:bg-[#00A186] text-white"
                            size="sm"
                          >
                            <Eye className="w-4 h-4 ml-2" />
                            عرض
                          </Button>
                          <Button
                            onClick={() => handleDownload(doc.filePath, `${doc.title}.pdf`)}
                            variant="outline"
                            className="flex-1 border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white"
                            size="sm"
                          >
                            <Download className="w-4 h-4 ml-2" />
                            تحميل
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-20"></div>
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <Card className="border-2 border-[#08704C]/20 shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center max-w-3xl mx-auto">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <MessageSquare className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 mb-4">
                      هل لديك استفسار حول وثائق الحوكمة؟
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      نحن هنا للإجابة على جميع استفساراتكم حول وثائق الحوكمة والشفافية
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/#contact">
                        <Button size="lg" className="bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white shadow-xl text-lg px-10">
                          تواصل معنا
                          <ArrowLeft className="w-5 h-5 mr-2" />
                        </Button>
                      </Link>
                      <Button size="lg" variant="outline" className="border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white text-lg px-10">
                        <Download className="w-5 h-5 ml-2" />
                        تحميل جميع الوثائق
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        <WhatsAppButton />

        <SiteFooter />
      </div>
    </>
  );
}