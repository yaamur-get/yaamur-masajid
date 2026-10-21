export type OperationStep = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  description: string;
  bullets?: string[];
  icon: OperationIconKey;
  image: string;
};

export type OperationIconKey =
  | "fileSignature"
  | "mapPin"
  | "draftingCompass"
  | "badgeCheck"
  | "hammer"
  | "plugZap";

export const operationSteps: OperationStep[] = [
  {
    id: 1,
    slug: "donor-request-intake",
    title: "استلام طلب المتبرع",
    summary: "فهم رغبة المتبرع واحتياج التشغيل.",
    description: "نستلم الطلب ونحدد نوع التشغيل والخدمات المطلوبة للمسجد.",
    bullets: [
      "فهم رغبة المتبرع في نوع التشغيل.",
      "حصر احتياج المسجد من خدمات التشغيل (نظافة، صيانة، متابعة، إلخ)."
    ],
    icon: "fileSignature",
    image: "/iamge/yaamur_mint.jpg"
  },
  {
    id: 2,
    slug: "field-visit",
    title: "الزيارة الميدانية ومعاينة الموقع",
    summary: "زيارة المسجد والتحقق من ملاءمة المتطلبات.",
    description: "معاينة شاملة للموقع ورصد أي ملاحظات تؤثر على جودة التشغيل.",
    bullets: [
      "زيارة المسجد.",
      "التأكد من أن متطلبات التشغيل مناسبة للموقع ومتطابقة مع حالته الفعلية.",
      "رصد أي ملاحظات تؤثر على جودة التشغيل."
    ],
    icon: "mapPin",
    image: "/iamge/yaamurabout.jpg"
  },
  {
    id: 3,
    slug: "needs-report",
    title: "إعداد تقرير الاحتياج",
    summary: "تقرير فني تفصيلي يوضح الحالة والاحتياج.",
    description: "تحديد آلية التنفيذ المقترحة لتحقيق أفضل أثر.",
    bullets: [
      "حالة المسجد الحالية.",
      "احتياج التشغيل المطلوب.",
      "آلية التنفيذ المقترحة بما يحقق أفضل أثر."
    ],
    icon: "draftingCompass",
    image: "/iamge/yaamur_runing.jpg"
  },
  {
    id: 4,
    slug: "donor-approval",
    title: "اعتماد المتبرع",
    summary: "عرض التقرير واعتماده رسميًا.",
    description: "ضمان الشفافية ووضوح الصورة قبل التنفيذ.",
    bullets: [
      "يُعرض التقرير على المتبرع.",
      "يتم اعتماده رسميًا قبل البدء في التنفيذ.",
      "ضمان الشفافية ووضوح الصورة للمتبرع."
    ],
    icon: "badgeCheck",
    image: "/iamge/yaamur_bulding.jpg"
  },
  {
    id: 5,
    slug: "execution-followup",
    title: "التنفيذ والمتابعة الدورية",
    summary: "تشغيل المسجد وفق الخطة المعتمدة.",
    description: "متابعة دورية منتظمة لضمان الجودة والالتزام بالمعايير.",
    bullets: [
      "بدء تشغيل المسجد وفق الخطة المعتمدة.",
      "متابعة دورية مؤتمتة ومنتظمة.",
      "التأكد من استمرارية الجودة والالتزام بالمعايير."
    ],
    icon: "hammer",
    image: "/iamge/yaamur_bulding.jpg"
  },
  {
    id: 6,
    slug: "monthly-reports",
    title: "التقارير الشهرية (فني ومالي)",
    summary: "تقارير دورية لتعزيز الثقة والشفافية.",
    description: "مشاركة التقارير مع المتبرع بانتظام.",
    bullets: [
      "إعداد تقرير شهري فني يوضح حالة المسجد.",
      "إعداد تقرير مالي يوضح أوجه الصرف.",
      "مشاركة التقارير مع المتبرع لتعزيز الثقة والشفافية."
    ],
    icon: "plugZap",
    image: "/iamge/yaamurabout.jpg"
  }
];

export const totalOperationSteps = operationSteps.length;

export function getOperationStepBySlug(slug: string) {
  return operationSteps.find((step) => step.slug === slug);
}

export function getNextOperationStepSlug(slug: string) {
  const currentIndex = operationSteps.findIndex((step) => step.slug === slug);
  if (currentIndex === -1) return null;
  return operationSteps[currentIndex + 1]?.slug ?? null;
}
