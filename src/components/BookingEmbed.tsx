"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Calendar } from "lucide-react";

export default function BookingEmbed() {
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    setIframeKey(Date.now());
  }, []);

  return (
    <>
      <section id="booking" className="section bg-charcoal-900">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6 shadow-sm">
                <Calendar className="w-4 h-4" style={{ color: "#FFFFFF" }} />
                <span
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "#FFFFFF" }}
                >
                  Book Your Discovery Call
                </span>
              </div>

              <h2 className="section-title mb-6 text-3xl font-light text-white md:text-5xl">
                Let&apos;s Discuss How We Can{" "}
                <span className="text-beige-200">
                  Transform Your Business
                </span>
              </h2>

              <p className="section-subtitle max-w-2xl mx-auto text-white/80">
                Schedule a free 30-minute consultation to explore how our
                creative team can streamline your operations and help you scale.
              </p>
            </div>

            <div className="relative min-h-[650px] rounded-2xl">
              <iframe
                key={iframeKey}
                src="https://links.talentmucho.com/widget/bookings/emdiscoverycall"
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  minHeight: "900px",
                }}
                scrolling="no"
                id={`exTl4Yfikib3XZlM9CTe_${iframeKey}`}
                title="Book an Appointment"
              />
            </div>
          </div>
        </div>
      </section>

      <Script
        src="https://avsph.advancedvirtualstaff.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
