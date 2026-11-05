<?php
/**
 * Render Template for Call to Action Band
 *
 * @package SecureCentric
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$eyebrow          = ! empty( $attributes['eyebrow'] ) ? $attributes['eyebrow'] : '// GET STARTED TODAY';
$title            = ! empty( $attributes['title'] ) ? $attributes['title'] : 'Prepare for Your CMMC Level 2 Audit with Certainty';
$description      = ! empty( $attributes['description'] ) ? $attributes['description'] : 'Book a confidential 30-minute scoping call with an Authorized Cyber AB Registered Practitioner. We review your CUI boundary, contract requirements, and audit timeline under bilateral NDA.';
$primary_btn_text = ! empty( $attributes['primaryBtnText'] ) ? $attributes['primaryBtnText'] : 'Book a Scoping Call';
$primary_btn_url  = ! empty( $attributes['primaryBtnUrl'] ) ? $attributes['primaryBtnUrl'] : '#page-2';
?>

<section class="section-dark py-section wp-block-inspect" data-wp-pattern="secure-centric/final-cta-band">
  <div class="site-container">
    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid var(--color-dark-line); border-radius: var(--radius-lg); padding: clamp(32px, 5vw, 64px); text-align: center; position: relative; overflow: hidden;">
      <span class="section-eyebrow text-cyan"><?php echo esc_html( $eyebrow ); ?></span>
      <h2 style="color: #fff; max-width: 720px; margin: 12px auto 16px;"><?php echo esc_html( $title ); ?></h2>
      <p style="color: var(--color-text-on-dark); font-size: 1.0625rem; max-width: 640px; margin: 0 auto 32px; line-height: 1.6;">
        <?php echo esc_html( $description ); ?>
      </p>

      <div style="display: flex; gap: 16px; justify-content: center; align-items: center; flex-wrap: wrap;">
        <a href="<?php echo esc_url( $primary_btn_url ); ?>" class="btn btn-primary" style="padding: 14px 32px; font-size: 1rem;">
          <?php echo esc_html( $primary_btn_text ); ?> &rarr;
        </a>
        <a href="tel:3234105941" class="btn btn-dark-outline" style="padding: 14px 28px;">
          📞 (323) 410-5941
        </a>
      </div>

      <div style="margin-top: 24px; font-size: 0.8125rem; color: var(--color-slate); display: flex; gap: 18px; justify-content: center; flex-wrap: wrap;">
        <span>🔒 Signed Bilateral NDA</span>
        <span>🛡️ Cyber AB RPO Credentialed</span>
        <span>📍 Nationwide Defense Subcontractor Coverage</span>
      </div>
    </div>
  </div>
</section>
