export type NavItem = {
  label: string;
  href: string;
};

export type SocialLinks = {
  linkedin: string;
  facebook: string;
  instagram: string;
};

export type Service = {
  title: string;
  description: string;
};

export const siteConfig = {
  name: "hirewithyzh",
  tagline: "Hire with Ease",
  subtagline: "Top Filipino Talent. Global Impact.",
  discoveryCallUrl: "https://forms.gle/PLACEHOLDER_DISCOVERY",
  careerApplyUrl: "https://forms.gle/PLACEHOLDER_CAREER",
  email: "hello@hirewithyzh.com",
  ctas: {
    discoveryCall: "Discovery Call →",
    discoveryCallMobile: "Call →",
    services: "Our services",
    apply: "Apply now →"
  },
  socials: {
    linkedin: "",
    facebook: "",
    instagram: ""
  } satisfies SocialLinks,
  nav: [
    { label: "Home", href: "/" },
    { label: "Careers", href: "/career" }
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Personal recruitment, global reach",
    headlineWords: ["Hire", "top", "Filipino", "talent,", "with"],
    emphasis: "ease",
    lead:
      "hirewithyzh connects growing companies with vetted Filipino professionals for executive support, customer experience, operations, marketing, and back-office work.",
    stats: [
      { value: "500+", label: "Talents placed" },
      { value: "12", label: "Countries served" },
      { value: "100%", label: "Filipino-sourced" }
    ],
    quote: "Every placement should feel personal, precise, and easy to trust."
  },
  about: {
    eyebrow: "— About hirewithyzh",
    heading: "We’re a personal-brand recruitment agency.",
    paragraphs: [
      "We help founders, operators, and growing teams hire dependable Filipino remote professionals without adding complexity to the process.",
      "The agency blends hands-on recruitment with practical business support. Instead of sending a stack of resumes, we focus on understanding the role, filtering for fit, and presenting people who can contribute with confidence.",
      "The result is a hiring experience that feels considered, efficient, and grounded in the quality of Filipino talent."
    ],
    pillars: [
      {
        label: "Vetted Talent",
        text: "Every profile is screened for communication, reliability, skill fit, and remote readiness."
      },
      {
        label: "Time Zone Aligned",
        text: "We prioritize working rhythms that support global teams without creating operational drag."
      },
      {
        label: "Personal Service",
        text: "You work with a focused partner who understands the role before recommending talent."
      }
    ]
  },
  servicesSection: {
    eyebrow: "— What we do",
    heading: "Services tailored to how you actually work.",
    closingLine: "Ready to hire with more ease?"
  },
  services: [
    {
      title: "Executive Virtual Assistants",
      description:
        "Calendar, inbox, travel, and operations support for busy founders and executives."
    },
    {
      title: "Customer Support Specialists",
      description:
        "Trained, empathetic agents who represent your brand across email, chat, and voice."
    },
    {
      title: "Marketing & Social Media",
      description:
        "Content scheduling, community management, and creative production from a remote team."
    },
    {
      title: "Bookkeeping & Admin",
      description: "Reliable financial and administrative back-office support."
    },
    {
      title: "Recruitment Support",
      description:
        "Sourcing, screening, and coordination support that keeps hiring pipelines moving."
    },
    {
      title: "Operations Coordination",
      description:
        "Remote operators who organize workflows, vendors, documentation, and recurring processes."
    }
  ] satisfies Service[],
  career: {
    eyebrow: "— Join the team",
    heading: "We’re looking for great people.",
    paragraphs: [
      "We’re looking for Filipino professionals who are reliable, thoughtful, and ready to support global clients in a remote-first environment.",
      "We review every application personally. Expect to hear back within 5 business days if there is a strong match for an active role."
    ],
    helperText: "Application form opens in a new tab. Takes about 5 minutes to complete."
  },
  notFound: {
    eyebrow: "404",
    heading: "This page is not part of the brief.",
    body: "The page you are looking for is unavailable. Return home to continue.",
    cta: "Back home"
  }
};
