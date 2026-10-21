
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "966501234567"; // رقم واتساب الجمعية
  const message = "السلام عليكم، أرغب في الاستفسار عن خدمات جمعية يعمر";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="تواصل عبر واتساب"
    >
      {/* Main WhatsApp Button */}
      <div className="relative">
        {/* Pulsing Ring Animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        
        {/* Button Container */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-bounce">
          1
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-xl shadow-2xl text-sm font-semibold">
          تواصل معنا عبر واتساب
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
        </div>
      </div>
    </button>
  );
}
