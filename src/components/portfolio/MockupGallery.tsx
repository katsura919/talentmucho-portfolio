"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Maximize2 } from "lucide-react";

type Mockup = {
    id: string;
    title: string;
    url: string;
    image: string;
    category: string;
};

const MOCKUPS: Mockup[] = [
    {
        id: "hvac",
        title: "HVAC Services",
        url: "https://hvac-service-landing-page-psi.vercel.app/",
        image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772971723/hvac-service-landing-page-psi.vercel.app__idbugi.png",
        category: "Air Conditioning & Heating"
    },
    {
        id: "remodeling",
        title: "Home Remodeling",
        url: "https://home-remodeling-service-landing-pag-zeta.vercel.app/",
        image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772971753/home-remodeling-service-landing-pag-zeta.vercel.app__vnt49o.png",
        category: "Renovation"
    },
    {
        id: "plumbing",
        title: "Plumbing Expert",
        url: "https://plumbing-service-landing-page.vercel.app/",
        image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772971811/plumbing-service-landing-page.vercel.app__xrfplf.png",
        category: "Plumbing"
    },
    {
        id: "pool",
        title: "Pool Cleaning",
        url: "https://pool-cleaning-service-landing-page.vercel.app/",
        image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772971893/pool-cleaning-service-landing-page.vercel.app__usrucn.png",
        category: "Maintenance"
    },
    {
        id: "handyman",
        title: "Handyman Pro",
        url: "https://handymain-service-landing-page.vercel.app/",
        image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772971924/handymain-service-landing-page.vercel.app__qqvtvn.png",
        category: "General Repair"
    },
    {
        id: "pest",
        title: "Pest Control",
        url: "https://pest-control-landing-page.vercel.app/",
        image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772971951/pest-control-landing-page.vercel.app__guwj5s.png",
        category: "Exterminator"
    },
    {
        id: "electrician",
        title: "Electrician Expert",
        url: "https://electrician-service-landing-page.vercel.app/",
        image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772971850/electrician-service-landing-page.vercel.app__xrxjom.png",
        category: "Electrical Services"
    },
    {
        id: "landscaping",
        title: "Landscaping & Lawn",
        url: "https://landscapping-landing-page.vercel.app/",
        image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773056540/landscapping-landing-page.vercel.app__fev72x.png",
        category: "Lawn & Garden"
    },
    {
        id: "plumbing-prof",
        title: "Professional Plumbing",
        url: "https://plumbing-service-landing-page.vercel.app/",
        image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773056541/plumbing-service-landing-page.vercel.app__1_j9bsaf.png",
        category: "Plumbing Services"
    }
];

export default function MockupGallery() {
    const [activeMockup, setActiveMockup] = useState<Mockup | null>(null);

    useEffect(() => {
        if (activeMockup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [activeMockup]);

    return (
        <div className="w-full relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCKUPS.map((mockup, i) => (
                    <div
                        key={mockup.id}
                        className="relative group overflow-hidden border border-beige-200 bg-beige-50 flex flex-col cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ease-out will-change-transform translate-y-4 opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards]"
                        style={{ animationDelay: `${i * 100}ms` }}
                        onClick={() => setActiveMockup(mockup)}
                    >
                        <div className="relative h-[400px] w-full overflow-hidden bg-beige-100">
                            <img
                                src={mockup.image}
                                alt={`${mockup.title} Preview`}
                                className="w-full h-auto object-cover object-top transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-[15%]"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 backdrop-blur-[2px]">
                                <Maximize2 className="w-10 h-10 text-white mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100" />
                                <span className="text-white font-bold text-lg tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                    View Full Design
                                </span>
                            </div>
                        </div>

                        <div className="p-5 bg-white flex justify-between items-center relative z-10">
                            <div>
                                <h3 className="font-semibold text-charcoal-900 text-lg">{mockup.title}</h3>
                                <p className="text-sm text-taupe-400 font-medium tracking-wide uppercase mt-1">{mockup.category}</p>
                            </div>
                            <a
                                href={mockup.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-beige-100 hover:bg-[var(--primary)] hover:text-white rounded-none transition-colors duration-300"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`Visit ${mockup.title} website`}
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {activeMockup && (
                <div
                    className="fixed inset-0 z-[100] flex items-start justify-center bg-black/95 backdrop-blur-md overflow-y-auto p-4 md:p-10"
                    onClick={() => setActiveMockup(null)}
                >
                    <div className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none">
                        <div className="pointer-events-auto">
                            <a
                                href={activeMockup.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-bold uppercase tracking-wider text-sm hover:bg-[var(--espresso-700)] transition-colors"
                            >
                                Visit Live Website <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveMockup(null);
                            }}
                            className="pointer-events-auto p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all backdrop-blur-sm"
                            aria-label="Close modal"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div
                        className="relative w-full max-w-5xl mt-16 md:mt-12 mx-auto bg-espresso-800 shadow-2xl animate-[fade-in-up_0.4s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={activeMockup.image}
                            alt={`Full design of ${activeMockup.title}`}
                            className="w-full h-auto block"
                        />

                        <div className="p-8 bg-espresso-800 flex justify-center border-t border-espresso-700">
                            <a
                                href={activeMockup.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-charcoal-900 font-bold uppercase tracking-widest text-sm hover:bg-[var(--primary)] hover:text-white transition-colors"
                            >
                                Visit This Website <ArrowRightIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
