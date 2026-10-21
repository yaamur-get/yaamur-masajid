export type ConstructionStep = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  description: string;
  bullets?: string[];
  icon: ConstructionIconKey;
  image: string;
};

export type ConstructionIconKey =
  | "target"
  | "mapPin"
  | "fileSignature"
  | "draftingCompass"
  | "badgeCheck"
  | "hammer"
  | "users2"
  | "plugZap"
  | "handHeart";

export const constructionSteps: ConstructionStep[] = [
  {
    id: 1,
    slug: "identifying-donor-needs",
    title: "حصر احتياج المتبرع",
    summary: "جلسة تأسيسية لتحويل الفكرة إلى مشروع واضح المعالم.",
    description: "نحوّل الفكرة العامة إلى مشروع محدد وقابل للتنفيذ.",
    bullets: [
      "جلسة عصف ذهني مع المتبرع لفهم الفكرة والهدف.",
      "تحديد الرؤية العامة للمشروع.",
      "تحديد الميزانية المتوقعة.",
      "مناقشة الخيارات الأنسب لتحقيق أكبر أثر.",
      "عرض نماذج وتجارب سابقة.",
      "الهدف: تحويل الفكرة العامة إلى مشروع واضح المعالم وقابل للتنفيذ."
    ],
    icon: "target",
    image: "/iamge/yaamur_mint.jpg"
  },
  {
    id: 2,
    slug: "land-options",
    title: "أختيار الأرض",
    summary: "تحديد خيار الأرض الأنسب وأثرها المتوقع.",
    description: "نقارن الخيارات ونختار الأرض الأنسب لخدمة أكبر عدد من المصلين.",
    bullets: [
      
      "دراسة الكثافة السكانية الحالية والمستقبلية.",
      "حصر الاحتياج الفعلي ",
      "قياس حجم الأثر المتوقع مقابل مبلغ التبرع.",
      "اختيار الأرض الأنسب لخدمة أكبر عدد من المصلين.",
      "اعتماد الأرض رسميًا للمشروع."
    ],
    icon: "mapPin",
    image: "/iamge/yaamurabout.jpg"
  },
  {
    id: 3,
    slug: "signing-the-agreement",
    title: "الاتفاقية",
    summary: "تنظيم العلاقة وتثبيت الالتزامات والتوقعات.",
    description: "نضمن وضوح العلاقة ومنع اختلاف التوقعات لاحقًا.",
    bullets: [
      "التزامات الجمعية.",
      "التزامات المتبرع.",
      "الجدول الزمني للمشروع.",
      "آلية التقارير والمتابعة.",
      "الهدف: ضمان وضوح العلاقة بين الطرفين ومنع أي اختلاف في التوقعات مستقبلًا."
    ],
    icon: "fileSignature",
    image: "/iamge/yaamur_runing.jpg"
  },
  {
    id: 4,
    slug: "preparing-plans-and-designs",
    title: "المخططات والتصاميم",
    summary: "إعداد المخططات الهندسية والتفاصيل التنفيذية.",
    description: "بالتعاون مع مكاتب هندسية متخصصة لضمان الجودة.",
    bullets: [
      "المخططات المعمارية.",
      "المخططات الإنشائية.",
      "التصميم الداخلي والخارجي.",
      "حصر الكميات والتكاليف (BOQ).",
      "بالتعاون مع مكاتب هندسية متخصصة."
    ],
    icon: "draftingCompass",
    image: "/iamge/home.png"
  },
  {
    id: 5,
    slug: "selecting-the-consultant-contractor",
    title: "اختيار الاستشاري والمقاول",
    summary: "اختيار الأنسب عبر لجنة ترسية مختصة.",
    description: "نضمن منافسة عادلة واختيارًا مدروسًا.",
    bullets: [
      "عقد اجتماع تعريفي بالمشروع.",
      "شرح المشروع كاملًا لضمان المنافسة العادلة.",
      "استقبال العروض الفنية والمالية.",
      "تقييم العروض فنيًا وماليًا.",
      "اختيار الأنسب عبر لجنة ترسية مختصة."
    ],
    icon: "badgeCheck",
    image: "/iamge/yaamur_bulding.jpg"
  },
  {
    id: 6,
    slug: "project-execution",
    title: "تنفيذ المشروع",
    summary: "تنفيذ ميداني بإشراف مباشر ومتابعة دقيقة.",
    description: "التزام كامل بالجودة والجدول الزمني.",
    bullets: [
      "بدء التنفيذ تحت إشراف مباشر من الجمعية.",
      "متابعة تنفيذ الأعمال ميدانيًا.",
      "متابعة الالتزام بالجداول الزمنية.",
      "ما يميزنا: متابعة التنفيذ والمتابعة الزمنية المستمرة."
    ],
    icon: "hammer",
    image: "/iamge/yaamur_bulding.jpg"
  },
  {
    id: 7,
    slug: "selecting-imam-and-muezzin",
    title: "المساهمة في اختيار الإمام والمؤذن",
    summary: "تنسيق الاختيار مع الجهات المختصة.",
    description: "لنضمن مسجدًا حيًا برسالته وليس مجرد مبنى.",
    bullets: [
      "التنسيق مع الجهات المختصة لاختيار الإمام والمؤذن.",
      "هدفنا أن يكون المسجد مركزًا لحلقات التحفيظ.",
      "منطلقًا للدروس العلمية.",
      "ملتقى لأهل الحي.",
      "حيًا برسالته وليس مجرد مبنى."
    ],
    icon: "users2",
    image: "/iamge/yaamurabout.jpg"
  },
  {
    id: 8,
    slug: "issuing-utility-meters-and-name",
    title: "استخراج عدادات الماء والكهرباء واعتماد اسم المسجد الرسمي",
    summary: "تجهيز الخدمات والاعتمادات الرسمية دون تأخير.",
    description: "نضمن جاهزية الخدمات قبل الافتتاح.",
    bullets: [
      "استخراج التراخيص الحكومية.",
      "تجهيز عدادات المياه والكهرباء.",
      "اعتماد اسم المسجد رسميًا.",
      "تجنب تأخير الافتتاح.",
      "ضمان جاهزية الخدمات في الوقت المناسب دون خسائر أو تعطيل."
    ],
    icon: "plugZap",
    image: "/iamge/yaamur_runing.jpg"
  },
  {
    id: 9,
    slug: "handover-to-ministry",
    title: "تسليم المشروع لفرع الوزارة",
    summary: "تسليم وفق أحدث الأنظمة وتعليمات الوزارة.",
    description: "تسليم من أول مرة دون ملاحظات.",
    bullets: [
      "تسليم المسجد وفق أحدث أنظمة وتعليمات الوزارة.",
      "تحديث المشروع حسب آخر الأكواد والأنظمة.",
      "تمكين قبول المسجد من أول مرة دون ملاحظات."
    ],
    icon: "handHeart",
    image: "/iamge/yaamur_mint.jpg"
  },
  {
    id: 10,
    slug: "mosque-operation",
    title: "تشغيل المسجد وضمان استدامته",
    summary: "خدمات تشغيل تضمن استمرارية الأثر.",
    description: "المسجد يبقى حيًا برسالته لأطول مدة ممكنة.",
    bullets: [
      "النظافة الدائمة.",
      "الصيانة المستمرة.",
      "جدولة الصيانات الوقائية.",
      "الهدف: استمرار المسجد في أداء رسالته بأفضل صورة ولسنوات طويلة."
    ],
    icon: "badgeCheck",
    image: "/iamge/yaamur_bulding.jpg"
  }
];

export const totalSteps = constructionSteps.length;

export function getStepBySlug(slug: string) {
  return constructionSteps.find((step) => step.slug === slug);
}

export function getNextStepSlug(slug: string) {
  const currentIndex = constructionSteps.findIndex((step) => step.slug === slug);
  if (currentIndex === -1) return null;
  return constructionSteps[currentIndex + 1]?.slug ?? null;
}
