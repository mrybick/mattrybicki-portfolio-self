"use client";

import { useState } from "react";
import ResumeSection from "@/components/ResumeSection";
import SkillsSection from "@/components/SkillsSection";
import Image from "next/image";

export interface Entry {
  id: string;
  title: string;
  subtitle: string;
  dateStart: string;
  dateEnd: string | null;
  isPresent: boolean;
  bullets: {
    finance: string[];
    sales: string[];
  };
}

export interface Skill {
  category: string;
  skills: {
    finance: string[];
    sales: string[];
  };
}

export interface Section {
  id: string;
  title: string;
  meta: string;
  entries: Entry[];
}

const roles: Entry[] = [
  {
    id: "kw",
    title: "Realtor",
    subtitle: "Keller Williams Arizona Realty",
    dateStart: "September 2024",
    dateEnd: null,
    isPresent: true,
    bullets: {
      sales: [
        "Closed 8 transactions totaling ~$881K across residential and land deals; independently manages full transaction lifecycle from prospecting through closing",
        "Built and deployed a regression model for comparative market analysis; conducts pricing strategy using MLS data to advise clients on fair market value",
        "Coordinates due diligence and closing processes end-to-end across lenders, escrow officers, title companies, inspectors, and counterpart agents",
      ],
      finance: [
        "Closed 8 transactions totaling ~$881K across land sales/rentals; manages full transaction lifecycle from lead generation through closing",
        "Built and deployed a regression-based CMA model using MLS data to determine fair market value, assess investment viability, and advise clients on pricing and deal structure",
        "Analyzes comparable sales, price-per-square-foot trends, and market absorption to advise buyer-clients on pricing, offer strategy, and investment viability",
        "Coordinates due diligence end-to-end across lenders, escrow officers, title companies, inspectors, and counterpart agents",
      ],
    },
  },
  {
    id: "media",
    title: "Founder & Principal",
    subtitle: "By Rybicki Media, LLC",
    dateStart: "October 2025",
    dateEnd: "March 2026",
    isPresent: false,
    bullets: {
      sales: [
        "Founded a real estate media company serving Scottsdale agents and homeowners; managed client acquisition, pricing, contracts, and delivery for listings up to $1.2M+",
        "Produced property photography and drone footage for MLS listings; coordinated shoot logistics, post-production, and final deliverables to client deadlines",
      ],
      finance: [
        "Founded a real estate media company serving Scottsdale agents and homeowners; managed client acquisition, pricing strategy, contracts, invoicing, and delivery for listings up to $1.2M+",
      ],
    },
  },
  {
    id: "van",
    title: "New Car Salesperson",
    subtitle: "Van Chevrolet Buick GMC",
    dateStart: "December 2023",
    dateEnd: "September 2024",
    isPresent: false,
    bullets: {
      sales: [
        "Ranked among top performers during peak month, contributing $40K+ in revenue; closed one of the dealership's highest-grossing single deals at $22K in dealer gross profit",
        "Qualified buyers on budget and financing, structured deals around payment sensitivity, and negotiated terms to maximize close rate",
      ],
      finance: [
        "Ranked among top performers during peak month, contributing $40K+ in revenue; closed one of the dealership's highest-grossing single deals at $22K in dealer gross profit",
        "Qualified buyers on budget and payment sensitivity, structured deals around financing options, and negotiated terms to maximize close rate and deal profitability",
      ],
    },
  },
  {
    id: "cfa",
    title: "Team Leader",
    subtitle: "Chick-fil-A",
    dateStart: "May 2021",
    dateEnd: "August 2023",
    isPresent: false,
    bullets: {
      sales: [
        "Led teams of 6–10 in high-volume environment; promoted from Team Member to Team Leader across a 2-year tenure",
        "Trained new team members on operational standards and resolved guest concerns during peak service windows",
      ],
      finance: [],
    },
  },
];

const education: Entry[] = [
  {
    id: "asu",
    title: "W.P. Carey School of Business, Arizona State University",
    subtitle: "B.S. Finance + B.S. Marketing (Professional Sales)",
    dateStart: "August 2023",
    dateEnd: null,
    isPresent: true,
    bullets: {
      finance: [
        "Completed: Managerial Finance (capital budgeting, cost of capital, TVM, capital structure, financial forecasting)",
        "Upcoming: Investments, Corporate Finance, Credit Analysis, Financial Cases + Modeling",
        "In progress: Real Estate Financial Modeling Bootcamp (Justin Kivel, REFM)",
        "In progress: Bloomberg Market Concepts",
        "Forward: M.S. Finance, Analytical Methods (planned post-undergrad enrollment)",
      ],
      sales: [
        "Completed: Professional Sales & Relationship Management, Sales Management, Negotiations",
        "Upcoming: Consumer Behavior, Bus-to-Bus Marketing Strategy",
        "Dean's List, 4 consecutive semesters",
      ],
    },
  },
];

const honors: Entry[] = [
  {
    title: "Sales Scholar - W.P. Carey Professional Sales Program",
    id: "ss",
    subtitle: "Arizona State University · 1 of 24 selected",
    dateStart: "March 2026",
    dateEnd: null,
    isPresent: true,
    bullets: {
      finance: [
        "Competitively selected as one of 24 Sales Scholars in the W.P. Carey Professional Sales Program",
        "National competition track and executive mentorship beginning Fall 2026",
      ],
      sales: [
        "Competitively selected as one of 24 Sales Scholars in the W.P. Carey Professional Sales Program",
        "Competed nationally at the MTSU Collegiate Sales Competition (Apr 2026), selling Oracle NetSuite in multi-round judged B2B roleplay",
        "Selected for national competitions and executive mentorship beginning Fall 2026",
      ],
    },
  },
  {
    title: "Honor Board Member - Delta Tau Delta",
    id: "delt",
    subtitle: "Theta Gamma Chapter - Arizona State University",
    dateStart: "November 2023",
    dateEnd: "November 2024",
    isPresent: false,
    bullets: {
      finance: [
        "Reviewed conduct cases and upheld organizational accountability in a structured, quasi-judicial process",
        "Coordinated case proceedings with chapter leadership and applied national fraternity bylaws to recommend sanctions",
      ],
      sales: [
        "Reviewed conduct cases and upheld organizational accountability in a structured, quasi-judicial process",
        "Coordinated case proceedings with chapter leadership and applied national fraternity bylaws to recommend sanctions",
      ],
    },
  },
];

const competitions: Entry[] = [
  {
    id: "jnj",
    title: "J&J University Case Competition - 2nd of 8 teams in finals",
    subtitle: "Johnson & Johnson · EPG and Operations · ASU Campus",
    dateStart: "April 2026",
    dateEnd: null,
    isPresent: false,
    bullets: {
      finance: [
        "Placed 2nd of 8 teams in finals; field of 180 students across ~26 teams competing on a real Johnson & Johnson financial case",
        "Led financial modeling on a 7-person team; hand-coded a Python-based DCF simulating 180 decision combinations across a 10-year P&L",
        "Validated the model to 0.000% error against the provided Excel baseline workbook",
        "Recommended scenario #22 over the NPV-maximizing scenario, framed around J&J's Credo (medium pricing reaching 80% patient access vs high pricing capping at 65%)",
        "Presented the recommendation to a panel of J&J executives in a 20-minute IC-style presentation",
      ],
      sales: [
        "Placed 2nd of 8 teams in finals; field of 180 students across ~26 teams",
        "Led financial modeling and recommendation framing on a 7-person team analyzing a real Johnson & Johnson business case",
        "Presented to a panel of J&J executives in a 20-minute IC-style format",
      ],
    },
  },
  {
    id: "mtsu",
    title: "MTSU National Tech Sales Competition",
    subtitle: "Middle Tennessee State University · Murfreesboro, TN",
    dateStart: "April 2026",
    dateEnd: null,
    isPresent: false,
    bullets: {
      finance: [],
      sales: [
        "Selected by W.P. Carey faculty to represent ASU at a national collegiate tech sales competition against top university sales programs",
        "Sold Oracle NetSuite in a multi-round judged B2B roleplay",
      ],
    },
  },
  {
    id: "samsara",
    title: "Sun Devil Sales Pitch Competition - Samsara",
    subtitle: "W.P. Carey, ASU",
    dateStart: "January 2026",
    dateEnd: null,
    isPresent: false,
    bullets: {
      finance: [],
      sales: [
        "Competed in a live sales pitch competition representing Samsara",
        "Evaluated by industry professionals on presentation and value-proposition delivery",
      ],
    },
  },
];

const projects: Entry[] = [
  {
    id: "plaincomp",
    title: "PlainComp - Residential Property Valuation Platform",
    subtitle: "Founder · Pre-launch",
    dateStart: "2025",
    dateEnd: null,
    isPresent: true,
    bullets: {
      finance: [
        "Designed and deployed a regression-based residential valuation platform analyzing 25+ data points per comparable sale",
        "Multi-factor weighted comp scoring producing confidence-graded valuations (A-E) with market adjustments",
        "AI-generated narratives and end-to-end PDF reporting pipeline",
      ],
      sales: [
        "Founded a residential property valuation platform serving real estate professionals; pre-launch",
        "End-to-end product ownership: regression modeling, valuation logic, AI-generated narratives, PDF reporting",
      ],
    },
  },
  {
    id: "dcf-opt",
    title: "DCF Scenario Optimizer",
    subtitle: "Python · GitHub · Hand-typed",
    dateStart: "2026",
    dateEnd: null,
    isPresent: false,
    bullets: {
      finance: [
        "Python tool that programmatically evaluates every valid combination of business decisions in a DCF model",
        "180 valid decision combinations ranked by NPV across a 10-year P&L to identify the maximizing strategy",
        "Validated to 0.000% error against an Excel source of truth",
        "Used in J&J Case Competition (2nd place, Apr 2026)",
      ],
      sales: [],
    },
  },
  {
    id: "cma",
    title: "CMA Regression Model",
    subtitle: "Internal · Used in transactions",
    dateStart: "2025",
    dateEnd: null,
    isPresent: true,
    bullets: {
      finance: [
        "Built and deployed a regression-based comparative market analysis model using MLS data",
        "Used in live transactions at Keller Williams to determine fair market value, assess investment viability, and advise on pricing and deal structure",
        "Trained on MLS comparable sales data",
      ],
      sales: [],
    },
  },
];

const licenses: Entry[] = [
  {
    id: "azdre",
    title: "Arizona Real Estate Salesperson License",
    subtitle: "Arizona Department of Real Estate",
    dateStart: "September 2024",
    dateEnd: null,
    isPresent: true,
    bullets: {
      finance: ["Active Arizona REALTOR® license; brokerage at Keller Williams Arizona Realty"],
      sales: ["Active Arizona REALTOR® license; brokerage at Keller Williams Arizona Realty"],
    },
  },
  {
    id: "part107",
    title: "FAA Part 107 Remote Pilot Certificate",
    subtitle: "Federal Aviation Administration",
    dateStart: "Active",
    dateEnd: null,
    isPresent: false,
    bullets: {
      finance: [
        "Active FAA Part 107 certificate for commercial UAS operations",
        "Used in real estate media work for aerial photography and video",
      ],
      sales: [
        "Active FAA Part 107 certificate for commercial UAS operations",
        "Used in real estate media work for aerial photography and video",
      ],
    },
  },
  {
    id: "naiop",
    title: "NAIOP Arizona - Student Member",
    subtitle: "Commercial Real Estate Development Association",
    dateStart: "Current",
    dateEnd: null,
    isPresent: false,
    bullets: {
      finance: [
        "Student member of NAIOP Arizona, the commercial real estate development association",
      ],
      sales: [],
    },
  },
  {
    id: "memberships",
    title: "Memberships",
    subtitle: "ProSales Gold · FMA · Real Estate Club · NAR®",
    dateStart: "Active",
    dateEnd: null,
    isPresent: false,
    bullets: {
      finance: [
        "ProSales Gold Member, ASU",
        "Financial Management Association, ASU",
        "Real Estate Club, ASU",
        "National Association of REALTORS® (NAR®)",
      ],
      sales: [
        "ProSales Gold Member, ASU",
        "Financial Management Association, ASU",
        "Real Estate Club, ASU",
        "National Association of REALTORS® (NAR®)",
      ],
    },
  },
];

const skills: Skill[] = [
  {
    category: "Analytical",
    skills: {
      finance: [
        "DCF Modeling",
        "Scenario & Sensitivity Analysis",
        "NPV/IRR",
        "Regression Analysis",
        "Comparative Market Analysis",
        "Advanced Excel",
        "Market Research & Valuation",
      ],
      sales: [
        "DCF Modeling",
        "Scenario & Sensitivity Analysis",
        "Regression Analysis",
        "Comparative Market Analysis",
        "Advanced Excel",
        "Market Research & Valuation",
      ],
    },
  },
  {
    category: "Real Estate",
    skills: {
      finance: [
        "MLS Research",
        "Contract Negotiation",
        "Due Diligence Coordination",
        "Residential & Land Transactions",
        "Investment Analysis",
        "CRE Financial Modeling (REFM in progress)",
      ],
      sales: [],
    },
  },
  {
    category: "Sales",
    skills: {
      finance: [],
      sales: [
        "Negotiation & Deal Structuring",
        "Client Advisory",
        "Prospecting & Lead Generation",
        "Objection Handling",
        "CRM Systems",
        "Business Development",
      ],
    },
  },
  {
    category: "Software",
    skills: {
      finance: ["Python (beginner)", "TypeScript (beginner)", "Git / GitHub", "Excel"],
      sales: [
        "TypeScript (beginner)",
        "JavaScript (beginner)",
        "Next.js (learning)",
        "Git / GitHub",
      ],
    },
  },
  {
    category: "Languages",
    skills: {
      finance: ["English (native)", "Polish (beginner)"],
      sales: ["English (native)", "Polish (beginner)"],
    },
  },
];

const sections: Section[] = [
  {
    id: "exp",
    title: "Experience",
    meta: "4 Roles",
    entries: roles,
  },
  {
    id: "edu",
    title: "Education",
    meta: "Tempe, AZ",
    entries: education,
  },
  {
    id: "honors",
    title: "Honors & Leadership",
    meta: "4X Dean's List",
    entries: honors,
  },
  {
    id: "comps",
    title: "Competitions",
    meta: "2026",
    entries: competitions,
  },
  {
    id: "projects",
    title: "Projects",
    meta: "Built with Passion",
    entries: projects,
  },
  {
    id: "licenses",
    title: "Licenses & Certifications",
    meta: "Active",
    entries: licenses,
  },
];

export default function ResumePage() {
  const [activeLane, setActiveLane] = useState<"finance" | "sales">("finance");
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="px-6 py-8">
      <header className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-12 items-start border-b border-foreground pb-12 mb-12">
        <div className="relative aspect-square md:aspect-4/5 border-foreground">
          <Image
            src="/headshot.jpeg"
            alt="Matthew Rybicki"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover grayscale"
          />
        </div>
        <div className="flex flex-col gap-8 md:gap-0 justify-between self-stretch">
          <h1 className=" text-display-xl md:text-display-2xl font-bold tracking-display leading-[0.88]">
            Matthew <br />
            J.
            <br /> Rybicki<span className="text-foreground-mono">.</span>
          </h1>
          <p className="text-body-lg text-foreground-muted max-w-[36ch]">
            People in one degree, money in the other.
          </p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 border-t border-divider pt-4">
            <dt className="font-mono uppercase text-mono-label text-foreground-mono">Email</dt>
            <dd className="font-mono text-mono-label">mrybick2@asu.edu</dd>
            <dt className="font-mono uppercase text-mono-label text-foreground-mono">LinkedIn</dt>
            <dd className="font-mono text-mono-label">
              <a
                href="https://linkedin.com/in/matthew-j-rybicki"
                target="_blank"
                rel="noopener noreferrer"
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                matthew-j-rybicki
              </a>
            </dd>
            <dt className="font-mono uppercase text-mono-label text-foreground-mono">Location</dt>
            <dd className="font-mono text-mono-label">Phoenix, AZ</dd>
          </dl>
        </div>
      </header>
      <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-baseline border-b border-divider pb-3 mb-8">
        <span className="font-mono uppercase text-mono-label tracking-mono text-foreground-mono">
          View as
        </span>
        <div className="flex gap-4">
          <button
            className={`px-3 py-1.5 border ${
              activeLane === "finance"
                ? "bg-foreground text-background border-foreground"
                : "border-divider text-foreground-mono hover:text-foreground"
            } font-mono uppercase tracking-mono text-mono-label transition-colors`}
            onClick={() => setActiveLane("finance")}
          >
            finance
          </button>
          <button
            className={`px-3 py-1.5 border ${
              activeLane === "sales"
                ? "bg-foreground text-background border-foreground"
                : "border-divider text-foreground-mono hover:text-foreground"
            } font-mono uppercase tracking-mono text-mono-label transition-colors`}
            onClick={() => setActiveLane("sales")}
          >
            sales
          </button>
        </div>
        <div className="flex gap-5 justify-self-end font-mono uppercase text-mono-label tracking-mono">
          <a
            href="/resume/repe.pdf"
            download
            className={`transition-colors ${
              activeLane === "finance"
                ? "text-foreground"
                : "text-foreground-mono hover:text-foreground"
            }`}
          >
            REPE PDF ↓
          </a>
          <a
            href="/resume/sales.pdf"
            download
            className={`transition-colors ${
              activeLane === "sales"
                ? "text-foreground"
                : "text-foreground-mono hover:text-foreground"
            }`}
          >
            Sales PDF ↓
          </a>
        </div>
      </div>
      {sections.map((section, i) => (
        <ResumeSection
          key={section.id}
          number={i}
          title={section.title}
          meta={section.meta}
          entries={section.entries}
          activeLane={activeLane}
          openId={openId}
          setOpenId={setOpenId}
        />
      ))}
      <SkillsSection skills={skills} activeLane={activeLane} />
    </main>
  );
}
