<?php
/**
 * Render Template for FAQ Accordion
 *
 * @package SecureCentric
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$eyebrow = ! empty( $attributes['eyebrow'] ) ? $attributes['eyebrow'] : '// FREQUENTLY ASKED QUESTIONS';
$title   = ! empty( $attributes['title'] ) ? $attributes['title'] : 'Everything You Need to Know About CMMC Compliance';

$faqs = array(
    array(
        'q' => 'What is the difference between CMMC Level 1 and Level 2?',
        'a' => 'CMMC Level 1 covers Federal Contract Information (FCI) across 15 basic safeguarding controls, verified via an annual self-assessment. CMMC Level 2 covers Controlled Unclassified Information (CUI) across all 110 NIST SP 800-171 controls and requires an independent assessment by an Authorized C3PAO.',
    ),
    array(
        'q' => 'How long does it take to prepare for a CMMC Level 2 audit?',
        'a' => 'Most defense suppliers take 4 to 9 months depending on network complexity and current SSP documentation. Our on-site scoping and remediation sprints condense this timeline by isolating CUI enclaves rather than overhauling your entire corporate enterprise.',
    ),
    array(
        'q' => 'Can our existing Managed Service Provider (MSP) handle our CMMC audit?',
        'a' => 'Most commercial MSPs lack Cyber AB Registered Practitioner certification and cannot legally defend evidence during a DIBCAC or C3PAO audit. We partner collaboratively with your existing MSP to provide the specialized compliance blueprints, technical remediation, and audit defense without replacing them.',
    ),
    array(
        'q' => 'What happens if a defense contractor fails to achieve CMMC compliance?',
        'a' => 'Under DFARS 252.204-7021, DoD contracting officers cannot award new defense contracts or extend existing options to non-compliant suppliers. Furthermore, false SPRS score attestations expose contractors to severe False Claims Act liabilities.',
    ),
);
?>

<section class="section-white py-section wp-block-inspect" data-wp-pattern="secure-centric/faq-accordion">
  <div class="site-container">
    <div class="section-heading-center" style="margin-bottom: 40px;">
      <span class="section-eyebrow"><?php echo esc_html( $eyebrow ); ?></span>
      <h2><?php echo esc_html( $title ); ?></h2>
      <p style="color: var(--color-slate); max-width: 600px; margin: 8px auto 0;">
        Clear answers on scoping, assessor expectations, timelines, and SPRS scoring.
      </p>
    </div>

    <div style="max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px;">
      <?php foreach ( $faqs as $idx => $faq ) : ?>
        <div class="accordion-item <?php echo ( 0 === $idx ) ? 'active' : ''; ?>">
          <button type="button" class="accordion-header" onclick="this.closest('.accordion-item').classList.toggle('active')" aria-expanded="<?php echo ( 0 === $idx ) ? 'true' : 'false'; ?>">
            <span><?php echo esc_html( $faq['q'] ); ?></span>
            <span class="accordion-icon">+</span>
          </button>
          <div class="accordion-content">
            <p><?php echo esc_html( $faq['a'] ); ?></p>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
