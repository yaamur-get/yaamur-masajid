
import Image from "next/image";
import { partners as partnerList } from "@/data/partners";
import { Building2 } from "lucide-react";

export function PartnersCarousel() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {partnerList.map((partner, index) => {
          const srcUrl = `/partners/${encodeURIComponent(partner.filename)}`;
          return (
            <div
              key={partner.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center border-2 border-transparent hover:border-[#08704C]/30 group-hover:scale-105 card-elevated p-6">
                <div className="w-full h-40 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={srcUrl}
                      alt={partner.name}
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 260px"
                      style={{ objectFit: "contain" }}
                      width={260}
                      height={140}
                      unoptimized
                      onError={(e) => {
                        // Log the failed URL for debugging and show fallback
                        console.warn("PartnersCarousel image failed:", srcUrl);
                        const imgEl = (e.target || e.currentTarget) as HTMLElement | null;
                        if (imgEl) imgEl.style.display = "none";
                        const fallback = imgEl?.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />

                    <div className="hidden w-16 h-12 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-2xl flex items-center justify-center text-white" style={{ display: "none" }}>
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
