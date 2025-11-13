import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Calendar, Phone, MessageCircle, Clock } from "lucide-react";

interface ScheduleConsultationModalProps {
  open: boolean;
  onClose: () => void;
  serviceName?: string;
}

const ScheduleConsultationModal = ({
  open,
  onClose,
  serviceName = "",
}: ScheduleConsultationModalProps) => {

  // ✅ Correct Cal.com modal opener
  const openCalComScheduling = () => {
    if ((window as any).Cal) {
      (window as any).Cal("modal", {
        calLink: "rahil-memdani-g3c9vb",
        config: { layout: "month_view", theme: "light" },
      });
    } else {
      window.open("https://cal.com/rahil-memdani-g3c9vb", "_blank");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-xl relative max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100 flex justify-between items-center p-4 rounded-t-2xl">
          <h2 className="text-lg font-semibold text-gray-900">
            Schedule Consultation
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Choose your preferred booking method
          </p> */}

          <div className="space-y-4">

            {/* Cal.com Button */}
            <button
              className="w-full bg-gradient-to-r from-gold to-yellow-300 text-black p-5 rounded-xl transition-colors duration-200 text-left flex items-center gap-4 hover:brightness-110"
              onClick={openCalComScheduling}  // 🚀 Opens the modal instantly
            >
              <Calendar className="h-6 w-6" />
              <div>
                <div className="font-semibold">Online Booking</div>
                <div className="text-sm text-gray-700">Instant confirmation</div>
              </div>
            </button>

            {/* Contact Buttons */}
            <div className="pt-4 border-t border-gray-100">
              {/* <p className="text-sm text-gray-500 mb-3">Need immediate help?</p> */}

              <div className="grid grid-cols-2 gap-3">

                {/* Call button */}
                <a
                  href="tel:+919167156829"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium flex items-center justify-center rounded-md p-3"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>

                {/* WhatsApp button */}
                <a
                  href={`https://wa.me/+919167156829?text=${encodeURIComponent(
                    "Hi, I would like to schedule a consultation."
                  )}`}

                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium flex items-center justify-center rounded-md p-3"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
            {/* 
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <div className="flex items-center gap-2 text-blue-700 text-sm">
                <Clock className="h-4 w-4" />
                <span>
                  <strong>Hours:</strong> Mon–Fri 8AM–6PM • Sat 9AM–2PM (EST)
                </span>
              </div>
            </div> */}

          </div>
        </div>

      </div>
    </div>
  );
};

export default ScheduleConsultationModal;
