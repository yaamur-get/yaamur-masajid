export type MaintenanceStep = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  description: string;
  bullets?: string[];
  icon: MaintenanceIconKey;
  image: string;
};

export type MaintenanceIconKey =
  | "fileSignature"
  | "mapPin"
  | "draftingCompass"
  | "users2"
  | "badgeCheck"
  | "hammer"
  | "handHeart"
  | "plugZap";

export const maintenanceSteps: MaintenanceStep[] = [
  {
    id: 1,
    slug: "maintenance-request",
    title: "استقبال طلب الصيانة",
    summary: "تسهيل تقديم الطلب عبر قنوات متعددة.",
    description: "نستقبل الطلب ونعتمده رسميًا قبل إسناده لفريق المشاريع.",
    bullets: [
      "الاتصال المباشر.",
      "واتساب.",
      "رابط إلكتروني.",
      "نموذج طلب صيانة.",
      "يتم تسجيل الطلب إلكترونيًا واعتماده رسميًا، ثم إسناده إلى فريق المشاريع المختص."
    ],
    icon: "fileSignature",
    image: "/iamge/yaamur_mint.jpg"
  },
  {
    id: 2,
    slug: "field-inspection",
    title: "الفحص والمعاينة الميدانية",
    summary: "زيارة ميدانية لحصر الاحتياج بدقة.",
    description: "معاينة شاملة وإعداد تقرير فني يوضح نطاق العمل والمتطلبات.",
    bullets: [
      "معاينة المسجد على أرض الواقع.",
      "حصر الاحتياج بدقة.",
      "إعداد تقرير فني خاص بالصيانة يوضح نطاق العمل والمتطلبات."
    ],
    icon: "mapPin",
    image: "/iamge/yaamurabout.jpg"
  },
  {
    id: 3,
    slug: "pricing-competition",
    title: "طرح المنافسة وطلب التسعيرات",
    summary: "رفع طلب تسعير للمقاولين المعتمدين.",
    description: "نضمن العدالة وأفضل جودة مقابل التكلفة وفق المعايير الفنية.",
    bullets: [
      "رفع طلب تسعير على المقاولين المعتمدين.",
      "العدالة في الاختيار.",
      "أفضل جودة مقابل التكلفة.",
      "الالتزام بالمعايير الفنية المعتمدة."
    ],
    icon: "users2",
    image: "/iamge/yaamur_runing.jpg"
  },
  {
    id: 4,
    slug: "contractor-approval",
    title: "اعتماد المقاول وتوقيع العقد",
    summary: "مراجعة العروض واختيار الأنسب.",
    description: "توقيع العقد وفق بنود واضحة تضمن حقوق جميع الأطراف.",
    bullets: [
      "تتم مراجعة العروض من خلال لجنة مختصة من الجمعية.",
      "اختيار المقاول الأكفأ.",
      "توقيع العقد وفق بنود واضحة تضمن حقوق جميع الأطراف."
    ],
    icon: "badgeCheck",
    image: "/iamge/yaamur_bulding.jpg"
  },
  {
    id: 5,
    slug: "execution-followup",
    title: "متابعة التنفيذ والتوثيق",
    summary: "متابعة دقيقة وتوثيق مستمر للأعمال.",
    description: "جدولة زيارات تفقدية لضمان الجودة والالتزام الزمني.",
    bullets: [
      "متابعة الأعمال ميدانيًا.",
      "توثيق مراحل المشروع.",
      "إعداد جدول زيارات تفقدية لضمان الالتزام بالجودة والجدول الزمني."
    ],
    icon: "hammer",
    image: "/iamge/yaamur_bulding.jpg"
  },
  {
    id: 6,
    slug: "final-handover",
    title: "الاستلام النهائي للأعمال",
    summary: "استلام الأعمال والتحقق من البنود.",
    description: "معالجة الملاحظات قبل الاعتماد النهائي لضمان جودة التنفيذ.",
    bullets: [
      "استلام الأعمال من المقاول.",
      "التأكد من تطبيق جميع البنود المتفق عليها في العقد.",
      "معالجة أي ملاحظات قبل الاعتماد النهائي."
    ],
    icon: "handHeart",
    image: "/iamge/yaamur_mint.jpg"
  },
  {
    id: 7,
    slug: "close-and-publish-impact",
    title: "إغلاق المشروع ونشر الأثر",
    summary: "توثيق النتائج وإبراز الأثر.",
    description: "نشر المشروع ضمن منجزات الجمعية لتعزيز الشفافية.",
    bullets: [
      "إغلاق المشروع رسميًا.",
      "توثيق النتائج.",
      "نشر المشروع ضمن منجزات الجمعية لإبراز الأثر وتحقيق الشفافية."
    ],
    icon: "plugZap",
    image: "/iamge/yaamurabout.jpg"
  }
];

export const totalMaintenanceSteps = maintenanceSteps.length;

export function getMaintenanceStepBySlug(slug: string) {
  return maintenanceSteps.find((step) => step.slug === slug);
}

export function getNextMaintenanceStepSlug(slug: string) {
  const currentIndex = maintenanceSteps.findIndex((step) => step.slug === slug);
  if (currentIndex === -1) return null;
  return maintenanceSteps[currentIndex + 1]?.slug ?? null;
}
