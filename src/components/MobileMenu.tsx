import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/data/navLinks";

export const governanceMenuItems = [
  { href: "/governance#bylaws", label: "اللائحة الأساسية" },
  { href: "/governance#policies", label: "السياسات" },
  { href: "/governance#procedures", label: "الآليات والإجراءات" },
  { href: "/governance#disclosure", label: "الإفصاح والبيانات التنظيمية" },
  { href: "/governance#reports", label: "التقارير والبيانات المالية" },
];

interface MobileMenuProps {
  isScrolled: boolean;
}

const itemClass = "text-gray-700 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-semibold py-3 px-4 rounded-xl";

export function MobileMenu({ isScrolled }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showGovernance, setShowGovernance] = useState(false);
  const links = [{ href: "/", label: "الرئيسية" }, ...navLinks];

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-50 p-2 h-12 w-12 ${isScrolled ? "text-gray-900" : "text-gray-700"}`}
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed top-20 left-0 right-0 bg-white shadow-2xl z-40 rounded-b-3xl border-t border-gray-200 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1 p-3">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={itemClass}>
                  {link.label}
                </a>
              ))}

              <div>
                <button
                  onClick={() => setShowGovernance(!showGovernance)}
                  className={`w-full text-right flex items-center justify-between ${itemClass}`}
                >
                  <span>الحوكمة</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showGovernance ? "rotate-180" : ""}`} />
                </button>
                {showGovernance && (
                  <div className="mr-4 mt-1 space-y-1">
                    {governanceMenuItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-600 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-medium py-2 px-4 rounded-xl"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#contact" onClick={() => setIsOpen(false)} className={itemClass}>
                تواصل معنا
              </a>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}