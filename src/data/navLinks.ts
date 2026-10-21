import { ClipboardList, PenTool, Building2, Newspaper, MapPinned, type LucideIcon } from "lucide-react";

// روابط الموقع: عدّل الاسم أو الرابط من هنا فقط، وتتغير في القائمة والصفحة الرئيسية معًا
export const navLinks: Array<{ href: string; label: string; description: string; Icon: LucideIcon }> = [
  { href: "/projects", label: "متابعة المشاريع", description: "تابع نسب الإنجاز ومراحل مشاريع الجمعية", Icon: ClipboardList },
  { href: "/designs", label: "تصاميم  يعمر", description: "التصاميم المعتمدة للمساجد والجوامع", Icon: PenTool },
  { href: "/build-path", label: "مسار البناء", description: "خطوات بناء المسجد من الفكرة إلى الافتتاح", Icon: Building2 },
  { href: "/articles", label: "مكتبة البناء", description: "مقالات ومواضيع عن عمارة المساجد والعناية بها", Icon: Newspaper },
  { href: "/bank", label: "بنك الأراضي", description: "الأراضي المتاحة لبناء المساجد والجوامع", Icon: MapPinned },
];