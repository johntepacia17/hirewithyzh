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

export type TrustPoint = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export const siteConfig = {
  name: "hirewithyzh",
  url: "https://hirewithyzh.com",
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
    headlinePrefix: "Hire top Filipino talent, with",
    emphasis: "ease",
    lead:
      "hirewithyzh connects growing companies with vetted Filipino professionals for executive support, customer experience, operations, marketing, and back-office work.",
    quote: "Every placement should feel personal, precise, and easy to trust.",
    trustPoints: [
      {
        title: "Founder-Led",
        description: "You work directly with someone invested in every hire."
      },
      {
        title: "Quality-First",
        description: "We prioritize fit, not volume - no stacks of resumes."
      },
      {
        title: "Simple Process",
        description: "Clear, efficient hiring without unnecessary layers."
      }
    ] satisfies TrustPoint[]
  },
  about: {
    eyebrow: "- About hirewithyzh",
    heading: "We're a personal-brand hiring partner.",
    paragraphs: [
      "We help founders, operators, and growing teams hire dependable Filipino remote professionals - without the delays and guesswork of traditional agencies.",
      "Instead of sending a stack of resumes, we focus on understanding the role, filtering for fit, and presenting candidates who can contribute with confidence.",
      "The result is a hiring experience that feels clear, efficient, and built for long-term success."
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
  processSection: {
    eyebrow: "- How it works",
    heading: "A simple, structured hiring process",
    steps: [
      {
        title: "Understand your needs",
        description: "We align on the role, requirements, and what success looks like."
      },
      {
        title: "Source & vet candidates",
        description: "We identify and screen candidates based on fit, not just experience."
      },
      {
        title: "Interview & hire",
        description: "You meet only the most relevant candidates and hire directly."
      }
    ] satisfies ProcessStep[]
  },
  servicesSection: {
    eyebrow: "- What we do",
    heading: "Services tailored to how you actually work.",
    lead:
      "Flexible support across key business functions - matched to how you actually work.",
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
  founder: {
    eyebrow: "- Founder-led",
    heading: "Built by someone who understands hiring firsthand",
    paragraphs: [
      "HireWithYzh is led by Yzhiel Montero, with hands-on experience in sourcing, recruitment operations, and supporting global hiring teams.",
      "The approach is simple: stay close to the process, focus on quality, and treat every hire as a long-term decision."
    ]
  },
  career: {
    eyebrow: "- Join the team",
    heading: "We're looking for great people.",
    paragraphs: [
      "We're looking for Filipino professionals who are reliable, thoughtful, and ready to support global clients in a remote-first environment.",
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
