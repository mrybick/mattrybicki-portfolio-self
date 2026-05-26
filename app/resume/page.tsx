"use client";

import { useState } from "react";
import entry from "next/dist/server/typescript/rules/entry";

interface Entry {
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

export default function ResumePage() {
  const [activeLane, setActiveLane] = useState<"finance" | "sales">("finance");
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="px-6 py-8">
      <h1 className="text-display-2xl text-center">{activeLane}</h1>
      <div className="flex gap-4 mb-8">
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
      <h2 className="border-b p-2">Experience.</h2>
      {roles
        .filter((role) => role.bullets[activeLane].length > 0)
        .map((role) => (
          <div
            className="cursor-pointer p-4  transition-opacity hover:opacity-60 duration-300 border-b border-divider py-4"
            key={role.id}
            onClick={() => setOpenId(openId === role.id ? null : role.id)}
          >
            <div className="flex justify-between items-baseline">
              {role.title} - {role.subtitle}
              <span className="text-mono-label text-foreground-mono font-mono transition-colors">
                {role.dateStart} - {role.isPresent ? "Present" : role.dateEnd}{" "}
              </span>
            </div>
            {openId === role.id && (
              <ul className="list-disc pl-5">
                {role.bullets[activeLane].map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      <h2 className="border-b p-2">Education.</h2>
      {education
        .filter((entry) => entry.bullets[activeLane].length > 0)
        .map((entry) => (
          <div
            className="cursor-pointer p-4  transition-opacity hover:opacity-60 duration-300 border-b border-divider py-4"
            key={entry.id}
            onClick={() => setOpenId(openId === entry.id ? null : entry.id)}
          >
            <div className="flex justify-between items-baseline">
              {entry.title} - {entry.subtitle}
              <span className="text-mono-label text-foreground-mono font-mono transition-colors">
                {entry.dateStart} - {entry.isPresent ? "Present" : entry.dateEnd}{" "}
              </span>
            </div>
            {openId === entry.id && (
              <ul className="list-disc pl-5">
                {entry.bullets[activeLane].map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </main>
  );
}
