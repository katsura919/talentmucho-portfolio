export type PortfolioMediaType = "image" | "pdf";

export type PortfolioStat = {
  value: string;
  label: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  type: PortfolioMediaType;
  summary: string;
  tags: string[];
  format: string;
  preview?: string;
  images?: string[];
};

export type PortfolioFeature = {
  id: string;
  title: string;
  category: string;
  type: PortfolioMediaType;
  summary: string;
  highlight: string;
  tags: string[];
  format: string;
  preview?: string;
};

export type PortfolioCapability = {
  title: string;
  description: string;
  icon: string;
};

export type PortfolioTestimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export type PortfolioClient = {
  name: string;
  industry: string;
};

export type PortfolioStep = {
  title: string;
  description: string;
};

export const portfolioStats: PortfolioStat[] = [
  {
    value: "120+",
    label: "Assets delivered across branding, ads, web, and print",
  },
  {
    value: "40+",
    label: "Active clients served across service niches",
  },
  {
    value: "3×",
    label: "Average conversion lift on full-funnel retainer builds",
  },
];

export const featuredWork: PortfolioFeature[] = [
  {
    id: "brand-playbook",
    title: "Brand Playbook Kit",
    category: "Branding",
    type: "pdf",
    summary: "Full identity guide with fonts, color system, and usage rules.",
    highlight: "Cut brand inconsistency by 100% — one guide, every channel.",
    tags: ["Identity", "Guidelines", "Collateral"],
    format: "PDF • 18 pages",
  },
  {
    id: "service-ads",
    title: "Service Ad Creative Set",
    category: "Paid Ads",
    type: "image",
    summary: "High-contrast creatives built for scroll-stopping results.",
    highlight: "+43% CTR vs. previous creative on the same ad spend.",
    tags: ["Meta", "Google", "Retargeting"],
    format: "PNG • 6 variations",
  },
  {
    id: "seo-proof",
    title: "SEO Growth Snapshot",
    category: "SEO Proof",
    type: "pdf",
    summary: "Rankings, traffic lift, and visibility highlights.",
    highlight: "Page 1 rankings for 12 target keywords within 90 days.",
    tags: ["Rankings", "Traffic", "Reporting"],
    format: "PDF • 10 pages",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "brochure-design",
    title: "Brochure Design Series",
    category: "Print",
    type: "image",
    summary:
      "Cover, interior spread, and client-ready mockups for a full print package.",
    tags: ["Brochure", "Print", "Mockup"],
    format: "PNG • 4 views",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517601/Brochure_design_new_front_hgfoae.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517601/Brochure_design_new_front_hgfoae.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517603/Brochure_design_new_ieqmwq.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517599/Mockup_foufoe.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517601/Mockup2_uixazo.png",
    ],
  },
  {
    id: "business-cards",
    title: "Business Card Series",
    category: "Branding",
    type: "image",
    summary: "Modern, service-forward layouts with clear hierarchy.",
    tags: ["Print", "Identity"],
    format: "PNG • 5 views",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517778/Business_card_mockup2_jpkxic.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517778/Business_card_mockup2_jpkxic.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517675/BUSINESS_CARD_FRONT_h7hj2l.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517676/BUSINESS_CARD_BACK_pbango.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517674/BUSINESS_CARD2_FRONT_pjlddz.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517677/BUSINESS_CARD2_BACK_fb1gpk.png",
    ],
  },
  {
    id: "social-covers",
    title: "Social Cover & Banner Pack",
    category: "Social Media",
    type: "image",
    summary:
      "Platform-ready cover and banner set for Facebook, LinkedIn, and YouTube channels.",
    tags: ["Facebook", "LinkedIn", "YouTube"],
    format: "PNG • 4 covers",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518978/Facebook_cover_s9whhu.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518985/Linkedin_cover_abjcgz.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518978/Facebook_cover_s9whhu.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518975/Youtube_banner_1_mfowjd.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518778/Youtube_banner_kiogyz.png",
    ],
  },
  {
    id: "logo-system",
    title: "Logo System & Mockup Set",
    category: "Branding",
    type: "image",
    summary:
      "Primary, horizontal, and vertical logo variants presented across realistic brand mockups.",
    tags: ["Logo", "Identity", "Mockup"],
    format: "PNG • 10 assets",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518723/MOCKUP_7_o3xglk.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518723/MOCKUP_7_o3xglk.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518721/MOCKUP_5_fvky3c.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518719/MOCKUP_4_epzynf.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518716/MOCKUP_2__c9hxw8.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518715/MOCKUP_1_kclyi0.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518711/5_COMPANY_LOGO_nbwsys.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518709/MOCKUP_3_pxyobh.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518709/2_logo_horizontal_tnhdwl.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518634/1_logo_vertical_rlxrhk.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518633/MOCKUP_6_q2nyiy.png",
    ],
  },
  {
    id: "brand-mockups",
    title: "Mockups",
    category: "Branding",
    type: "image",
    summary:
      "Branded merchandise and stationery mockups across print and lifestyle surfaces.",
    tags: ["Mockup", "Branding", "Print"],
    format: "PNG • 12 assets",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517873/mugs_mockups_eroz4f.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517873/mugs_mockups_eroz4f.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517869/Paper_mockup_crbtps.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517868/mugs_mockup3_nokzm5.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517867/mugs_mockup2_zhqm4l.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517866/mockup_1_odey25.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517865/Magzine_mockup_pnxipq.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517864/Facemask_mockup_q1clak.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517863/beanie_mockup_mutr4k.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517863/Sign_mockup_kigmy5.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517863/Sign_mockup_kigmy5.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517860/Dairy_mockup_nedsef.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517859/cap_mockup_of04av.png",
    ],
  },
  {
    id: "packaging-mockup",
    title: "Packaging Mockup",
    category: "Branding",
    type: "image",
    summary:
      "Product and label packaging mockups spanning wellness, food, and consumer goods.",
    tags: ["Packaging", "Label", "Mockup"],
    format: "Mixed • 16 assets",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518027/Product_packaging_bxh42v.jpg",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518027/Product_packaging_bxh42v.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518027/CBD_LABEL_aanzqe.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518027/CBD_LABEL_aanzqe.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518024/Dropper_label_iw94ky.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518024/Inca_Berry_dicbe7.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518016/Box_Packaging_hsm8lf.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518014/Bodywash_branding_jjyvoh.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518012/Body_wash_mdpulw.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518012/Aleavia_zfvyx5.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518010/airpods_btnybn.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518009/Techcorner_jidzic.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518009/Serum_packaging_cqhsos.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518007/serum_packaging_rpspnr.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518004/Odoga_Packaging_rvbqww.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518002/Food_pouch_iw6zfh.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518001/Dispenser_Pump_Bottle_Mockup_xadis5.jpg",
    ],
  },
  {
    id: "tshirt-mockup",
    title: "Tshirt Mockup",
    category: "Branding",
    type: "image",
    summary:
      "Apparel branding mockups showcasing t-shirt artwork placement and style variations.",
    tags: ["Tshirt", "Apparel", "Mockup"],
    format: "PNG • 5 assets",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518088/Tshirt_mockup_1_ctpfia.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518088/Tshirt_mockup_1_ctpfia.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518087/Tshirt_mockup_4_tbjer8.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518085/Tshirt_mockup_2_aqj3nc.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518085/Tshirt_mockup_2_aqj3nc.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518085/Tshirt_mockup_3_fgenii.png",
    ],
  },
  {
    id: "branding-tips",
    title: "Branding Tips",
    category: "Social Media Post",
    type: "image",
    summary:
      "Carousel-style branding tip posts designed for educational social engagement.",
    tags: ["Branding", "Tips", "Carousel"],
    format: "PNG • 6 posts",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522934/5_ij0sm1.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522934/5_ij0sm1.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522930/3_ii7q8h.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522928/2_jrxpnd.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522928/4_e8fv2g.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522927/1_u4sp9f.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522925/Branding_tips_yytzne.png",
    ],
  },
  {
    id: "brand-investment",
    title: "Brand Investment",
    category: "Social Media Post",
    type: "image",
    summary:
      "Social post series focused on why consistent brand investment drives long-term growth.",
    tags: ["Brand Awareness", "Marketing", "Social"],
    format: "PNG • 5 posts",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522887/Brand_invesment_wk9abn.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522887/Brand_invesment_wk9abn.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522801/Boost_brand_awareness_3_pugxka.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522799/Boost_brand_awareness_5_zu3vqy.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522798/Boost_brand_awareness_4_vcoznk.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774522796/Boost_brand_awareness_crlue1.png",
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    category: "Social Media Post",
    type: "image",
    summary:
      "Educational social graphics covering core digital channels with an email marketing focus.",
    tags: ["Email Marketing", "Digital Marketing", "Social"],
    format: "PNG • 7 posts",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523251/Email_marketing_pyuubu.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523251/Types_of_digital_marketing_xdf0h5.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523251/Mobile_marketing_hprjbd.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523251/Email_marketing_pyuubu.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523250/6_Types_of_digital_marketing_rw92bp.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523249/Social_medial_marketing_qwvzcl.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523249/Seo_nczkqg.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523248/Ppc_y4iq2r.png",
    ],
  },
  {
    id: "marketing-tips",
    title: "Marketing Tips",
    category: "Social Media Post",
    type: "image",
    summary:
      "Quick-hit social creatives focused on practical marketing tips and execution ideas.",
    tags: ["Marketing", "Tips", "Social"],
    format: "PNG • 3 posts",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523308/Marketing_tips-05_sazmad.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523308/Marketing_tips-05_sazmad.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523304/Marketing_tips-02_qsomzg.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774523303/Marketing_tips-04_ju57v6.png",
    ],
  },
  {
    id: "slayer-media",
    title: "Slayer Media",
    category: "Social Media Post",
    type: "image",
    summary:
      "Mixed social media creatives covering engagement, ad visuals, marketing benefits, and quote content.",
    tags: ["Social Media", "Engagement", "Marketing"],
    format: "PNG • 12 posts",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519351/Instagram_tool_cci070.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519351/Instagram_tool_cci070.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519349/Facebok_ads_suekqp.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519344/Social_media_engagement_post-02_nuxiyf.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519344/Social_media_engagement_post-04_b3bavi.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519333/Social_media_engagement_post-01-01_dtxybg.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519325/Marketing_benefits-03_rofx0i.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519316/Marketing_benefits-02_ujqjvc.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519313/Marketing_benefits-05_utl6dx.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519308/Marketing_benefits-04_rwlblj.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519306/Marketing_benefits-01_toigzl.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519289/Quote_2_xdaz5y.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519286/Quote_1_ejdnim.png",
    ],
  },
  {
    id: "food",
    title: "Food",
    category: "Social Media Post",
    type: "image",
    summary:
      "Food-focused social media creatives featuring product highlights and customer-focused messaging.",
    tags: ["Food", "Social Media", "Promotion"],
    format: "PNG • 8 posts",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518454/5_zgtenm.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518454/5_zgtenm.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518454/5_zgtenm.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518455/1_t8jgrf.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518456/2_ely3ag.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518458/3_w3jeoo.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518459/4_btg5m1.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518464/Happy_customers_h6u9mx.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518467/Happy_customers_2_bl13il.png",
    ],
  },
  {
    id: "ducts-all-done",
    title: "Ducts All Done Posts",
    category: "Social Media Post",
    type: "image",
    summary:
      "HVAC service social media creatives showcasing professional duct cleaning and maintenance work.",
    tags: ["HVAC", "Social Media", "Service"],
    format: "PNG • 14 posts",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667004/WhatsApp_Image_2026-03-27_at_9.38.41_PM_oy6qi9.jpg",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667004/WhatsApp_Image_2026-03-27_at_9.38.41_PM_oy6qi9.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667008/WhatsApp_Image_2026-03-27_at_9.38.42_PM_3_nsw7xk.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667008/WhatsApp_Image_2026-03-27_at_9.38.42_PM_1_ct2z5t.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667007/WhatsApp_Image_2026-03-27_at_9.51.17_PM_khvghw.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667007/WhatsApp_Image_2026-03-27_at_9.38.42_PM_4_hoxv11.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667007/WhatsApp_Image_2026-03-27_at_9.38.42_PM_2_ruuakx.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667006/WhatsApp_Image_2026-03-27_at_9.38.42_PM_v1ivmc.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667006/WhatsApp_Image_2026-03-27_at_9.38.42_PM_5_cedxgs.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667006/WhatsApp_Image_2026-03-27_at_9.38.41_PM_9_xfeywq.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667006/WhatsApp_Image_2026-03-27_at_9.38.41_PM_4_qnibnh.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667005/WhatsApp_Image_2026-03-27_at_9.38.41_PM_8_ujisoz.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667005/WhatsApp_Image_2026-03-27_at_9.38.41_PM_6_ecpzob.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667005/WhatsApp_Image_2026-03-27_at_9.38.41_PM_7_mtxb3a.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667005/WhatsApp_Image_2026-03-27_at_9.38.41_PM_3_q1cp3o.jpg",
    ],
  },
  {
    id: "ducts-all-done-carousel-1",
    title: "Ducts All Done carousel post 1",
    category: "Social Media Post",
    type: "image",
    summary:
      "Carousel-style post for Ducts All Done showcasing service highlights and customer benefits.",
    tags: ["Carousel", "HVAC", "Social Media"],
    format: "PNG • 5 slides",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667138/WhatsApp_Image_2026-03-27_at_9.59.53_PM_fwbhcq.jpg",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667138/WhatsApp_Image_2026-03-27_at_9.59.53_PM_fwbhcq.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667136/WhatsApp_Image_2026-03-27_at_9.59.52_PM_b8iai1.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667134/WhatsApp_Image_2026-03-27_at_9.59.52_PM_1_out5x5.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667134/WhatsApp_Image_2026-03-27_at_9.59.52_PM_2_upjmo4.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667133/WhatsApp_Image_2026-03-27_at_9.59.53_PM_1_otrriw.jpg",
    ],
  },
  {
    id: "ducts-all-done-carousel-2",
    title: "Ducts All Done carousel post 2",
    category: "Social Media Post",
    type: "image",
    summary:
      "Carousel-style post for Ducts All Done showcasing service highlights and customer benefits.",
    tags: ["Carousel", "HVAC", "Social Media"],
    format: "PNG • 5 slides",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667123/WhatsApp_Image_2026-03-27_at_9.54.00_PM_1_twhye0.jpg",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667123/WhatsApp_Image_2026-03-27_at_9.54.00_PM_1_twhye0.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667115/WhatsApp_Image_2026-03-27_at_9.54.00_PM_mik8dx.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667099/WhatsApp_Image_2026-03-27_at_9.54.01_PM_2_msyhtk.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667099/WhatsApp_Image_2026-03-27_at_9.54.01_PM_1_vw8cfg.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667098/WhatsApp_Image_2026-03-27_at_9.54.01_PM_remmn7.jpg",
    ],
  },
  {
    id: "ducts-all-done-carousel-3",
    title: "Ducts All Done carousel post 3",
    category: "Social Media Post",
    type: "image",
    summary:
      "Carousel-style post for Ducts All Done showcasing service highlights and customer benefits.",
    tags: ["Carousel", "HVAC", "Social Media"],
    format: "PNG • 5 slides",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667094/WhatsApp_Image_2026-03-27_at_9.51.18_PM_2_pozqml.jpg",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667094/WhatsApp_Image_2026-03-27_at_9.51.18_PM_2_pozqml.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667093/WhatsApp_Image_2026-03-27_at_9.51.18_PM_1_iefsce.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667067/WhatsApp_Image_2026-03-27_at_9.51.17_PM_adfo7j.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667067/WhatsApp_Image_2026-03-27_at_9.51.18_PM_lbmb8l.jpg",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774667067/WhatsApp_Image_2026-03-27_at_9.51.18_PM_3_vtmfcs.jpg",
    ],
  },
];

export const portfolioCapabilities: PortfolioCapability[] = [
  {
    title: "Conversion-Ready Design",
    description:
      "Every asset is built to guide attention and trigger the next action.",
    icon: "Target",
  },
  {
    title: "Operational Support",
    description:
      "Dedicated VA coverage keeps every lead moving with clean follow-ups.",
    icon: "Users",
  },
  {
    title: "Continuous Optimization",
    description: "We monitor results and keep refining the creative stack.",
    icon: "TrendingUp",
  },
];

export const portfolioTestimonials: PortfolioTestimonial[] = [
  {
    id: "t1",
    quote:
      "The ad creatives they delivered doubled our click-through rate in the first two weeks. The team understood our brand immediately — no back-and-forth, just results.",
    name: "Marcus Rivera",
    role: "Marketing Director",
    company: "Apex Home Services",
    initials: "MR",
  },
  {
    id: "t2",
    quote:
      "We finally have a brand that looks as professional as our service. The playbook they built made it easy to stay consistent across every channel.",
    name: "Sandra Okafor",
    role: "Founder",
    company: "Okafor Legal Group",
    initials: "SO",
  },
  {
    id: "t3",
    quote:
      "SEO used to feel like a black box. Their reporting made it crystal clear — 12 keywords on page one in under 90 days. Our pipeline has never been fuller.",
    name: "David Chen",
    role: "Operations Lead",
    company: "Pacific Med Clinics",
    initials: "DC",
  },
];

export const portfolioClients: PortfolioClient[] = [
  { name: "Apex Home Services", industry: "Home Services" },
  { name: "Okafor Legal Group", industry: "Legal" },
  { name: "Pacific Med Clinics", industry: "Healthcare" },
  { name: "Crestline Realty", industry: "Real Estate" },
  { name: "NovaTech Solutions", industry: "Technology" },
  { name: "Sunrise Dental Co.", industry: "Dental" },
  { name: "Evergreen Finance", industry: "Finance" },
];

export const portfolioSteps: PortfolioStep[] = [
  {
    title: "Audit the Funnel",
    description:
      "We map traffic sources and identify drop-offs that creative can fix.",
  },
  {
    title: "Build the Asset Stack",
    description:
      "Design the visuals, copy, and proof pieces that match each stage.",
  },
  {
    title: "Deploy with VA Support",
    description:
      "Dedicated staff handles scheduling, inbox coverage, and routing.",
  },
  {
    title: "Measure and Refine",
    description:
      "Weekly reviews keep the portfolio evolving with performance data.",
  },
];
