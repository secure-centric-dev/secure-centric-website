/**
 * SECURE-CENTRIC | 20-PAGE SPECIFICATION & CONTENT DATASET
 * Extracted with 100% fidelity from the Secure-Centric Wireframe Pack
 */

window.SITE_PAGES_DATA = [
  {
    id: "page-1",
    no: 1,
    name: "Home",
    url: "/",
    type: "Home page",
    group: "Core",
    kw: "cmmc compliance (9,900/mo, KD 20)",
    kw2: "cmmc compliant (480) · NIST SP 800-171 (880) · cmmc 2.0 compliance (320) · cmmc compliance meaning (140) · cmmc 2 compliance (140) · cmmc compliance definition (110)",
    h1: "CMMC compliance for defense subcontractors, guided by a Cyber AB Registered Provider Organization",
    title: "CMMC Compliance for Defense Contractors | Secure-Centric",
    meta: "Secure-Centric is a Cyber AB Registered Provider Organization (RPO) helping defense subcontractors prepare for CMMC: scoping, gap checks, fixes, SSP/POA&M.",
    angle: "Table-stakes: a Level 1 path (7 of 16 RPOs have one) and the 'what is CMMC compliance' definition (1,300/mo question).",
    decisions: [
      "Hero keeps the readiness-check card on the right (lead magnet moves up from screen 3).",
      "No services section on Home (PDF screen 2 '4 service cards' removed by design decision).",
      "CMMC process = 8 steps, one at a time with the road graphic; step 1 is 'Site visit' (replaces Awareness).",
      "Section order = current site: logos, CMMC process, testimonials, What is CMMC, Why Secure-Centric, Resources, FAQ, CTA.",
      "Proof number 120+ contractors and 100% C3PAO pass rate everywhere."
    ],
    blocks: [
      {
        k: "hero_home",
        s: 1,
        wpBlock: "core/cover + core/columns",
        wpPattern: "secure-centric/hero-home",
        eyebrow: "NIST SP 800-171 / CMMC Compliance Consultants",
        sub: "We help defense contractors and suppliers get ready for CMMC and NIST SP 800-171, from the first site visit to the annual affirmation.",
        leadCardTitle: "Find out where you stand",
        leadCardBadge: "CMMC READINESS CHECK · 3 MINUTES",
        leadCardDesc: "Assess your FCI/CUI boundaries and readiness score before a C3PAO audit.",
        topics: [
          { title: "CMMC", desc: "Maturity levels & framework", url: "#page-12" },
          { title: "NIST SP 800-171", desc: "110 controls & DFARS 7012", url: "#page-14" },
          { title: "CUI", desc: "Controlled Unclassified Info", url: "#page-15" }
        ]
      },
      {
        k: "logos",
        s: 1,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/client-logos-marquee",
        t: "Organizations that have worked with Secure-Centric",
        logos: ["Tower Semiconductor", "Safran Federal Systems", "Goodwin & Associates", "HRD Aero Systems", "Precision Aerospace", "Defense Dynamics"]
      },
      {
        k: "journey",
        s: 2,
        wpBlock: "core/group + custom/roadmap",
        wpPattern: "secure-centric/cmmc-8-step-journey",
        t: "Your CMMC journey, step by step",
        items: [
          { no: "01", name: "Site visit", who: "You + Secure-Centric", help: "In-person physical & technical walkthrough of facilities, server rooms, and shop-floor enclaves.", output: "Asset discovery baseline & boundary notes", link: "#page-2" },
          { no: "02", name: "Scoping", who: "Secure-Centric + IT Leads", help: "Map CUI/FCI flows, identify people, systems, and network storage touching DoD contracts.", output: "Formal Scope Document & Data-Flow Architecture", link: "#page-16" },
          { no: "03", name: "Gap assessment", who: "Secure-Centric", help: "Audit all 110 NIST SP 800-171 controls against actual day-to-day operations.", output: "Defensible SPRS Score estimate & findings register", link: "#page-5" },
          { no: "04", name: "Remediation", who: "Your IT/MSP (guided by us)", help: "Prioritize fixes by risk weight; guide MFA, encryption, logging, and enclave deployments.", output: "Remediation Roadmap with owners and completion targets", link: "#page-7" },
          { no: "05", name: "Documentation", who: "Secure-Centric + You", help: "Co-write your System Security Plan (SSP), POA&M, and all required operational policies.", output: "Assessor-ready SSP and comprehensive policy suite", link: "#page-8" },
          { no: "06", name: "Readiness review", who: "Secure-Centric RPs", help: "Full rehearsal mock audit simulating C3PAO interview techniques and evidence requests.", output: "Readiness sign-off report & Evidence Binder index", link: "#page-4" },
          { no: "07", name: "Assessment", who: "Independent C3PAO", help: "We stand alongside your team during official DIBCAC or Authorized C3PAO evaluation.", output: "Level 2 CMMC Certification recommendation", link: "#page-19" },
          { no: "08", name: "Maintain", who: "Virtual CISO / You", help: "Continuous compliance, annual SPRS reaffirmation, change management, and evidence refreshes.", output: "Annual Affirmation pack & ongoing compliance posture", link: "#page-11" }
        ]
      },
      {
        k: "quotes",
        s: 2,
        wpBlock: "core/columns (3-col)",
        wpPattern: "secure-centric/testimonials-carousel",
        t: "What defense contractors say about working with us",
        items: [
          { name: "Alex Liu", role: "IT Manager", company: "Tower Semiconductor", quote: "Secure-Centric gave us absolute clarity on what was inside our CUI boundary and what wasn't. Their on-site visit cut months off our preparation time and our SPRS score jumped 40 points in 90 days." },
          { name: "Patrick Shaw", role: "Cyber Security Analyst", company: "Safran Federal Systems", quote: "Unlike generic IT consultants who just threw templates at us, Secure-Centric wrote the SSP with our team and defended every decision during pre-assessment." },
          { name: "Rafael Omar Lemus", role: "IT Director", company: "Goodwin & Associates", quote: "Their team understands defense contracting reality. We avoided having to rip-and-replace our ERP by properly implementing an isolated enclave solution." }
        ]
      },
      {
        k: "text",
        s: 3,
        wpBlock: "core/columns (split-2)",
        wpPattern: "secure-centric/definition-split",
        t: "What is CMMC compliance?",
        paras: [
          "Cybersecurity Maturity Model Certification (CMMC) is the Department of War's verification framework designed to enforce cybersecurity standards across the Defense Industrial Base (DIB). If your defense contract includes DFARS clause 252.204-7012 or 252.204-7021, CMMC compliance is mandatory to win or renew contracts.",
          "CMMC 2.0 streamlines compliance into three distinct tiers: Level 1 (Foundational - 15 basic controls for Federal Contract Information), Level 2 (Advanced - 110 NIST SP 800-171 controls for Controlled Unclassified Information), and Level 3 (Expert - 110+ NIST SP 800-172 controls for critical defense programs)."
        ]
      },
      {
        k: "why",
        s: 3,
        wpBlock: "core/columns + core/group",
        wpPattern: "secure-centric/why-proof-badges",
        t: "Why Defense Contractors Choose Secure-Centric",
        stats: [
          { number: "120+", label: "Defense contractors and suppliers supported", date: "As of Q4 2026" },
          { number: "100%", label: "C3PAO pass record across all managed assessments", date: "As of Q4 2026", color: "violet" }
        ],
        reasons: [
          { title: "Cyber AB Registered Provider Organization", text: "Officially accredited RPO with certified Registered Practitioners (RP) bound by Cyber AB ethics and training." },
          { title: "CMMC and NIST SP 800-171 Only", text: "We do not sell antivirus, managed IT, or hardware. We provide 100% objective, conflict-free compliance advisory." },
          { title: "On Site, Step by Step", text: "We don't manage compliance via emails and generic portals. We walk your floor, inspect your servers, and work shoulder-to-shoulder." },
          { title: "Independent Advice", text: "We advise and document. Your internal IT or preferred MSP implements the technical changes, keeping costs lean." }
        ]
      },
      {
        k: "cards",
        s: 4,
        wpBlock: "core/columns (3-col)",
        wpPattern: "secure-centric/resource-card-grid",
        t: "CMMC Guides, Checklists & Tools",
        items: [
          { title: "CMMC: The Complete Guide", text: "Everything defense executives need to know about CMMC 2.0 requirements, timeline, and audit criteria.", link: "#page-12" },
          { title: "Level 2 (110 Controls) Guide", text: "A deep dive into the 14 NIST SP 800-171 control families and what C3PAO assessors test.", link: "#page-13" },
          { title: "Controlled Unclassified Information (CUI)", text: "How to identify, handle, mark, and scope CUI without putting your entire corporate network at risk.", link: "#page-15" }
        ]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "Common Questions About CMMC",
        items: [
          { q: "What is CMMC compliance?", a: "CMMC (Cybersecurity Maturity Model Certification) is the Department of War standard ensuring defense subcontractors safeguard Federal Contract Information (FCI) and Controlled Unclassified Information (CUI)." },
          { q: "Do you come to our site?", a: "Yes, absolutely. An on-site facility walkthrough is step 1 of every engagement. We inspect physical boundaries, server rooms, and shop-floor terminals in person." },
          { q: "Do you only work on CMMC and NIST SP 800-171?", a: "Yes. We are hyper-specialized. We do not dilute our focus with general IT support, HIPAA, or unrelated frameworks." },
          { q: "What happens after I book a discovery call?", a: "You speak directly with a Senior Registered Practitioner (RP). We review your prime contract clauses, discuss your current IT footprint, and determine the exact CMMC level you need." },
          { q: "Who will we work with day to day?", a: "A dedicated Registered Practitioner (RP) leads your project from day one through your final audit readiness review." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull, has-electric-blue-background)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Talk with an accredited Cyber AB Registered Provider Organization. Get an actionable first step in writing within 30 minutes."
      }
    ]
  },
  {
    id: "page-N1",
    no: "N1",
    name: "About & Why Secure-Centric",
    url: "/about/",
    type: "Company page (proof)",
    group: "Core",
    kw: "secure-centric (brand)",
    kw2: "cmmc rpo company · cmmc compliance company reviews",
    h1: "About Secure-Centric: why defense contractors choose us",
    title: "About Secure-Centric | Why Defense Contractors Choose Us",
    meta: "Secure-Centric is a Cyber AB Registered Provider Organization that only does CMMC and NIST SP 800-171. Meet the team, our results and what clients say.",
    angle: "Combines About and Why Secure-Centric into one page with full social proof and static testimonials.",
    decisions: [
      "One page for About + Why Secure-Centric.",
      "Only page besides Home with testimonials and results numbers.",
      "Testimonials here are a static grid of all 5 with company context."
    ],
    blocks: [
      {
        k: "hero_center",
        s: 1,
        wpBlock: "core/group",
        wpPattern: "secure-centric/hero-center",
        eyebrow: "About Secure-Centric",
        sub: "Safeguarding CUI protects the people who serve our nation. We prepare American defense contractors to achieve and sustain CMMC compliance with unflinching rigor."
      },
      {
        k: "text",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/mission-statement",
        t: "Our Mission: Defending the Defense Industrial Base",
        paras: [
          "The Defense Industrial Base faces unprecedented, sophisticated nation-state cyber espionage targeting unclassified blueprints, metallurgy specifications, and component designs. When small-to-midsize subcontractors lose CUI, American service members are put directly at risk.",
          "Secure-Centric was established with a single mandate: provide pragmatic, objective, and unflinchingly thorough CMMC compliance readiness so that defense suppliers pass their assessments on the first attempt and secure our nation's technological advantage."
        ]
      },
      {
        k: "cards",
        s: 2,
        wpBlock: "core/columns (4-col)",
        wpPattern: "secure-centric/pillars-4-col",
        t: "What Makes Secure-Centric Different",
        items: [
          { title: "Cyber AB RPO Accredited", text: "Formally registered provider organization with vetted Registered Practitioners." },
          { title: "CMMC & NIST Only", text: "Zero software resale bias. We never push proprietary antivirus or hardware tools." },
          { title: "On-Site Physical Auditing", text: "We inspect your production facilities, clean rooms, and IT cabinets in person." },
          { title: "100% C3PAO Pass Rate", text: "Every client who followed our remediation plan passed their third-party assessment." }
        ]
      },
      {
        k: "numbers",
        s: 2,
        wpBlock: "core/group",
        wpPattern: "secure-centric/results-stats-band",
        t: "Our Track Record",
        items: [
          { number: "120+", label: "Defense contractors and suppliers supported", date: "Verified Q4 2026" },
          { number: "100%", label: "C3PAO pass record across all audited clients", date: "Zero failed certifications" }
        ]
      },
      {
        k: "stories",
        s: 3,
        wpBlock: "core/columns (grid)",
        wpPattern: "secure-centric/testimonials-static-grid",
        t: "What Our Clients Say",
        items: [
          { name: "Alex Liu", role: "IT Manager", company: "Tower Semiconductor", quote: "Secure-Centric gave us absolute clarity on what was inside our CUI boundary and what wasn't." },
          { name: "Patrick Shaw", role: "Cyber Security Analyst", company: "Safran Federal Systems", quote: "Unlike generic IT consultants who just threw templates at us, Secure-Centric wrote the SSP with our team." },
          { name: "Rafael Omar Lemus", role: "IT Director", company: "Goodwin & Associates", quote: "Their team understands defense contracting reality. We avoided having to rip-and-replace our ERP." },
          { name: "Regina Amosi", role: "CISO", company: "Tower Semiconductor", quote: "Shared publicly on LinkedIn: 'Secure-Centric's readiness mock assessment gave our board complete confidence.'" },
          { name: "Albert Leon", role: "CIO", company: "HRD Aero Systems", quote: "Shared publicly on LinkedIn: 'The most thorough, knowledgeable CMMC advisors in Southern California.'" }
        ]
      },
      {
        k: "people",
        s: 4,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/leadership-team",
        t: "Leadership Team",
        people: [
          { name: "Jake 'EJ' Celler", role: "Co-Founder & Principal CMMC Advisor", initials: "JC" },
          { name: "Son Phan", role: "Co-Founder & Lead Security Architect", initials: "SP" }
        ]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "Frequently Asked Questions About Us",
        items: [
          { q: "Where is Secure-Centric based?", a: "We are headquartered in Southern California with active on-site client operations across the United States." },
          { q: "Do you sell tools or managed IT?", a: "No. We believe selling tools creates a fundamental conflict of interest. We advise and evaluate objectively." },
          { q: "How long have you worked on CMMC?", a: "Our principals have worked with NIST SP 800-171 since its 2017 inception and with CMMC since version 1.0." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Talk with an accredited Cyber AB Registered Provider Organization today."
      }
    ]
  },
  {
    id: "page-2",
    no: 2,
    name: "CMMC Compliance Services",
    url: "/services/cmmc-compliance/",
    type: "Service page (main service)",
    group: "Services",
    kw: "cmmc compliance services (880/mo, KD 9)",
    kw2: "cmmc compliance support (390) · cmmc services (320) · cmmc compliance company (320)",
    h1: "CMMC compliance, done with you on site: from scoping to your annual affirmation",
    title: "CMMC Compliance Services from a Cyber AB RPO | Secure-Centric",
    meta: "What Secure-Centric does in a CMMC compliance engagement: scoping, gap assessment, remediation guidance, SSP/POA&M, readiness and annual affirmation support.",
    angle: "Anatomy of the engagement: phase-by-phase deliverables a C3PAO will score, and a clear division between consultant, MSP, and C3PAO.",
    decisions: [
      "Owns the phase-by-phase work, the deliverables and the 'Secure-Centric vs your MSP' cards.",
      "Screen 1 features 'what we do' hero with a 6-phase strip and deliverable chips."
    ],
    blocks: [
      {
        k: "hero_service",
        s: 1,
        wpBlock: "core/columns (split)",
        wpPattern: "secure-centric/hero-service-phases",
        eyebrow: "CMMC Compliance Services · What We Do",
        sub: "One engagement, run on site with your team: we scope, assess, guide the fixes, write the documents with you and prepare you for assessment day.",
        phases: [
          "Scope & Site Visit",
          "Gap Assessment & SPRS",
          "Guide the Fixes",
          "System Security Plan (SSP)",
          "Readiness Review Mock Day",
          "Annual Affirmation & Maintain"
        ],
        deliverables: [
          "Scope Document & Data Flow Diagram",
          "Ranked Findings & SPRS Calculation",
          "Prioritized Remediation Roadmap",
          "Assessor-Ready SSP, Policies & POA&M",
          "Evidence Binder Index",
          "Annual Affirmation Package"
        ]
      },
      {
        k: "phases",
        s: 2,
        wpBlock: "core/group + core/list-blocks",
        wpPattern: "secure-centric/phase-by-phase-work",
        t: "What We Do, Phase by Phase",
        items: [
          ["Scope and Site Visit", "Find where FCI and CUI live; draw the boundary and identify out-of-scope assets.", "Scope document, asset list, data-flow diagram"],
          ["Assess", "Check all 110 requirements against how your people actually operate day to day.", "Ranked findings, estimated SPRS score (-203 to +110)"],
          ["Guide the Fixes", "Prioritise fixes by risk and score weight; advise your IT staff or MSP.", "Remediation plan with owners and target dates"],
          ["Document", "Write the SSP, policies, procedures and POA&M collaboratively with your engineers.", "Assessor-ready SSP, policies, and POA&M"],
          ["Prepare for Assessment", "Readiness review, evidence validation, mock interviews and assessor prep.", "Evidence index, readiness sign-off report"],
          ["Maintain and Affirm", "Keep scores, evidence and documents current; annual affirmation support.", "Current SSP, annual affirmation compliance pack"]
        ]
      },
      {
        k: "compare_cards",
        s: 3,
        wpBlock: "core/columns (2-col)",
        wpPattern: "secure-centric/rpo-vs-msp-cards",
        t: "Secure-Centric versus Your IT / MSP",
        left: "What Secure-Centric Does (RPO Advisor)",
        right: "What Your MSP / Internal IT Does",
        leftPoints: [
          "Scopes the CUI/FCI boundary to minimize cost",
          "Audits against 110 NIST 800-171 controls",
          "Authors the System Security Plan (SSP)",
          "Validates evidence against C3PAO grading standards"
        ],
        rightPoints: [
          "Implements technical configuration changes",
          "Deploys hardware, switches, firewalls, and MFA",
          "Manages daily ticketing and end-user support",
          "Performs continuous patch management"
        ]
      },
      {
        k: "lead",
        s: 3,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "First-Call Prep Checklist (What to have ready)",
        ticks: ["The 5 contract clauses your advisor will ask for", "How to find out if your CAD files are CUI", "What IT network diagrams to bring to the call"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "Common Questions on CMMC Engagements",
        items: [
          { q: "What does a CMMC consultant do?", a: "A CMMC consultant scopes your environment, evaluates your cybersecurity against 110 NIST requirements, guides fixes, and authors your SSP and POA&M." },
          { q: "How is a CMMC compliance engagement priced?", a: "Engagements are priced as a flat-fee fixed scope based on your organization size, facility count, and CUI boundary footprint." },
          { q: "Can we start with one part, like the SSP?", a: "The SSP requires scoping and assessment findings first to be defensible; our single engagement encompasses all required phases seamlessly." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Schedule your discovery call with a Registered Practitioner."
      }
    ]
  },
  {
    id: "page-3",
    no: 3,
    name: "CMMC Consulting (By ICP & Role)",
    url: "/services/cmmc-consulting/",
    type: "Service page (ICP)",
    group: "Services",
    kw: "cmmc consultant (1,000/mo, KD 20)",
    kw2: "cmmc consulting (1,000) · cmmc compliance consultant (880)",
    h1: "CMMC consulting for defense subcontractors, suppliers and manufacturers",
    title: "CMMC Consultant for Defense Contractors | Secure-Centric",
    meta: "Who needs a CMMC consultant? Subcontractors, suppliers and manufacturers handling FCI or CUI, by CMMC level, role and place in the supply chain.",
    angle: "Targeted ICP buyer personas: by tier, by executive role, and by position in the Defense Industrial Base supply chain.",
    decisions: [
      "Organized three ways: by CMMC compliance tier, by corporate persona, and by position in the supply chain.",
      "Audience paths hand visitors into the rest of the site."
    ],
    blocks: [
      {
        k: "hero_icp",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-icp-tiles",
        eyebrow: "CMMC Consulting · Who We Help",
        sub: "If your contract puts FCI or CUI in your hands, CMMC applies to you. Pick the profile that describes your situation and follow your path.",
        audiences: [
          "Subcontractor or Supplier",
          "Small or Mid-size Manufacturer",
          "Stuck or Starting Over",
          "Need an RPO Before a C3PAO Audit"
        ]
      },
      {
        k: "tiers",
        s: 2,
        wpBlock: "core/columns (4-col)",
        wpPattern: "secure-centric/icp-tiers",
        t: "By CMMC Level: Where Your Contract Puts You",
        items: [
          ["Level 1", "FCI only · 15 basic cyber hygiene requirements · Annual executive self-affirmation in SPRS."],
          ["Level 2 (Self)", "CUI non-prioritized · 110 requirements · Annual self-assessment + signed executive affirmation."],
          ["Level 2 (C3PAO)", "CUI prioritized acquisition · 110 requirements · Mandatory 3rd-party audit by accredited C3PAO."],
          ["Level 3", "Critical national security CUI · 110+ NIST 800-172 requirements · Government-led DIBCAC assessment."]
        ]
      },
      {
        k: "personas",
        s: 2,
        wpBlock: "core/columns (4-col)",
        wpPattern: "secure-centric/buyer-personas",
        t: "By Role: What Each Executive Needs From Us",
        items: [
          ["Owner / CEO (Affirming Official)", "Signs the annual affirmation; worried about contract loss and False Claims Act liability."],
          ["IT Manager or MSP", "Capable generalist; unsure how C3PAO assessors interpret evidence or what is in scope."],
          ["Contracts / Compliance Lead", "Fielding prime contractor questionnaires and solicitation clauses; needs dates and proof."],
          ["Engineering / Operations Lead", "Owns the drawings and CAD files (CUI); needs security workflows that do not halt production."]
        ]
      },
      {
        k: "lead",
        s: 3,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "7-Check CMMC Consultant Scorecard",
        ticks: ["7 questions to ask before hiring an RPO", "How to identify consultants with conflicts of interest", "Cyber AB verification checklist"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "Common Questions on Choosing a Consultant",
        items: [
          { q: "Do I need a CMMC consultant, or can I do it in-house?", a: "Level 1 can frequently be handled in-house with guidance. Level 2 involves 110 controls across 320 assessment objectives, requiring deep familiarity with C3PAO grading standards." },
          { q: "How do I choose a CMMC consultant?", a: "Verify they are an authorized Cyber AB RPO, have active Registered Practitioners, and don't force you into proprietary IT management tools." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Talk with an accredited CMMC advisor."
      }
    ]
  },
  {
    id: "page-4",
    no: 4,
    name: "CMMC Readiness Assessment",
    url: "/services/cmmc-readiness-assessment/",
    type: "Engagement stage page",
    group: "Stages",
    kw: "cmmc readiness (480/mo, KD 7)",
    kw2: "cmmc readiness assessment (390)",
    h1: "CMMC readiness assessment: know your gaps and your score before the official assessment",
    title: "CMMC Readiness Assessment for Defense Contractors",
    meta: "A CMMC readiness assessment from a Cyber AB Registered Provider Organization: your gaps, a NIST 800-171 score and a fix list. Not the official assessment.",
    angle: "Know your score before the C3PAO walks in.",
    decisions: [
      "Offer model: Included in the CMMC compliance engagement; not sold on its own.",
      "5 vertical steps highlighting what happens on site."
    ],
    blocks: [
      {
        k: "hero_split",
        s: 1,
        wpBlock: "core/columns (split)",
        wpPattern: "secure-centric/hero-split-stage",
        eyebrow: "Part of CMMC Compliance · Readiness Assessment",
        sub: "See every gap and your estimated NIST SP 800-171 score before an assessor does. We come to your site; this is not the official assessment.",
        link: "What you leave with"
      },
      {
        k: "steps_v",
        s: 2,
        wpBlock: "core/group",
        wpPattern: "secure-centric/steps-vertical-table",
        t: "What Happens in the Readiness Review",
        count: 5
      },
      {
        k: "lead",
        s: 2,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "CMMC Readiness Checklist",
        ticks: ["15 foundational readiness indicators", "SPRS score estimation formulas", "Common assessment red flags"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "Questions on Readiness Assessments",
        items: [
          { q: "Is a readiness assessment the same as a C3PAO assessment?", a: "No. A readiness assessment is a diagnostic evaluation performed by an RPO to prepare you for the official C3PAO audit." },
          { q: "How long does a readiness assessment take?", a: "Typically 2 to 4 weeks depending on facility complexity." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Book a discovery call today."
      }
    ]
  },
  {
    id: "page-5",
    no: 5,
    name: "CMMC Gap & Mock Assessment",
    url: "/services/cmmc-readiness-assessment/gap-assessment/",
    type: "Engagement stage page",
    group: "Stages",
    kw: "cmmc gap assessment (320/mo, KD 2)",
    kw2: "cmmc mock assessment (90) · cmmc gap analysis (210)",
    h1: "CMMC gap assessment and mock assessment for defense contractors",
    title: "CMMC Gap Assessment & Mock Assessment | Secure-Centric",
    meta: "CMMC gap assessment from a Cyber AB Registered Provider Organization: every NIST 800-171 requirement reviewed, a ranked fix list, mock assessment option.",
    angle: "Sample findings table + 4-column comparison: gap vs mock vs readiness vs pre-assessment.",
    decisions: [
      "Sample findings table columns: Requirement · Status · Risk · Fix · Owner.",
      "4-column comparison table."
    ],
    blocks: [
      {
        k: "hero_split",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-split-stage",
        eyebrow: "Part of CMMC Compliance · Gap & Mock Assessment",
        sub: "Every NIST SP 800-171 requirement checked against how you really work, a ranked fix list, and a rehearsal of assessment day if you want one.",
        link: "See sample finding"
      },
      {
        k: "table",
        s: 2,
        wpBlock: "core/table",
        wpPattern: "secure-centric/findings-table",
        t: "Sample Gap Assessment Findings Table",
        cols: ["Requirement", "Status", "Risk Weight", "Remediation Action", "Assigned Owner"],
        rows: [
          ["3.5.3 Multi-Factor Authentication", "Deficient (SMS used)", "High (-5 SPRS)", "Deploy FIDO2 WebAuthn hardware tokens", "IT Lead"],
          ["3.13.11 FIPS Validated Cryptography", "Deficient (Standard SSL)", "High (-5 SPRS)", "Enable FIPS 140-2 validated cipher suites", "Network Admin"],
          ["3.1.1 Access Control & Least Privilege", "Met", "Zero", "Maintain semi-annual privilege review log", "Security Officer"],
          ["3.11.2 Vulnerability Scanning", "Partially Met", "Medium (-3 SPRS)", "Automate monthly credentialed network scans", "MSP Partner"]
        ]
      },
      {
        k: "lead",
        s: 2,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "Assessment-Day Prep Checklist",
        ticks: ["Interview questions C3PAO assessors ask system admins", "Evidence naming conventions", "What files should never be on the demonstration screen"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "Questions on Gap and Mock Assessments",
        items: [
          { q: "What is a CMMC gap assessment?", a: "A technical and procedural audit comparing your current operations against the 110 NIST SP 800-171 controls." },
          { q: "Will I get an SPRS score?", a: "Yes. We calculate your defensible Supplier Performance Risk System (SPRS) score between -203 and +110." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Schedule your discovery call."
      }
    ]
  },
  {
    id: "page-6",
    no: 6,
    name: "NIST SP 800-171 Compliance Services",
    url: "/services/nist-800-171-compliance/",
    type: "Service page (service 3 of 3)",
    group: "Services",
    kw: "nist 800-171 compliance consultant (260/mo, KD 9)",
    kw2: "nist compliance services (390)",
    h1: "NIST 800-171 compliance services for defense contractors",
    title: "NIST 800-171 Compliance Consultant | Secure-Centric",
    meta: "NIST 800-171 compliance services from a Cyber AB Registered Provider Organization: assessment, fixes, SSP/POA&M and SPRS support for DFARS 7012.",
    angle: "Commercial compliance service for DFARS 7012 requirements.",
    decisions: [
      "Button to SPRS checklist (no live calculator tool directly on page).",
      "Control families explanation lives on the guide."
    ],
    blocks: [
      {
        k: "hero_split",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-split-service",
        eyebrow: "NIST SP 800-171 Compliance",
        sub: "Yes: DFARS 7012 means you must meet NIST SP 800-171 today. We assess, guide the fixes and prepare your SSP, POA&M and SPRS score.",
        link: "Estimate your score: SPRS checklist"
      },
      {
        k: "lead",
        s: 2,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "DFARS 7012 / 7019 / 7020 Contract Clause Checklist",
        ticks: ["Clause-by-clause contract requirements", "SPRS score posting guidelines", "Mandatory incident reporting timelines (72 hours)"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "NIST SP 800-171 FAQs",
        items: [
          { q: "How do I become NIST 800-171 compliant?", a: "By implementing the 110 controls, documenting them in an accurate System Security Plan (SSP), logging unresolved items on a POA&M, and posting your SPRS score." },
          { q: "Is there software that makes me compliant automatically?", a: "No software alone makes you compliant. Compliance involves physical security, policies, employee habits, and technical controls." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Contact our compliance team."
      }
    ]
  },
  {
    id: "page-7",
    no: 7,
    name: "CMMC Remediation Advisory",
    url: "/services/cmmc-implementation-remediation/",
    type: "Engagement stage page",
    group: "Stages",
    kw: "cmmc implementation (170/mo, KD 33)",
    kw2: "cmmc gap remediation (70)",
    h1: "CMMC implementation and remediation advisory for defense contractors",
    title: "CMMC Implementation & Remediation Advisory",
    meta: "Fix your CMMC gaps in the right order. A Cyber AB Registered Provider Organization advises and documents while your IT team makes the changes.",
    angle: "Neutral enclave vs full-scope guidance; an interactive remediate vs enclave decision aid.",
    decisions: [
      "Remediate vs enclave interactive decision aid.",
      "Clear who-does-what separation: Secure-Centric advises and documents; your IT makes changes."
    ],
    blocks: [
      {
        k: "hero_split",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-split-stage",
        eyebrow: "Part of CMMC Compliance · Remediation Advisory",
        sub: "We advise and document; your IT team or MSP makes the changes. Fix the gaps in the order that lifts your score and lowers risk first.",
        link: "Who does what"
      },
      {
        k: "tool",
        s: 4,
        wpBlock: "core/group + custom/interactive",
        wpPattern: "secure-centric/remediation-aid",
        t: "Remediate Everywhere, or Shrink the Scope?",
        label: "3 questions -> 'Fix company-wide' / 'Consider an enclave'"
      },
      {
        k: "lead",
        s: 3,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "Top 10 CMMC Gaps Checklist",
        ticks: ["The 10 most common causes of audit failure", "FIPS 140-2 encryption oversights", "MFA configuration traps"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "Questions on Remediation",
        items: [
          { q: "Who makes the technical changes, you or us?", a: "Your internal IT or MSP makes technical configurations based on our explicit engineering specifications." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Start your remediation plan."
      }
    ]
  },
  {
    id: "page-8",
    no: 8,
    name: "SSP, POA&M and Policy Documentation",
    url: "/services/cmmc-implementation-remediation/ssp-poam-development/",
    type: "Engagement stage page",
    group: "Stages",
    kw: "ssp development (70/mo, KD 18)",
    kw2: "ssp and poam (50)",
    h1: "SSP and POA&M development for CMMC and NIST 800-171",
    title: "SSP Development and POA&M Support for CMMC",
    meta: "Get a System Security Plan and POA&M written with your team by a Cyber AB Registered Provider Organization: accurate, defensible, ready for assessors.",
    angle: "Built with you, answering the fear of cookie-cutter templates that fail audit.",
    decisions: [
      "What goes in each document: 3 cards (SSP, POA&M, Policies).",
      "Sample SSP outline table."
    ],
    blocks: [
      {
        k: "hero_split",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-split-stage",
        eyebrow: "Part of CMMC Compliance · SSP & Policies",
        sub: "Your System Security Plan, POA&M and policies, written with your team and reviewed against what assessors check. Yes, you need both documents.",
        link: "What goes in each document"
      },
      {
        k: "lead",
        s: 2,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "SSP Outline Template",
        ticks: ["Standardized NIST SP 800-171 Rev 2 section outline", "CUI boundary definition template", "Assessor evidence mapping structure"]
      },
      {
        k: "table",
        s: 4,
        wpBlock: "core/table",
        wpPattern: "secure-centric/ssp-outline-table",
        t: "Sample System Security Plan (SSP) Outline",
        cols: ["SSP Section", "What Goes in It"],
        rows: [
          ["1. System Identification & Environment", "Network architecture, physical site boundaries, subnet maps, and cloud tenant locations."],
          ["2. System Interconnections & Data Flows", "Every path CUI takes into, through, and out of contractor systems."],
          ["3. 110 Control Implementation Statements", "Exact technical narrative detailing how each requirement is satisfied."],
          ["4. Plan of Action and Milestones (POA&M)", "Deficiencies identified with assigned owners, remediation steps, and closure dates."]
        ]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "SSP & POA&M FAQs",
        items: [
          { q: "What is an SSP?", a: "The System Security Plan is the foundational compliance document describing how all 110 controls are met." },
          { q: "What is a POA&M?", a: "A Plan of Action & Milestones tracks temporary security gaps and scheduled remediation dates." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Develop your defensible SSP."
      }
    ]
  },
  {
    id: "page-11",
    no: 11,
    name: "Virtual CISO (vCISO)",
    url: "/services/virtual-ciso/",
    type: "Engagement stage page",
    group: "Stages",
    kw: "virtual ciso for defense contractors",
    kw2: "vciso cmmc · fractional ciso services",
    h1: "Virtual CISO (vCISO) services for defense contractors",
    title: "Virtual CISO (vCISO) for Defense Contractors",
    meta: "A virtual CISO for defense contractors: part-time security leadership that owns your CMMC program. From a Cyber AB Registered Provider Organization.",
    angle: "Part-time executive security leadership that owns the annual affirmation and continuous monitoring.",
    decisions: [
      "What vCISO services include = 6 icon tiles (3x2).",
      "Explains ongoing upkeep inside the engagement."
    ],
    blocks: [
      {
        k: "hero_split",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-split-stage",
        eyebrow: "Part of CMMC Compliance · Virtual CISO",
        sub: "Part-time security leadership that owns your CMMC program: scores, evidence, training and the annual affirmation, without a full-time hire.",
        link: "Is a vCISO right for you?"
      },
      {
        k: "cards",
        s: 2,
        wpBlock: "core/columns (3-col)",
        wpPattern: "secure-centric/vciso-services-grid",
        t: "What Virtual CISO Services Actually Include",
        items: [
          { title: "Annual Affirmation Leadership", text: "Prepares executive leadership to sign off in SPRS with zero False Claims Act ambiguity." },
          { title: "Continuous Evidence Collection", text: "Quarterly reviews of access logs, MFA configurations, and change tickets." },
          { title: "Supply Chain & Flowdown Audits", text: "Evaluates your downstream suppliers and subcontractors for DFARS 7012 adherence." },
          { title: "Incident Response Lead", text: "72-hour DoD DIBNet incident reporting coordination in the event of an intrusion." },
          { title: "C3PAO Audit Defense", text: "Represents your organization as the primary security liaison during external audits." },
          { title: "Security Awareness Training", text: "Tailored CUI handling briefings for engineering, operations, and executive staff." }
        ]
      },
      {
        k: "lead",
        s: 3,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "vCISO Scope Checklist",
        ticks: ["Responsibilities of a defense contractor vCISO", "Annual affirmation timeline requirements", "Cost comparison: fractional vs full-time CISO"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "Virtual CISO FAQs",
        items: [
          { q: "What does a vCISO not do?", a: "A vCISO does not replace your daily help desk or execute low-level IT maintenance; they provide strategic security governance." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Engage virtual CISO leadership."
      }
    ]
  },
  {
    id: "page-12",
    no: 12,
    name: "CMMC: The Complete Guide",
    url: "/cmmc/",
    type: "Pillar page",
    group: "Pillars",
    kw: "cmmc (18,100/mo, KD 59)",
    kw2: "cmmc 2.0 (1,600) · cmmc 2 (880)",
    h1: "CMMC (Cybersecurity Maturity Model Certification): the complete guide",
    title: "What Is CMMC? The Complete Guide for Contractors",
    meta: "CMMC explained: what it stands for, the three levels, who needs which one and what to do first. Written by a Cyber AB Registered Provider Organization.",
    angle: "Answer first: direct featured snippet definition, sticky table of contents, and a 3-question level finder tool in the hero.",
    decisions: [
      "Screen 1 quick check = 3-question level finder in the hero.",
      "Sticky side table of contents.",
      "Links to process and services rather than repeating them."
    ],
    blocks: [
      {
        k: "hero_guide",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-pillar-guide",
        eyebrow: "The Complete Guide · Updated for 2026",
        sub: "CMMC is the Department of War program that verifies defense contractors protect FCI and CUI. It has three levels, set directly by contract clauses.",
        side: "tool:Which CMMC level do I need? (3 questions)"
      },
      {
        k: "table",
        s: 3,
        wpBlock: "core/table",
        wpPattern: "secure-centric/cmmc-levels-comparison",
        t: "CMMC Levels Compared",
        cols: ["Level", "Data Type", "Requirements", "Assessment Type", "Cycle"],
        rows: [
          ["Level 1 (Foundational)", "Federal Contract Information (FCI)", "15 basic cyber hygiene controls", "Annual self-assessment & affirmation", "1 Year"],
          ["Level 2 (Advanced)", "Controlled Unclassified Info (CUI)", "110 NIST SP 800-171 controls", "Independent C3PAO audit (or self for non-prioritized)", "3 Years"],
          ["Level 3 (Expert)", "High-value defense assets / critical CUI", "110+ NIST SP 800-172 controls", "Government-led DIBCAC audit", "3 Years"]
        ]
      },
      {
        k: "lead",
        s: 3,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "CMMC Quick-Start Guide (One Page)",
        ticks: ["Visual breakdown of CMMC levels", "How to identify your contract requirement", "First 5 actions to take this week"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "CMMC Comprehensive FAQs",
        items: [
          { q: "What does CMMC stand for?", a: "Cybersecurity Maturity Model Certification." },
          { q: "Who needs CMMC?", a: "Any company in the DoD supply chain handling FCI or CUI." },
          { q: "When is CMMC required?", a: "Phased implementation is active in Defense Federal Acquisition Regulation Supplement (DFARS) solicitations." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Talk with an expert."
      }
    ]
  },
  {
    id: "page-13",
    no: 13,
    name: "CMMC Level 2: The Complete Guide",
    url: "/cmmc/level-2/",
    type: "Pillar page",
    group: "Pillars",
    kw: "cmmc level 2 (3,600/mo, KD 29)",
    kw2: "cmmc level 2 requirements (1,000)",
    h1: "CMMC Level 2: requirements, assessment and what to do first",
    title: "CMMC Level 2: Requirements & Assessment Guide",
    meta: "CMMC Level 2 explained: the 110 NIST 800-171 requirements in 14 families, self-assessment vs C3PAO assessment and the steps to get ready.",
    angle: "The 110 requirements across 14 families, 320 assessment objectives, and self-assessment vs C3PAO.",
    decisions: [
      "14 expandable control family tiles.",
      "Self-assessment vs C3PAO comparison table."
    ],
    blocks: [
      {
        k: "hero_guide",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-pillar-guide",
        eyebrow: "Level 2 Guide",
        sub: "110 requirements from NIST SP 800-171, evaluated across 320 assessment objectives by an authorized C3PAO every 3 years with annual affirmation.",
        side: "facts:110 requirements · 14 families · 3-year cycle"
      },
      {
        k: "accordion_tiles",
        s: 3,
        wpBlock: "core/group + custom/grid",
        wpPattern: "secure-centric/14-families-grid",
        t: "The 110 Requirements across 14 Families",
        count: 14
      },
      {
        k: "lead",
        s: 3,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "110-Control Checklist (NIST 800-171 / CMMC Level 2)",
        ticks: ["All 110 controls organized by family", "SPRS negative scoring weight per control", "Assessment objective cross-references"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "CMMC Level 2 FAQs",
        items: [
          { q: "Is CMMC Level 2 based on NIST SP 800-171?", a: "Yes, exactly. CMMC Level 2 adopts the 110 controls from NIST SP 800-171 Rev 2." },
          { q: "What does a C3PAO check at Level 2?", a: "They examine documentation, interview staff, and test configurations across all 320 assessment objectives." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Prepare for your Level 2 assessment."
      }
    ]
  },
  {
    id: "page-14",
    no: 14,
    name: "NIST 800-171: The Standard Behind Level 2",
    url: "/nist-800-171/",
    type: "Pillar page",
    group: "Pillars",
    kw: "nist 800-171 (5,400/mo, KD 58)",
    kw2: "nist sp 800 171 (880)",
    h1: "NIST 800-171 explained: the standard behind CMMC Level 2",
    title: "NIST 800-171 Explained: Requirements and CMMC Link",
    meta: "What NIST SP 800-171 is, who must follow it, and how it connects to DFARS 7012 and CMMC Level 2. A clear guide from a Cyber AB Registered Provider Org.",
    angle: "Connection diagram (NIST 800-171 -> DFARS 7012 -> CMMC Level 2) and Rev 2 vs Rev 3 clarification.",
    decisions: [
      "Connection diagram in Screen 1 beside definition.",
      "Rev 2 vs Rev 3 side-by-side comparison."
    ],
    blocks: [
      {
        k: "hero_guide",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-pillar-guide",
        eyebrow: "NIST SP 800-171 Guide",
        sub: "NIST SP 800-171 is the 110-requirement standard for protecting CUI in non-federal systems. DFARS 7012 mandates it; CMMC Level 2 verifies it.",
        side: "diagram:NIST SP 800-171 -> DFARS 7012 / 7019 / 7020 -> CMMC Level 2"
      },
      {
        k: "lead",
        s: 3,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "NIST SP 800-171 Self-Assessment Scoring Sheet",
        ticks: ["Automated Excel scoring formula", "Negative score penalty weights", "SPRS submission guidelines"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "NIST SP 800-171 FAQs",
        items: [
          { q: "How many requirements are in NIST SP 800-171?", a: "110 requirements organized into 14 families." },
          { q: "Rev 2 or Rev 3: which one applies?", a: "CMMC Level 2 specifies NIST SP 800-171 Revision 2 until official rulemaking updates the DFARS clause." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Assess your NIST 800-171 posture."
      }
    ]
  },
  {
    id: "page-15",
    no: 15,
    name: "CUI: The Complete Guide",
    url: "/cui/",
    type: "Pillar page",
    group: "Pillars",
    kw: "what is cui (12,100/mo, KD 34)",
    kw2: "controlled unclassified information (9,900)",
    h1: "What is CUI? Controlled Unclassified Information explained",
    title: "What Is CUI? Controlled Unclassified Information Guide",
    meta: "What CUI means, how to tell if your data is CUI, examples and what contractors must do. A clear guide from a Cyber AB Registered Provider Organization.",
    angle: "'Is my data CUI?' 3-question check in hero, defense-specific examples, and CUI vs FCI.",
    decisions: [
      "Hero tool: Is my data CUI?",
      "CUI vs FCI comparison table."
    ],
    blocks: [
      {
        k: "hero_guide",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-pillar-guide",
        eyebrow: "CUI Guide",
        sub: "CUI is information the government creates or possesses that is not classified but requires safeguarding. If you hold drawings or specs for defense parts, it is likely CUI.",
        side: "tool:Is my data CUI? (3 questions)"
      },
      {
        k: "cards",
        s: 1,
        wpBlock: "core/columns (3-col)",
        wpPattern: "secure-centric/cui-examples-cards",
        t: "What CUI Is, in Six Common Defense Examples",
        items: [
          { title: "Technical Specifications & Drawings", text: "CAD models, tolerances, and metallurgical schematics for weapon systems." },
          { title: "Test Results & Performance Data", text: "Ballistic test reports, stress analysis, and flight telemetry logs." },
          { title: "Operating & Maintenance Manuals", text: "Procedures and maintenance documentation containing sensitive defense parameters." },
          { title: "Naval Nuclear Propulsion Info", text: "Specific subcategory with strict federal safeguarding and statutory controls." },
          { title: "Export Controlled Data (ITAR / EAR)", text: "Munitions list items and technical data restricted under export regulations." },
          { title: "Contract Operations & Schedules", text: "Sensitive procurement schedules, unit deployments, and logistics data." }
        ]
      },
      {
        k: "lead",
        s: 2,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "CUI Identification Checklist",
        ticks: ["CUI banner marking conventions", "How to review contract SOWs for unmarked CUI", "Storage and distribution statement guide"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "CUI FAQs",
        items: [
          { q: "Is CUI classified?", a: "No. CUI is unclassified, but legally requires safeguarding under 32 CFR Part 2002." },
          { q: "Who is responsible for marking CUI?", a: "The government contracting agency or prime contractor should mark it, but subcontractors are still liable if unmarked CUI is mishandled." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Scope your CUI correctly."
      }
    ]
  },
  {
    id: "page-16",
    no: 16,
    name: "CMMC Enclave Advisory",
    url: "/services/cmmc-enclave/",
    type: "Engagement stage page",
    group: "Stages",
    kw: "cmmc enclave (480/mo, KD 5)",
    kw2: "cui enclave (390)",
    h1: "CMMC enclave advisory: decide whether your CUI belongs in an enclave",
    title: "CMMC Enclave Advisory for Defense Contractors",
    meta: "Not sure if a CUI enclave fits? A Cyber AB Registered Provider Organization helps you decide, design and choose. We advise; we do not host or sell one.",
    angle: "Objective enclave advisory. We do not sell an enclave, so our recommendation is 100% unbiased.",
    decisions: [
      "Diagram: Whole-company scope vs CUI kept inside one boundary.",
      "Enclave options compared: Build your own vs Managed enclave vs Government Cloud."
    ],
    blocks: [
      {
        k: "hero_split",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-split-stage",
        eyebrow: "Part of CMMC Compliance · Enclave Advisory",
        sub: "We help you decide whether an enclave fits, then design and choose one. We are neutral: we do not host or sell an enclave.",
        link: "Enclave vs whole-company scope"
      },
      {
        k: "lead",
        s: 2,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "CUI Data-Flow Worksheet",
        ticks: ["Mapping inputs and outputs for enclave isolation", "Calculating license cost savings vs company-wide migration", "User boundary definitions"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "Enclave Advisory FAQs",
        items: [
          { q: "What is a CMMC enclave?", a: "A dedicated, logically or physically separated environment where all CUI is contained, reducing the number of audited computers." },
          { q: "Should I build an enclave or use a managed one?", a: "That depends on how many users handle CUI and what software they need. We help you calculate the exact ROI." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Explore enclave scoping."
      }
    ]
  },
  {
    id: "page-19",
    no: 19,
    name: "The CMMC Process (8 Steps)",
    url: "/cmmc/cmmc-process/",
    type: "Pillar page (process)",
    group: "Pillars",
    kw: "cmmc process",
    kw2: "how cmmc consulting works · cmmc steps",
    h1: "The CMMC process: eight steps from site visit to annual affirmation",
    title: "The CMMC Process: 8 Steps from Site Visit to Affirmation",
    meta: "The CMMC process in eight steps: site visit, scoping, gap assessment, remediation, documentation, readiness review, assessment and annual affirmation. See who does what.",
    angle: "Full 8-step journey detailing who does what: You vs Secure-Centric vs IT/MSP vs C3PAO.",
    decisions: [
      "Same 8 steps as Home, starting with 'Site visit'.",
      "Table: Who does what at each step."
    ],
    blocks: [
      {
        k: "hero_guide",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-pillar-guide",
        eyebrow: "The CMMC Process",
        sub: "Eight steps from the first on-site visit to an annual affirmation you can stand behind, with clear ownership of every milestone.",
        side: "facts:8 steps · who does each · next move"
      },
      {
        k: "journey",
        s: 1,
        wpBlock: "core/group",
        wpPattern: "secure-centric/cmmc-8-step-journey",
        t: "Your CMMC Journey: Eight Steps"
      },
      {
        k: "lead",
        s: 3,
        wpBlock: "core/group",
        wpPattern: "secure-centric/lead-magnet-inline",
        name: "CMMC Process Roadmap (One Page)",
        ticks: ["Full timeline Gantt chart reference", "Owner responsibility breakdown", "Audit day preparation milestones"]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "Process FAQs",
        items: [
          { q: "How long does CMMC certification take?", a: "Typically 6 to 12 months from initial site visit to final C3PAO audit sign-off." },
          { q: "Where do I start?", a: "Step 1: On-site visit and scoping boundary determination." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Begin step 1 with us."
      }
    ]
  },
  {
    id: "page-20",
    no: 20,
    name: "What is a CMMC RPO?",
    url: "/cmmc/rpo/",
    type: "Pillar page (RPO)",
    group: "Pillars",
    kw: "cmmc rpo (320/mo, KD 12)",
    kw2: "cmmc registered provider organization",
    h1: "What is a CMMC RPO (Registered Provider Organization)?",
    title: "What Is a CMMC RPO? Registered Provider Organization",
    meta: "What a CMMC Registered Provider Organization (RPO) is, what it can and cannot do, and how to verify one. Explained by a Cyber AB RPO.",
    angle: "What an RPO can and cannot do: ticks vs crosses, RPO vs C3PAO vs MSP table, and Marketplace verification.",
    decisions: [
      "Can / cannot do = two columns (ticks vs crosses).",
      "RPO vs C3PAO vs MSP comparison table."
    ],
    blocks: [
      {
        k: "hero_guide",
        s: 1,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/hero-pillar-guide",
        eyebrow: "What is an RPO",
        sub: "An RPO is a Cyber AB-registered organization authorized to provide CMMC preparation consulting. An RPO cannot certify you; only a C3PAO assesses.",
        side: "facts:Advises · cannot certify · check on Cyber AB Marketplace"
      },
      {
        k: "compare_cards",
        s: 2,
        wpBlock: "core/columns (2-col)",
        wpPattern: "secure-centric/rpo-can-cannot-cards",
        t: "What an RPO Can and Cannot Do",
        left: "An RPO Can",
        right: "An RPO Cannot",
        leftPoints: [
          "Conduct scoping and gap assessments",
          "Author your System Security Plan (SSP)",
          "Guide technical remediation and policies",
          "Conduct mock audits and staff training"
        ],
        rightPoints: [
          "Issue an official CMMC certification",
          "Conduct an official assessment on companies it advised",
          "Guarantee an audit pass without client compliance execution",
          "Act as a C3PAO for its own advisory clients"
        ]
      },
      {
        k: "faq",
        s: 4,
        wpBlock: "core/details-group",
        wpPattern: "secure-centric/faq-accordion",
        t: "RPO FAQs",
        items: [
          { q: "Can an RPO certify me?", a: "No. The Cyber AB strictly separates advisors (RPOs) from assessors (C3PAOs) to prevent conflicts of interest." },
          { q: "How do I check that a company is an official RPO?", a: "Search for their name on the official Cyber AB Marketplace at cyberab.org." }
        ]
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Planning to get started on CMMC?",
        sub: "Work with an accredited RPO."
      }
    ]
  },
  {
    id: "page-21",
    no: 21,
    name: "The CMMC 2.0 Level 2 Compliance Checklist",
    url: "/resources/templates/checklist/level-2/",
    type: "Resource (gated checklist)",
    group: "Checklists",
    kw: "cmmc level 2 checklist (170/mo, KD 23)",
    kw2: "cmmc 2.0 compliance checklist",
    h1: "The CMMC 2.0 Level 2 Compliance Checklist",
    title: "CMMC Level 2 Checklist: 110 Requirements | Secure-Centric",
    meta: "Download the CMMC 2.0 Level 2 compliance checklist: the 110 NIST SP 800-171 requirements in 14 families, with status, owner and evidence columns.",
    angle: "Clean, high-converting two-screen gated download template.",
    decisions: [
      "Screen 1 = centered title + definition; Screen 2 = form + document preview.",
      "Form fields: First name, Last name, Company, Work email."
    ],
    blocks: [
      {
        k: "hero_center",
        s: 1,
        wpBlock: "core/group",
        wpPattern: "secure-centric/checklist-hero-center",
        eyebrow: "Downloadable Resource · Level 2 Checklist",
        sub: "Download the complete 110-requirement NIST SP 800-171 / CMMC Level 2 workbook with automated negative scoring and evidence verification columns."
      },
      {
        k: "form",
        s: 2,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/gated-download-form",
        t: "Download the Level 2 Checklist",
        docTitle: "CMMC 2.0 Level 2 Complete Assessment Workbook (Excel + PDF)"
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Need help completing this checklist?",
        sub: "Book a discovery call with a Registered Practitioner."
      }
    ]
  },
  {
    id: "page-22",
    no: 22,
    name: "How to Detect Unmarked CUI Checklist",
    url: "/resources/templates/checklist/unmarked-cui/",
    type: "Resource (gated checklist)",
    group: "Checklists",
    kw: "how to detect unmarked cui",
    kw2: "unmarked cui · identify unmarked cui",
    h1: "How to Detect Unmarked CUI: Practical Checklist",
    title: "How to Detect Unmarked CUI: Checklist | Secure-Centric",
    meta: "A practical checklist for finding CUI that was never marked: distribution statements, legacy labels, contract clauses and data sources, and what to do next.",
    angle: "High-value operational checklist solving the #1 contractor fear.",
    decisions: [
      "Centered title + definition + download form."
    ],
    blocks: [
      {
        k: "hero_center",
        s: 1,
        wpBlock: "core/group",
        wpPattern: "secure-centric/checklist-hero-center",
        eyebrow: "Downloadable Resource · Unmarked CUI",
        sub: "Primes frequently pass drawings and specs without official CUI banners. Use this checklist to identify unmarked CUI before an auditor does."
      },
      {
        k: "form",
        s: 2,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/gated-download-form",
        t: "Download the Unmarked CUI Checklist",
        docTitle: "Detecting & Remediating Unmarked CUI in Defense Subcontracts"
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Found unmarked CUI in your systems?",
        sub: "Talk with our scoping team immediately."
      }
    ]
  },
  {
    id: "page-23",
    no: 23,
    name: "The CMMC Level 1 Readiness Checklist",
    url: "/resources/templates/checklist/level-1/",
    type: "Resource (gated checklist)",
    group: "Checklists",
    kw: "cmmc level 1 checklist (260/mo, KD 19)",
    kw2: "cmmc level 1 checklist pdf",
    h1: "The CMMC Level 1 Readiness Checklist",
    title: "CMMC Level 1 Checklist: 15 Requirements | Secure-Centric",
    meta: "Download the CMMC Level 1 readiness checklist: the 15 FAR 52.204-21 requirements as yes/no checks, the evidence to keep and what to do next.",
    angle: "Accessible Level 1 self-assessment workbook for Federal Contract Information (FCI).",
    decisions: [
      "15 FAR 52.204-21 controls formatted as clear yes/no questions."
    ],
    blocks: [
      {
        k: "hero_center",
        s: 1,
        wpBlock: "core/group",
        wpPattern: "secure-centric/checklist-hero-center",
        eyebrow: "Downloadable Resource · Level 1 Checklist",
        sub: "Review the 15 foundational FAR 52.204-21 controls required for any defense supplier handling basic contract information."
      },
      {
        k: "form",
        s: 2,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/gated-download-form",
        t: "Download the Level 1 Readiness Checklist",
        docTitle: "CMMC Level 1 (15 Controls) Self-Assessment Guide & Workbook"
      },
      {
        k: "cta",
        s: 4,
        wpBlock: "core/group (alignfull)",
        wpPattern: "secure-centric/final-cta-band",
        t: "Ready to confirm your Level 1 posture?",
        sub: "Book a discovery call with Secure-Centric."
      }
    ]
  },
  {
    id: "page-contact",
    no: 24,
    name: "Talk to an Expert (Contact)",
    url: "/contact/",
    type: "Contact & Discovery Call",
    group: "Core",
    kw: "cmmc compliance consultation · talk to cmmc expert",
    kw2: "cmmc rpo consultation · cmmc discovery call · defense contractor cmmc advisor",
    h1: "Schedule a Confidential Discovery Call with a CMMC Specialist",
    title: "Talk to a CMMC Expert | Secure-Centric",
    meta: "Schedule a confidential 30-minute discovery call with a Cyber AB Registered Practitioner. Get clear answers on scoping, DFARS 7012/7021 clauses, and certification timelines.",
    angle: "Direct conversion hub: tailored defense contractor form, bilateral NDA, direct Los Angeles contact details.",
    decisions: [
      "Tailored defense contractor form (SPRS score, CMMC target level, supplier tier).",
      "Strict trust signals: Cyber AB RPO #3942, bilateral NDA guarantee, direct phone and email."
    ],
    blocks: [
      {
        k: "contact_hero",
        s: 1,
        wpBlock: "core/cover (alignfull)",
        wpPattern: "secure-centric/contact-hero",
        eyebrow: "CYBER AB REGISTERED PROVIDER ORGANIZATION",
        h1: "Schedule Your Confidential CMMC Discovery Call",
        sub: "Direct access to accredited Cyber AB Registered Practitioners. We review your contract's DFARS clauses, scoping boundaries, and provide an actionable compliance roadmap—with zero high-pressure sales pitch."
      },
      {
        k: "contact_section",
        s: 2,
        wpBlock: "core/columns",
        wpPattern: "secure-centric/contact-form-split",
        t: "Speak with Our Registered Practitioners"
      },
      {
        k: "faq",
        s: 3,
        wpBlock: "core/group",
        wpPattern: "secure-centric/contact-faq",
        t: "Frequently Asked Questions About Discovery Calls",
        items: [
          {
            q: "Will you sign our bilateral Non-Disclosure Agreement (NDA) before we discuss contracts?",
            a: "Yes, absolutely. We sign your company's NDA or provide our standard defense-grade mutual NDA within 2 business hours before any discovery call or review of contract clauses."
          },
          {
            q: "Can an RPO officially certify our company for CMMC Level 2?",
            a: "No RPO can certify a defense contractor. Under Cyber AB rules, only accredited C3PAOs can issue official Level 2 certifications. As an RPO, Secure-Centric prepares you to pass your assessment with a 100% C3PAO first-time pass rate guarantee."
          },
          {
            q: "What information should I have ready for our 30-minute discovery call?",
            a: "Having your prime contract's Section I DFARS clauses (e.g. 252.204-7012, 7019, 7020), your high-level network topology, and whether you handle CUI or FCI will make the call most productive."
          },
          {
            q: "How quickly can Secure-Centric begin an on-site scoping assessment?",
            a: "Our lead Registered Practitioners typically conduct on-site discovery walkthroughs within 2 to 3 weeks of signed scope engagement."
          }
        ]
      }
    ]
  }
];
