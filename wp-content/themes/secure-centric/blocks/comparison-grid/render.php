<?php
/**
 * Render Template for Comparison Grid
 *
 * @package SecureCentric
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$eyebrow = ! empty( $attributes['eyebrow'] ) ? $attributes['eyebrow'] : '// APPROACH COMPARISON';
$title   = ! empty( $attributes['title'] ) ? $attributes['title'] : 'Three Ways Defense Subcontractors Approach CMMC';
?>

<section class="section-ice py-section wp-block-inspect" data-wp-pattern="secure-centric/comparison-table">
  <div class="site-container">
    <div class="section-heading-center" style="margin-bottom: 40px;">
      <span class="section-eyebrow"><?php echo esc_html( $eyebrow ); ?></span>
      <h2><?php echo esc_html( $title ); ?></h2>
      <p style="color: var(--color-slate); max-width: 640px; margin: 8px auto 0;">
        Why internal teams struggle with DIBCAC audits and where independent advisory creates true defensibility.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; align-items: stretch;">
      <!-- Option 1: DIY -->
      <div class="card card-white" style="padding: 32px; display: flex; flex-direction: column;">
        <span class="badge-pill" style="align-self: flex-start; margin-bottom: 16px;">Option 1</span>
        <h3 style="font-size: 1.25rem; margin-bottom: 12px; color: var(--color-navy);">DIY / In-House IT</h3>
        <p style="font-size: 0.9375rem; color: var(--color-body-text); margin-bottom: 20px;">
          Internal IT teams download templates and attempt to interpret all 110 NIST controls alone.
        </p>
        <div style="border-top: 1px solid var(--color-border); padding-top: 16px; margin-top: auto;">
          <div style="color: #F0445A; font-weight: 700; font-size: 0.875rem; margin-bottom: 6px;">❌ High Audit Failure Risk</div>
          <p style="font-size: 0.8125rem; color: var(--color-slate); line-height: 1.4; margin: 0;">
            Massive scope sprawl. Incomplete evidence packages fail official C3PAO audits on Day 1.
          </p>
        </div>
      </div>

      <!-- Option 2: Generic MSP -->
      <div class="card card-white" style="padding: 32px; display: flex; flex-direction: column;">
        <span class="badge-pill" style="align-self: flex-start; margin-bottom: 16px;">Option 2</span>
        <h3 style="font-size: 1.25rem; margin-bottom: 12px; color: var(--color-navy);">Generic Managed MSP</h3>
        <p style="font-size: 0.9375rem; color: var(--color-body-text); margin-bottom: 20px;">
          IT vendors sell bundled cloud licenses and automated compliance portal subscriptions.
        </p>
        <div style="border-top: 1px solid var(--color-border); padding-top: 16px; margin-top: auto;">
          <div style="color: #FFB020; font-weight: 700; font-size: 0.875rem; margin-bottom: 6px;">⚠️ Conflict of Interest</div>
          <p style="font-size: 0.8125rem; color: var(--color-slate); line-height: 1.4; margin: 0;">
            Vendor pushes expensive licenses rather than shrinking your enclave boundary.
          </p>
        </div>
      </div>

      <!-- Option 3: Secure-Centric RPO (Recommended) -->
      <div class="card card-white" style="padding: 32px; border: 2px solid var(--color-electric-blue); display: flex; flex-direction: column; position: relative;">
        <span class="badge-pill-cyan" style="align-self: flex-start; margin-bottom: 16px; background: rgba(47, 91, 255, 0.1); color: var(--color-electric-blue);">
          RECOMMENDED
        </span>
        <h3 style="font-size: 1.25rem; margin-bottom: 12px; color: var(--color-navy);">Secure-Centric RPO</h3>
        <p style="font-size: 0.9375rem; color: var(--color-body-text); margin-bottom: 20px;">
          Independent, certified Registered Practitioners with zero IT hardware/software sales conflicts.
        </p>
        <div style="border-top: 1px solid var(--color-border); padding-top: 16px; margin-top: auto;">
          <div style="color: #12B886; font-weight: 700; font-size: 0.875rem; margin-bottom: 6px;">✅ 100% First-Time Pass Record</div>
          <p style="font-size: 0.8125rem; color: var(--color-slate); line-height: 1.4; margin: 0;">
            Shrinks your CUI scope boundary on site, builds ironclad evidence, and sits with assessors.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
