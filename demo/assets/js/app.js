/**
 * SECURE-CENTRIC | APPLICATION ENGINE & GUTENBERG ARCHITECTURE HUD
 * Renders all 20 pages, handles interactive roadmaps, level finders, forms, and block inspector
 */

(function () {
  'use strict';

  const PAGES = window.SITE_PAGES_DATA || [];
  let currentPageId = 'page-1';
  let isMobilePreview = false;
  let isGutenbergInspector = false;
  let activeRoadmapStep = 0;

  // Cache DOM references
  const mainAppContainer = document.getElementById('app-main-content');
  const pageSelectDropdown = document.getElementById('hud-page-select');
  const gutenbergToggleBtn = document.getElementById('hud-gutenberg-toggle');
  const viewportToggleBtn = document.getElementById('hud-viewport-toggle');
  const metaToggleBtn = document.getElementById('hud-meta-toggle');
  const metaDrawer = document.getElementById('page-meta-drawer');

  /**
   * Helper: Find Page by ID
   */
  function getPage(id) {
    return PAGES.find(p => p.id === id) || PAGES[0];
  }

  /**
   * Helper: Sanitize string for HTML
   */
  function esc(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /**
   * Render Top Presentation HUD Dropdown Options
   */
  function initHudDropdown() {
    if (!pageSelectDropdown) return;
    const groups = [
      { name: 'Core Pages', group: 'Core' },
      { name: 'Core Services (3 Pages)', group: 'Services' },
      { name: 'Engagement Stages (Included)', group: 'Stages' },
      { name: 'Knowledge Pillars', group: 'Pillars' },
      { name: 'Downloadable Checklists', group: 'Checklists' }
    ];

    let html = '';
    groups.forEach(g => {
      const groupPages = PAGES.filter(p => p.group === g.group);
      if (groupPages.length > 0) {
        html += `<optgroup label="${g.name}">`;
        groupPages.forEach(p => {
          html += `<option value="${p.id}">${String(p.no).padStart(2, '0')}. ${p.name} (${p.url})</option>`;
        });
        html += `</optgroup>`;
      }
    });

    pageSelectDropdown.innerHTML = html;
    pageSelectDropdown.value = currentPageId;

    pageSelectDropdown.addEventListener('change', (e) => {
      window.location.hash = e.target.value;
    });
  }

  /**
   * Render Block HTML: Hero Home
   */
  function renderHeroHome(block, page) {
    return `
      <section class="hero-home-wrap wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:cover {align:'full', backgroundColor:'midnight'}" 
               data-wp-pattern="secure-centric/hero-home">
        <div class="site-container">
          <div class="hero-home-grid">
            <div class="hero-home-content">
              <span class="section-eyebrow dark">// ${esc(block.eyebrow)}</span>
              <h1>CMMC compliance for defense subcontractors, guided by a <span class="cyan-highlight">Cyber AB RPO</span></h1>
              <p class="hero-lead">${esc(block.sub)}</p>
              <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
                <a href="#page-2" class="btn btn-primary btn-lg">Book a Discovery Call &rarr;</a>
                <span style="font-size: 0.8125rem; color: var(--color-slate); font-family: var(--font-mono);">30 min · No sales pitch · Signed NDA</span>
              </div>
              <div class="hero-topic-cards">
                ${block.topics.map(t => `
                  <a href="${t.url}" class="hero-topic-card">
                    <b>${esc(t.title)} &rarr;</b>
                    <span>${esc(t.desc)}</span>
                  </a>
                `).join('')}
              </div>
            </div>
            
            <div class="hero-readiness-card">
              <div class="eyebrow">
                <span>${esc(block.leadCardBadge)}</span>
                <span class="badge-chip accent" style="font-size: 0.65rem;">Free Tool</span>
              </div>
              <h3>${esc(block.leadCardTitle)}</h3>
              <p style="font-size: 0.875rem; color: var(--color-body-text); margin-bottom: 16px;">
                ${esc(block.leadCardDesc)}
              </p>
              <form class="readiness-inline-form" onsubmit="event.preventDefault(); window.triggerToolModal();">
                <div style="margin-bottom: 12px;">
                  <input type="email" class="form-input" placeholder="Enter your corporate work email" required />
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">
                  Start 3-Minute Readiness Check &rarr;
                </button>
              </form>
              <p style="font-size: 0.6875rem; color: var(--color-slate); margin-top: 10px; text-align: center;">
                🔒 Work email required. Never submit classified or CUI information.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Hero Service (6-Phase Strip)
   */
  function renderHeroService(block, page) {
    return `
      <section class="section-midnight py-section wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:group {align:'full', backgroundColor:'midnight'}" 
               data-wp-pattern="secure-centric/hero-service-phases" 
               style="border-bottom: 1px solid var(--color-dark-line); position: relative;">
        <div class="site-container">
          <div style="font-size: 0.75rem; color: var(--color-slate); font-family: var(--font-mono); margin-bottom: 16px;">
            HOME / SERVICES / <span style="color: var(--color-cyber-cyan);">${esc(page.name).toUpperCase()}</span>
          </div>
          <div class="hero-home-grid">
            <div>
              <span class="section-eyebrow dark">// ${esc(block.eyebrow)}</span>
              <h1 style="color: var(--color-white); margin-bottom: 16px;">${esc(page.h1)}</h1>
              <p class="hero-lead" style="color: var(--color-text-on-dark);">${esc(block.sub)}</p>
              <div style="display: flex; gap: 16px; align-items: center; margin-top: 24px; flex-wrap: wrap;">
                <a href="#page-4" class="btn btn-primary btn-lg">Book a Discovery Call &rarr;</a>
                <a href="#phases-detail" class="text-link on-dark">Explore Every Phase &darr;</a>
              </div>
              <div style="display: flex; gap: 10px; margin-top: 28px; flex-wrap: wrap;">
                <span class="badge-chip dark"><i class="dot"></i> Cyber AB RPO · CPN #3942</span>
                <span class="badge-chip dark"><i class="dot"></i> Inc. 5000 Honoree</span>
                <span class="badge-chip dark"><i class="dot"></i> 100% C3PAO Pass Record</span>
              </div>
            </div>

            <div class="card-dark" style="background-color: #0B1437; border: 1.5px solid var(--color-dark-outline); padding: 28px;">
              <span class="section-eyebrow dark" style="font-size: 0.6875rem;">ENGAGEMENT AT A GLANCE</span>
              <h4 style="color: var(--color-white); margin-bottom: 14px;">The 6 Delivery Phases</h4>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
                ${block.phases.map((p, i) => `
                  <div style="display: flex; align-items: center; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(30, 42, 90, 0.6);">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span style="width: 22px; height: 22px; border-radius: 50%; background: var(--color-electric-blue); color: #fff; font-size: 0.6875rem; font-family: var(--font-mono); font-weight: 700; display: flex; align-items: center; justify-content: center;">${i+1}</span>
                      <span style="font-size: 0.875rem; color: var(--color-white); font-weight: 600;">${esc(p)}</span>
                    </div>
                    <span style="color: var(--color-slate); font-size: 0.75rem;">&darr;</span>
                  </div>
                `).join('')}
              </div>
              <span style="font-family: var(--font-mono); font-size: 0.6875rem; text-transform: uppercase; color: var(--color-slate); display: block; margin-bottom: 8px;">Key Deliverables You Keep:</span>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${block.deliverables.map(d => `
                  <span class="badge-chip dark" style="font-size: 0.6875rem; border-color: rgba(0, 212, 255, 0.3);">${esc(d)}</span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Hero ICP (4 Audience Tiles)
   */
  function renderHeroICP(block, page) {
    return `
      <section class="section-midnight py-section wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:group {align:'full', backgroundColor:'midnight'}" 
               data-wp-pattern="secure-centric/hero-icp-tiles"
               style="border-bottom: 1px solid var(--color-dark-line);">
        <div class="site-container">
          <div class="hero-home-grid">
            <div>
              <span class="section-eyebrow dark">// ${esc(block.eyebrow)}</span>
              <h1 style="color: var(--color-white); margin-bottom: 16px;">${esc(page.h1)}</h1>
              <p class="hero-lead" style="color: var(--color-text-on-dark);">${esc(block.sub)}</p>
              <div style="margin-top: 24px;">
                <a href="#page-4" class="btn btn-primary btn-lg">Book a Discovery Call &rarr;</a>
              </div>
            </div>

            <div>
              <span class="section-eyebrow dark" style="font-size: 0.75rem;">SELECT YOUR SITUATION</span>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 10px;">
                ${block.audiences.map(a => `
                  <div class="card-dark" style="cursor: pointer; padding: 20px;" onclick="alert('Viewing personalized compliance path for: ${a}')">
                    <h4 style="font-size: 0.9375rem; color: var(--color-white); margin-bottom: 8px;">${esc(a)}</h4>
                    <span class="text-link on-dark" style="font-size: 0.75rem;">See Your Path &rarr;</span>
                  </div>
                `).join('')}
              </div>
              <div style="font-size: 0.75rem; color: var(--color-slate); font-family: var(--font-mono); text-align: center; margin-top: 12px;">
                Not sure? Start with your contract tier below &darr;
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Hero Guide (Pillar Pages)
   */
  function renderHeroGuide(block, page) {
    const isTool = (block.side || '').startsWith('tool:');
    const isDiagram = (block.side || '').startsWith('diagram:');
    const sideContent = (block.side || '').replace(/^(tool|diagram|facts):/, '');

    return `
      <section class="section-midnight py-section wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:group {align:'full', backgroundColor:'midnight'}" 
               data-wp-pattern="secure-centric/hero-pillar-guide"
               style="border-bottom: 1px solid var(--color-dark-line);">
        <div class="site-container">
          <div style="font-size: 0.75rem; color: var(--color-slate); font-family: var(--font-mono); margin-bottom: 16px;">
            HOME / LEARN / <span style="color: var(--color-cyber-cyan);">${esc(page.name).toUpperCase()}</span>
          </div>
          <div class="hero-home-grid">
            <div>
              <span class="section-eyebrow dark">// ${esc(block.eyebrow)}</span>
              <h1 style="color: var(--color-white); margin-bottom: 16px;">${esc(page.h1)}</h1>
              
              <div class="card-dark" style="background-color: rgba(11, 20, 55, 0.85); border-left: 3px solid var(--color-cyber-cyan); margin-bottom: 20px; padding: 18px 22px;">
                <span style="font-family: var(--font-mono); font-size: 0.6875rem; text-transform: uppercase; color: var(--color-cyber-cyan); display: block; margin-bottom: 6px;">DIRECT ANSWER (EXECUTIVE SUMMARY)</span>
                <p style="color: var(--color-white); font-size: 1rem; margin: 0; line-height: 1.5;">${esc(block.sub)}</p>
              </div>

              <div style="font-size: 0.75rem; color: var(--color-slate); font-family: var(--font-mono); display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
                <span>Reviewed by: <b>Son Phan, Principal Architect</b></span>
                <span>•</span>
                <span>Last Updated: <b>Q4 2026</b></span>
                <span>•</span>
                <span class="badge-chip dark" style="font-size: 0.65rem;">Cyber AB RPO Verified</span>
              </div>
            </div>

            <div>
              ${isTool ? `
                <div class="card-white" style="padding: 28px;">
                  <span class="section-eyebrow">// INTERACTIVE TOOL</span>
                  <h3>${esc(sideContent)}</h3>
                  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
                    <label style="display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem;">
                      <span>Does your contract contain DFARS 7012?</span>
                      <input type="checkbox" checked style="accent-color: var(--color-electric-blue); width: 18px; height: 18px;" />
                    </label>
                    <label style="display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem;">
                      <span>Do you store or process technical drawings / CAD?</span>
                      <input type="checkbox" checked style="accent-color: var(--color-electric-blue); width: 18px; height: 18px;" />
                    </label>
                    <label style="display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem;">
                      <span>Are you a designated critical weapon system supplier?</span>
                      <input type="checkbox" style="accent-color: var(--color-electric-blue); width: 18px; height: 18px;" />
                    </label>
                  </div>
                  <div class="card-soft-blue" style="padding: 14px; margin-bottom: 16px;">
                    <b style="color: var(--color-navy); font-size: 0.875rem; display: block;">Calculated Level Requirement:</b>
                    <span style="color: var(--color-electric-blue); font-weight: 800; font-size: 1.15rem;">CMMC Level 2 (110 Controls)</span>
                  </div>
                  <a href="#page-13" class="btn btn-primary" style="width: 100%;">View Level 2 Action Plan &rarr;</a>
                </div>
              ` : `
                <div class="card-dark" style="padding: 28px;">
                  <span class="section-eyebrow dark">// KEY SPECIFICATIONS</span>
                  <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 14px;">
                    ${sideContent.split('·').map(fact => `
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="width: 28px; height: 28px; border-radius: 6px; background: rgba(0, 212, 255, 0.15); color: var(--color-cyber-cyan); display: flex; align-items: center; justify-content: center; font-size: 0.875rem;">✓</span>
                        <b style="color: var(--color-white); font-size: 0.9375rem;">${esc(fact.trim())}</b>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Hero Split (Stage Pages)
   */
  function renderHeroSplit(block, page) {
    return `
      <section class="section-midnight py-section wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:group {align:'full', backgroundColor:'midnight'}" 
               data-wp-pattern="secure-centric/hero-split-stage"
               style="border-bottom: 1px solid var(--color-dark-line);">
        <div class="site-container">
          <div style="font-size: 0.75rem; color: var(--color-slate); font-family: var(--font-mono); margin-bottom: 16px;">
            HOME / SERVICES / ENGAGEMENT STAGES / <span style="color: var(--color-cyber-cyan);">${esc(page.name).toUpperCase()}</span>
          </div>
          <div class="hero-home-grid">
            <div>
              <span class="section-eyebrow dark">// ${esc(block.eyebrow)}</span>
              <h1 style="color: var(--color-white); margin-bottom: 16px;">${esc(page.h1)}</h1>
              <p class="hero-lead" style="color: var(--color-text-on-dark);">${esc(block.sub)}</p>
              <div style="display: flex; gap: 16px; align-items: center; margin-top: 24px;">
                <a href="#page-2" class="btn btn-primary btn-lg">Book a Discovery Call &rarr;</a>
                <a href="#details" class="text-link on-dark">${esc(block.link)} &darr;</a>
              </div>
            </div>

            <div class="card-white" style="padding: 28px;">
              <span class="section-eyebrow">// DIRECT ADVISORY</span>
              <h3>Talk to a CMMC Advisor</h3>
              <p style="font-size: 0.875rem; color: var(--color-body-text); margin: 8px 0 16px;">
                Here is exactly what you receive on your confidential 30-minute scoping review:
              </p>
              <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
                <div class="tick-item" style="display: flex; gap: 10px; font-size: 0.875rem;">
                  <span style="color: var(--color-electric-blue); font-weight: 800;">✓</span>
                  <span>Where you stand today against NIST 800-171</span>
                </div>
                <div class="tick-item" style="display: flex; gap: 10px; font-size: 0.875rem;">
                  <span style="color: var(--color-electric-blue); font-weight: 800;">✓</span>
                  <span>Which level and scoping boundary fits your contracts</span>
                </div>
                <div class="tick-item" style="display: flex; gap: 10px; font-size: 0.875rem;">
                  <span style="color: var(--color-electric-blue); font-weight: 800;">✓</span>
                  <span>A concrete, written first step before committing budget</span>
                </div>
              </div>
              <a href="#page-2" class="btn btn-primary" style="width: 100%;">Book Discovery Call &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Hero Center (Checklists & About)
   */
  function renderHeroCenter(block, page) {
    return `
      <section class="section-midnight py-section text-center wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:group {align:'full', backgroundColor:'midnight'}" 
               data-wp-pattern="secure-centric/hero-center"
               style="text-align: center; border-bottom: 1px solid var(--color-dark-line);">
        <div class="site-container" style="max-width: 800px; margin: 0 auto;">
          <span class="section-eyebrow dark" style="justify-content: center;">// ${esc(block.eyebrow || 'OFFICIAL TEMPLATE')}</span>
          <h1 style="color: var(--color-white); margin-bottom: 16px;">${esc(page.h1)}</h1>
          <p class="hero-lead" style="color: var(--color-text-on-dark); margin: 0 auto 28px;">${esc(block.sub)}</p>
          <div style="display: flex; justify-content: center; gap: 12px;">
            <a href="#download-form" class="btn btn-primary btn-lg">Download Checklist (PDF/Excel) &darr;</a>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Scrolling Client Logos
   */
  function renderLogos(block) {
    return `
      <section class="logos-band-wrap wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:group {align:'full', backgroundColor:'white'}" 
               data-wp-pattern="secure-centric/client-logos-marquee">
        <div class="site-container">
          <div class="logos-band-title">${esc(block.t)}</div>
          <div class="logos-marquee">
            ${block.logos.map(logo => `
              <div class="logo-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px; color: var(--color-electric-blue);">
                  <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/>
                </svg>
                <span>${esc(logo)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: 8-Step CMMC Journey Roadmap
   */
  function renderJourney(block) {
    const items = block.items || [];
    const activeStep = items[activeRoadmapStep] || items[0];

    return `
      <section class="py-section roadmap-wrap wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:group {backgroundColor:'ice'}" 
               data-wp-pattern="secure-centric/cmmc-8-step-journey" 
               id="roadmap-section">
        <div class="site-container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="section-eyebrow">// THE CMMC PROCESS</span>
              <h2>${esc(block.t)}</h2>
            </div>
            <a href="#page-19" class="text-link">View Detailed 8-Step Process &rarr;</a>
          </div>

          <!-- Interactive Node Navigator -->
          <div class="roadmap-timeline-nav">
            ${items.map((step, idx) => `
              <button class="step-node ${idx === 7 ? 'step-8' : ''} ${idx === activeRoadmapStep ? 'active' : ''}" 
                      onclick="window.selectRoadmapStep(${idx})">
                <span class="node-circle">${step.no}</span>
                <span class="node-label">${esc(step.name)}</span>
              </button>
            `).join('')}
          </div>

          <!-- Active Step Detail Card -->
          <div class="step-detail-card" style="margin-top: 32px;">
            <div class="step-detail-left">
              <span class="section-eyebrow violet">STEP ${activeStep.no} OF 08</span>
              <h3>${esc(activeStep.name)}</h3>
              <p style="font-size: 1.0625rem; color: var(--color-body-text); line-height: 1.6; margin-bottom: 24px;">
                ${esc(activeStep.help)}
              </p>
              <div style="display: flex; gap: 14px; align-items: center;">
                <a href="${activeStep.link || '#page-2'}" class="btn btn-primary">Explore This Step &rarr;</a>
                <span style="font-size: 0.8125rem; color: var(--color-slate); font-family: var(--font-mono);">Included in CMMC engagement</span>
              </div>
            </div>

            <div class="step-detail-right">
              <div class="step-subcard">
                <h5>WHO DOES THIS WORK</h5>
                <b style="color: var(--color-navy); font-size: 0.9375rem;">${esc(activeStep.who)}</b>
              </div>
              <div class="step-subcard">
                <h5>PRIMARY DELIVERABLE YOU KEEP</h5>
                <b style="color: var(--color-electric-blue); font-size: 0.9375rem;">${esc(activeStep.output)}</b>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Testimonials
   */
  function renderQuotes(block) {
    return `
      <section class="section-ice py-section wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:columns {columns:3}" 
               data-wp-pattern="secure-centric/testimonials-carousel">
        <div class="site-container">
          <div style="text-align: center; max-width: 680px; margin: 0 auto 48px;">
            <span class="section-eyebrow" style="justify-content: center;">// CLIENT REVIEWS</span>
            <h2>${esc(block.t)}</h2>
          </div>
          <div class="testimonials-grid">
            ${block.items.map(q => `
              <div class="testimonial-card">
                <p class="testimonial-quote">"${esc(q.quote)}"</p>
                <div class="testimonial-author">
                  <div class="testimonial-avatar">${q.name.split(' ').map(n=>n[0]).join('')}</div>
                  <div class="testimonial-meta">
                    <b>${esc(q.name)}</b>
                    <span>${esc(q.role)}, ${esc(q.company)}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Why Secure-Centric & Proof
   */
  function renderWhy(block) {
    return `
      <section class="section-white py-section wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:group" 
               data-wp-pattern="secure-centric/why-proof-badges">
        <div class="site-container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 36px; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="section-eyebrow">// PROOF & CREDENTIALS</span>
              <h2>${esc(block.t)}</h2>
            </div>
            <a href="#page-N1" class="text-link">Full Company Credentials &rarr;</a>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1.6fr; gap: 32px; align-items: start;">
            <!-- Left Stats Numbers -->
            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${(block.stats || []).map(s => `
                <div class="stats-number-block">
                  <div class="number ${s.color === 'violet' ? 'violet' : ''}">${s.number}</div>
                  <div class="label">${esc(s.label)}</div>
                  <div class="date">${esc(s.date)}</div>
                </div>
              `).join('')}
            </div>

            <!-- Right 4 Reasons Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px;">
              ${(block.reasons || []).map(r => `
                <div class="card-white" style="padding: 22px;">
                  <div class="card-icon-box">🛡️</div>
                  <h4 style="font-size: 1.0625rem; margin-bottom: 8px;">${esc(r.title)}</h4>
                  <p style="font-size: 0.875rem; color: var(--color-body-text); line-height: 1.5;">${esc(r.text)}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Accordion FAQ
   */
  function renderFAQ(block) {
    return `
      <section class="section-ice py-section wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:details-group" 
               data-wp-pattern="secure-centric/faq-accordion">
        <div class="site-container">
          <div style="display: grid; grid-template-columns: 1fr 1.6fr; gap: 48px; align-items: start;">
            <div>
              <span class="section-eyebrow">// FREQUENTLY ASKED QUESTIONS</span>
              <h2 style="margin-bottom: 16px;">${esc(block.t)}</h2>
              <p style="color: var(--color-body-text); font-size: 0.9375rem; margin-bottom: 24px;">
                Still have questions regarding your specific CMMC clauses or audit dates? Speak directly with our lead Registered Practitioner.
              </p>
              <a href="#page-2" class="btn btn-secondary-outline">Book a Discovery Call &rarr;</a>
            </div>

            <div class="accordion-group">
              ${block.items.map((faq, i) => `
                <div class="accordion-item ${i === 0 ? 'active' : ''}">
                  <div class="accordion-header" onclick="window.toggleAccordion(this)">
                    <span class="accordion-title">${esc(faq.q)}</span>
                    <span class="accordion-icon">+</span>
                  </div>
                  <div class="accordion-content">
                    ${esc(faq.a)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Inline Lead Magnet Band
   */
  function renderLeadMagnet(block) {
    return `
      <section class="py-section-sm wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:group {className:'lead-magnet-block'}" 
               data-wp-pattern="secure-centric/lead-magnet-inline">
        <div class="site-container">
          <div class="lead-magnet-band">
            <div class="lead-magnet-grid">
              <div>
                <span class="section-eyebrow" style="font-size: 0.6875rem;">// FREE DOWNLOADABLE RESOURCE</span>
                <h3 style="font-size: 1.25rem; margin-bottom: 8px;">${esc(block.name)}</h3>
                <ul class="checklist-bullet-list">
                  ${(block.ticks || []).map(t => `<li>${esc(t)}</li>`).join('')}
                </ul>
              </div>

              <div>
                <div class="doc-preview-mock">
                  <div class="doc-badge">PDF / EXCEL WORKBOOK</div>
                  <div class="doc-title">${esc(block.name)}</div>
                  <div class="doc-skeleton-line"></div>
                  <div class="doc-skeleton-line short"></div>
                  <div class="doc-skeleton-line medium"></div>
                </div>
              </div>

              <div>
                <form onsubmit="event.preventDefault(); alert('Checklist sent! Check your inbox for the download link.');">
                  <div style="margin-bottom: 10px;">
                    <input type="email" class="form-input" placeholder="Enter corporate email address" required />
                  </div>
                  <button type="submit" class="btn btn-primary" style="width: 100%;">Instant Free Download &rarr;</button>
                  <span style="font-size: 0.6875rem; color: var(--color-slate); display: block; margin-top: 6px; text-align: center;">
                    Strictly confidential. No spam guarantee.
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Final Global CTA Band
   */
  function renderFinalCTA(block) {
    return `
      <section class="final-cta-section wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:group {align:'full', backgroundColor:'electric-blue'}" 
               data-wp-pattern="secure-centric/final-cta-band">
        <div class="site-container">
          <h2>${esc(block.t || 'Planning to get started on CMMC?')}</h2>
          <p>${esc(block.sub || 'Talk with an accredited Cyber AB Registered Provider Organization. Get an actionable first step in writing within 30 minutes.')}</p>
          <div class="final-cta-buttons">
            <a href="#page-2" class="btn btn-primary-dark btn-lg">Book a Discovery Call &rarr;</a>
            <a href="tel:323-410-5941" class="btn btn-ghost-dark btn-lg">Call (323) 410-5941</a>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Render Block HTML: Custom Tables
   */
  function renderTable(block) {
    return `
      <section class="section-white py-section wp-block-inspect wp-pattern-inspect" 
               data-wp-block="wp:table" 
               data-wp-pattern="secure-centric/data-table">
        <div class="site-container">
          <h3 style="margin-bottom: 20px;">${esc(block.t)}</h3>
          <div class="custom-table-wrap">
            <table class="custom-table">
              <thead>
                <tr>
                  ${block.cols.map(c => `<th>${esc(c)}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${block.rows.map(row => `
                  <tr>
                    ${row.map(cell => `<td>${esc(cell)}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Main Page Renderer
   */
  function renderCurrentPage() {
    const page = getPage(currentPageId);
    if (!page) return;

    // Update Browser Document Title
    document.title = `${page.title} | Secure-Centric`;

    // Sync HUD Select
    if (pageSelectDropdown) pageSelectDropdown.value = page.id;

    // Render Blocks
    let contentHtml = '';
    page.blocks.forEach(block => {
      switch (block.k) {
        case 'hero_home':
          contentHtml += renderHeroHome(block, page);
          break;
        case 'hero_service':
          contentHtml += renderHeroService(block, page);
          break;
        case 'hero_icp':
          contentHtml += renderHeroICP(block, page);
          break;
        case 'hero_guide':
          contentHtml += renderHeroGuide(block, page);
          break;
        case 'hero_split':
          contentHtml += renderHeroSplit(block, page);
          break;
        case 'hero_center':
          contentHtml += renderHeroCenter(block, page);
          break;
        case 'logos':
          contentHtml += renderLogos(block);
          break;
        case 'journey':
          contentHtml += renderJourney(block);
          break;
        case 'quotes':
        case 'stories':
          contentHtml += renderQuotes(block);
          break;
        case 'why':
          contentHtml += renderWhy(block);
          break;
        case 'faq':
          contentHtml += renderFAQ(block);
          break;
        case 'lead':
          contentHtml += renderLeadMagnet(block);
          break;
        case 'cta':
          contentHtml += renderFinalCTA(block);
          break;
        case 'table':
          contentHtml += renderTable(block);
          break;
        case 'cards':
          contentHtml += `
            <section class="section-white py-section wp-block-inspect" data-wp-block="wp:columns">
              <div class="site-container">
                <h3 style="margin-bottom: 24px;">${esc(block.t)}</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
                  ${block.items.map(card => `
                    <div class="card-white">
                      <div class="card-icon-box">📁</div>
                      <h4>${esc(card.title)}</h4>
                      <p style="font-size: 0.875rem; color: var(--color-body-text); margin: 8px 0 16px;">${esc(card.text)}</p>
                      <a href="${card.link || '#page-12'}" class="text-link">Explore Resource &rarr;</a>
                    </div>
                  `).join('')}
                </div>
              </div>
            </section>
          `;
          break;
        case 'text':
          contentHtml += `
            <section class="section-white py-section wp-block-inspect" data-wp-block="wp:group">
              <div class="site-container" style="max-width: 900px;">
                <span class="section-eyebrow">// SECTION EXPLAINER</span>
                <h2 style="margin-bottom: 20px;">${esc(block.t)}</h2>
                ${(block.paras || []).map(p => `<p style="font-size: 1.0625rem; line-height: 1.7; color: var(--color-body-text); margin-bottom: 16px;">${esc(p)}</p>`).join('')}
              </div>
            </section>
          `;
          break;
        default:
          // Fallback generic card
          contentHtml += `
            <section class="section-ice py-section wp-block-inspect" data-wp-block="wp:group {className:'${block.k}'}">
              <div class="site-container">
                <span class="section-eyebrow">// ${esc(block.k).toUpperCase()}</span>
                <h3>${esc(block.t || page.name)}</h3>
                <p style="color: var(--color-body-text); font-size: 0.9375rem;">Structured Gutenberg block content mapped to block pattern.</p>
              </div>
            </section>
          `;
          break;
      }
    });

    mainAppContainer.innerHTML = contentHtml;

    // Update Meta Drawer Data
    updateMetaDrawer(page);

    // Scroll to top on page transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Update Bottom SEO Metadata Drawer
   */
  function updateMetaDrawer(page) {
    if (!metaDrawer) return;
    metaDrawer.innerHTML = `
      <div class="site-container">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <b style="color: var(--color-cyber-cyan); font-family: var(--font-mono); font-size: 0.8125rem;">
            [PAGE SPECIFICATION & SEO ARCHITECTURE]
          </b>
          <button onclick="window.toggleMetaDrawer()" style="background: none; border: none; color: var(--color-slate); font-size: 1.1rem; cursor: pointer;">✕</button>
        </div>
        <div class="page-meta-grid">
          <div class="page-meta-item">
            <dt>Target URL</dt>
            <dd>${esc(page.url)}</dd>
          </div>
          <div class="page-meta-item">
            <dt>Primary Keyword</dt>
            <dd style="color: var(--color-cyber-cyan);">${esc(page.kw)}</dd>
          </div>
          <div class="page-meta-item">
            <dt>H1 Tag</dt>
            <dd>${esc(page.h1)}</dd>
          </div>
          <div class="page-meta-item">
            <dt>Gutenberg Theme Template</dt>
            <dd style="color: var(--color-violet);">templates/page-${esc(page.group.toLowerCase())}.html</dd>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Global interactive handlers attached to window
   */
  window.selectRoadmapStep = function (idx) {
    activeRoadmapStep = idx;
    renderCurrentPage();
  };

  window.toggleAccordion = function (headerEl) {
    const item = headerEl.closest('.accordion-item');
    if (item) {
      item.classList.toggle('active');
    }
  };

  window.toggleGutenbergInspector = function () {
    isGutenbergInspector = !isGutenbergInspector;
    document.body.classList.toggle('gutenberg-inspector-active', isGutenbergInspector);
    if (gutenbergToggleBtn) {
      gutenbergToggleBtn.classList.toggle('active-gutenberg', isGutenbergInspector);
      gutenbergToggleBtn.textContent = isGutenbergInspector ? '⚡ Hide Block Inspector' : '🔍 Inspect Gutenberg Blocks';
    }
  };

  window.toggleViewport = function () {
    isMobilePreview = !isMobilePreview;
    document.body.classList.toggle('mobile-preview-mode', isMobilePreview);
    if (viewportToggleBtn) {
      viewportToggleBtn.textContent = isMobilePreview ? '📱 Mobile (390px)' : '💻 Desktop (1440px)';
    }
  };

  window.toggleMetaDrawer = function () {
    if (metaDrawer) {
      metaDrawer.classList.toggle('open');
    }
  };

  window.triggerToolModal = function () {
    alert("CMMC Readiness Calculator: Based on your selections, your organization has a 78% baseline readiness score. Complete findings roadmap has been sent to your work email.");
  };

  /**
   * Hash Route Listener
   */
  function handleRoute() {
    const hash = window.location.hash.replace('#', '');
    if (hash && PAGES.some(p => p.id === hash)) {
      currentPageId = hash;
    } else {
      currentPageId = 'page-1';
    }
    renderCurrentPage();
  }

  // Bind Buttons
  if (gutenbergToggleBtn) {
    gutenbergToggleBtn.addEventListener('click', window.toggleGutenbergInspector);
  }
  if (viewportToggleBtn) {
    viewportToggleBtn.addEventListener('click', window.toggleViewport);
  }
  if (metaToggleBtn) {
    metaToggleBtn.addEventListener('click', window.toggleMetaDrawer);
  }

  window.addEventListener('hashchange', handleRoute);

  // Initialize
  initHudDropdown();
  handleRoute();

})();
