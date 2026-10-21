import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu, governanceMenuItems } from "@/components/MobileMenu";
import { navLinks } from "@/data/navLinks";

const linkClass = "relative hover:text-[#08704C] transition-colors font-semibold group";
const underline = "absolute bottom-0 right-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showGovernanceMenu, setShowGovernanceMenu] = useState(false);
  const hideTimeout = useRef<number | null>(null);
  const { pathname } = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openGovernance = () => {
    if (hideTimeout.current) window.clearTimeout(hideTimeout.current);
    setShowGovernanceMenu(true);
  };

  const closeGovernance = () => {
    if (hideTimeout.current) window.clearTimeout(hideTimeout.current);
    hideTimeout.current = window.setTimeout(() => setShowGovernanceMenu(false), 300);
  };

  const links = [{ href: "/", label: "الرئيسية" }, ...navLinks];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 border-b border-gray-100 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg" : "bg-white/85 backdrop-blur-md"
      }`}
      dir="rtl"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          <nav className="hidden lg:flex items-center gap-8 text-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${linkClass} ${pathname === link.href ? "text-[#08704C]" : "text-gray-800"}`}
              >
                {link.label}
                <span className={`${underline} ${pathname === link.href ? "w-full" : "w-0"}`}></span>
              </a>
            ))}

            <div className="relative" onMouseEnter={openGovernance} onMouseLeave={closeGovernance}>
              <a
                href="/governance"
                className={`${linkClass} flex items-center gap-1 ${pathname === "/governance" ? "text-[#08704C]" : "text-gray-800"}`}
              >
                الحوكمة
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showGovernanceMenu ? "rotate-180" : ""}`} />
                <span className={`${underline} w-0`}></span>
              </a>

              {showGovernanceMenu && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {governanceMenuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-gray-800 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className={`${linkClass} text-gray-800`}>
              تواصل معنا
              <span className={`${underline} w-0`}></span>
            </a>
          </nav>

          <MobileMenu isScrolled={isScrolled} />

          <a href="https://store.yaamur.org.sa/Association/Projects?category=9143" target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-gradient-to-r from-[#08704C] via-[#00A186] to-[#08704C] hover:shadow-2xl text-white shadow-lg transition-all duration-300 hover:scale-105 bg-[length:200%_100%] hover:bg-right"
              size="lg"
            >
              <ExternalLink className="w-4 h-4 ml-2" />
              منصة التبرع
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;