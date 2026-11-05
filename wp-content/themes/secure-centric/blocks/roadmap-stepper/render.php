<?php
/**
 * Render Template for CMMC 8-Step Interactive Journey Stepper
 *
 * @package SecureCentric
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$eyebrow       = ! empty( $attributes['eyebrow'] ) ? $attributes['eyebrow'] : '// THE CMMC PROCESS';
$title         = ! empty( $attributes['title'] ) ? $attributes['title'] : 'Your CMMC journey, step by step';
$link_text     = ! empty( $attributes['linkText'] ) ? $attributes['linkText'] : 'View Detailed 8-Step Process →';
$link_url      = ! empty( $attributes['linkUrl'] ) ? $attributes['linkUrl'] : '#page-19';
$autoplay_delay = ! empty( $attributes['autoplayDelay'] ) ? (int) $attributes['autoplayDelay'] : 3800;

$steps = array(
    array(
        'no'     => '01',
        'name'   => 'Site visit',
        'phase'  => 'Physical & Technical Scoping',
        'help'   => 'We walk your actual facilities, shop floors, and secure server rooms to identify where Controlled Unclassified Information (CUI) lives, flows, and rests—physically and digitally.',
        'link'   => '#page-4',
        'output' => 'Initial Scope Boundary Map & Enclave Blueprint',
    ),
    array(
        'no'     => '02',
        'name'   => 'Scoping',
        'phase'  => 'Boundary Isolation & Network Segmentation',
        'help'   => 'We shrink your assessment scope by separating CUI systems from generic corporate networks, saving you tens of thousands in hardware, licensing, and audit fees.',
        'link'   => '#page-16',
        'output' => 'Formal CUI Boundary & Data Flow Diagram',
    ),
    array(
        'no'     => '03',
        'name'   => 'Gap assessment',
        'phase'  => 'NIST SP 800-171 Baseline Audit',
        'help'   => 'A rigorous evaluation against all 110 NIST SP 800-171 controls to pinpoint exactly where your current cybersecurity posture falls short of DoD requirements.',
        'link'   => '#page-5',
        'output' => 'Objective Gap Analysis & SPRS Score Baseline',
    ),
    array(
        'no'     => '04',
        'name'   => 'Remediation plan',
        'phase'  => 'Engineering Roadmap & Prioritization',
        'help'   => 'We build an actionable, engineer-to-engineer remediation roadmap with prioritized sprints, technical architecture blueprints, and clear resource assignments.',
        'link'   => '#page-7',
        'output' => 'System Security Plan (SSP) & POA&M Architecture',
    ),
    array(
        'no'     => '05',
        'name'   => 'Fixes',
        'phase'  => 'Hands-On Technical Implementation',
        'help'   => 'Hands-on technical implementation: MFA deployment, FIPS 140-3 encryption, SIEM log monitoring, endpoint isolation, and access control engineering.',
        'link'   => '#page-7',
        'output' => '110 Technical Control Implementations & Hardened Enclaves',
    ),
    array(
        'no'     => '06',
        'name'   => 'Documentation',
        'phase'  => 'Defensible Evidence & Policy Authoring',
        'help'   => 'Authoring your definitive System Security Plan (SSP), Plan of Action and Milestones (POA&M), and 30+ operational policies with defensible evidence records.',
        'link'   => '#page-8',
        'output' => 'Auditor-Tested SSP Package & Operational Evidence Vault',
    ),
    array(
        'no'     => '07',
        'name'   => 'Audit',
        'phase'  => 'Official C3PAO & DIBCAC Assessment',
        'help'   => 'We sit shoulder-to-shoulder with your team during the official Authorized C3PAO or DIBCAC assessment, guiding assessor interviews and defending evidence.',
        'link'   => '#page-19',
        'output' => 'Certified CMMC Level 2 Audit Pass with Zero Open Items',
    ),
    array(
        'no'     => '08',
        'name'   => 'Maintain',
        'phase'  => 'Continuous Compliance & vCISO Operations',
        'help'   => 'Annual recertification support, continuous monitoring, incident response drills, and ongoing vCISO advisory to ensure your defense contracts stay secure.',
        'link'   => '#page-11',
        'output' => 'Year-Round Continuous CMMC Compliance & Audit Defense',
    ),
);
?>

<section class="py-section roadmap-wrap wp-block-inspect" id="roadmap-section" data-autoplay-delay="<?php echo esc_attr( $autoplay_delay ); ?>">
  <div class="site-container">
    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px; flex-wrap: wrap; gap: 16px;">
      <div>
        <span class="section-eyebrow"><?php echo esc_html( $eyebrow ); ?></span>
        <h2><?php echo esc_html( $title ); ?></h2>
      </div>
      <a href="<?php echo esc_url( $link_url ); ?>" class="text-link"><?php echo esc_html( $link_text ); ?></a>
    </div>

    <!-- Interactive Milestone Flow Stepper -->
    <div class="roadmap-timeline-nav" role="tablist" aria-label="CMMC Milestone Process" id="roadmap-timeline-nav">
      <div class="roadmap-timeline-rail">
        <div class="roadmap-timeline-fill" id="roadmap-timeline-fill" style="width: 0%;"></div>
      </div>

      <!-- Standalone Walking Character -->
      <div class="roadmap-walker is-idle" id="roadmap-walker" aria-hidden="true">
        <svg class="walker-figure-svg" viewBox="0 0 140 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g class="sc-walker-root">
            <ellipse cx="72" cy="206" rx="36" ry="4.5" fill="#14204B" opacity=".12"/>
            <g class="sc-leg-back">
              <path d="M60 146 L54 180 L50 204" stroke="#0B1437" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
              <ellipse cx="44" cy="206" rx="14" ry="5.5" fill="#0B1437"/>
            </g>
            <g class="sc-leg-front">
              <path d="M78 146 L82 180 L86 204" stroke="#0B1437" stroke-width="11.5" stroke-linecap="round" stroke-linejoin="round"/>
              <ellipse cx="94" cy="206" rx="15" ry="5.5" fill="#0B1437"/>
            </g>
            <path d="M52 86 C52 74 88 74 88 86 L84 146 C84 150 56 150 56 146 Z" fill="#0B1437"/>
            <path d="M63 92 L77 92 L75 146 L65 146 Z" fill="#2F5BFF"/>
            <g class="sc-arm-back">
              <path d="M56 90 L40 114 L34 136" stroke="#0B1437" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="33" cy="138" r="6" fill="#F4C29E"/>
            </g>
            <g class="sc-head-group">
              <rect x="65" y="66" width="10" height="12" rx="3" fill="#F4C29E"/>
              <circle cx="70" cy="52" r="17" fill="#F4C29E"/>
              <path d="M53 50 C53 36 62 33 76 33 C84 33 88 38 88 46 C84 43 78 43 72 45 C66 47 62 50 59 56 Z" fill="#14204B"/>
              <circle cx="78" cy="50" r="2.2" fill="#0B1437"/>
            </g>
            <g class="sc-arm-front">
              <path d="M82 92 L96 116 L108 112" stroke="#0B1437" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="110" cy="112" r="6.5" fill="#F4C29E"/>
              <g class="sc-tablet">
                <rect x="98" y="90" width="34" height="46" rx="5" fill="#FFFFFF" stroke="#0B1437" stroke-width="2.5" class="sc-tablet-border"/>
                <rect x="103" y="95" width="24" height="34" rx="3" fill="#060B24"/>
                <path d="M109 108 L113 112 L121 104" stroke="#12B886" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="107" y1="120" x2="123" y2="120" stroke="#19C3F0" stroke-width="2" stroke-linecap="round"/>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <?php foreach ( $steps as $idx => $step ) : 
        $is_active    = ( 0 === $idx );
        $is_step7     = ( 6 === $idx );
        $state_class  = $is_active ? 'active' : '';
      ?>
        <button type="button" 
                class="step-node <?php echo $is_step7 ? 'step-7' : ''; ?> <?php echo esc_attr( $state_class ); ?>" 
                onclick="window.selectRoadmapStep(<?php echo (int) $idx; ?>, event)"
                role="tab"
                aria-selected="<?php echo $is_active ? 'true' : 'false'; ?>"
                title="Milestone <?php echo esc_attr( $step['no'] . ': ' . $step['name'] ); ?>">
          <?php if ( $is_step7 ) : ?>
            <div class="milestone-flag-wrap" id="step-7-flag">
              <span class="flag-icon">🏆</span>
              <span class="flag-label">AUDIT PASS</span>
            </div>
          <?php endif; ?>

          <span class="node-circle">
            <span class="node-num"><?php echo esc_html( $step['no'] ); ?></span>
          </span>
          <span class="node-label"><?php echo esc_html( $step['name'] ); ?></span>
        </button>
      <?php endforeach; ?>
    </div>

    <!-- Active Milestone Flow Detail Card -->
    <div class="step-detail-card" id="roadmap-detail-card" style="margin-top: 32px;">
      <div class="milestone-flow-header">
        <div class="milestone-stepper-pills">
          <span class="milestone-flow-badge">
            <span class="pulse-dot" style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: currentColor; margin-right: 5px;"></span>
            MILESTONE 01 OF 08 &bull; <?php echo esc_html( $steps[0]['phase'] ); ?>
          </span>
        </div>

        <div class="milestone-stepper-nav">
          <button type="button" class="milestone-nav-btn" disabled onclick="window.selectRoadmapStep(0, event)">&larr; Prev Milestone</button>
          <button type="button" class="milestone-nav-btn" onclick="window.selectRoadmapStep(1, event)">Next Milestone &rarr;</button>
        </div>
      </div>

      <div class="step-detail-left">
        <span class="section-eyebrow">MILESTONE 01 &bull; <?php echo esc_html( strtoupper( $steps[0]['name'] ) ); ?></span>
        <h3><?php echo esc_html( $steps[0]['name'] ); ?></h3>
        <p style="font-size: 1.0625rem; color: var(--color-body-text); line-height: 1.6; margin-bottom: 24px;">
          <?php echo esc_html( $steps[0]['help'] ); ?>
        </p>
        <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
          <button type="button" class="btn btn-primary" onclick="window.selectRoadmapStep(1, event)">
            Advance to Milestone 02: Scoping &rarr;
          </button>
          <a href="<?php echo esc_url( $steps[0]['link'] ); ?>" class="btn btn-secondary-outline">Explore Milestone Scope</a>
        </div>
      </div>

      <div class="step-detail-right">
        <div class="step-subcard">
          <h5>Core Deliverable & Scope Output</h5>
          <b style="color: var(--color-electric-blue); font-size: 0.9375rem;"><?php echo esc_html( $steps[0]['output'] ); ?></b>
        </div>
      </div>
    </div>
  </div>
</section>
