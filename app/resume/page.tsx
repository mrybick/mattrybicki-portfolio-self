"use client";

import { useState } from "react";

interface Role {
  id: string;
  position: string;
  company: string;
  dateStart: string;
  dateEnd: string | null;
  isPresent: boolean;
  bullets: {
    finance: string[];
    sales: string[];
  };
}

const roles: Role[] = [
  {
    id: "kw",
    position: "Realtor",
    company: "Keller Williams Arizona Realty",
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
    position: "Founder & Principal",
    company: "By Rybicki Media, LLC",
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
    position: "New Car Salesperson",
    company: "Van Chevrolet Buick GMC",
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
    position: "Team Leader",
    company: "Chick-fil-A",
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
      {roles
        .filter((role) => role.bullets[activeLane].length > 0)
        .map((role) => (
          <div
            className="cursor-pointer transition-opacity hover:opacity-60 duration-300 border-b border-divider py-4"
            key={role.id}
            onClick={() => setOpenId(openId === role.id ? null : role.id)}
          >
            {role.position} - {role.company} / {role.dateStart} -{" "}
            {role.isPresent ? "Present" : role.dateEnd}
            {openId === role.id && (
              <ul>
                {role.bullets[activeLane].map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </main>
  );
}
