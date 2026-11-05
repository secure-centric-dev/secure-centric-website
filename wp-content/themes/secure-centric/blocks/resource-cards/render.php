<?php
/**
 * Render Template for Resource Cards Grid
 *
 * @package SecureCentric
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$eyebrow = ! empty( $attributes['eyebrow'] ) ? $attributes['eyebrow'] : '// COMPLIANCE KNOWLEDGE BASE';
$title   = ! empty( $attributes['title'] ) ? $attributes['title'] : 'Free Tools, Checklists & In-Depth CMMC Guides';

$resources = array(
    array(
        'tag'   => 'CHECKLIST & TEMPLATE',
        'title' => 'CMMC 2.0 Level 2 Compliance Checklist (110 Controls)',
        'desc'  => 'Every required practice mapped with objective assessment criteria, required artifacts, and interview questions.',
        'link'  => '#page-21',
        'read'  => '15 Min Read &bull; Excel/PDF Included',
    ),
    array(
        'tag'   => 'HANDBOOK & GUIDE',
        'title' => 'How to Detect Unmarked CUI in Aerospace & Defense Operations',
        'desc'  => 'Field guide for shop-floor supervisors, engineers, and IT staff to isolate unmarked technical drawings and defense data.',
        'link'  => '#page-22',
        'read'  => '18 Min Read &bull; Flowchart Included',
    ),
    array(
        'tag'   => 'READINESS ASSESSMENT',
        'title' => 'The CMMC Level 1 Basic Safeguarding Readiness Checklist',
        'desc'  => 'Practical implementation guidance for all 15 Level 1 FAR 52.204-21 controls for defense subcontractors.',
        'link'  => '#page-23',
        'read'  => '10 Min Read &bull; Self-Attestation Guide',
    ),
);
?>

<section class="section-ice py-section wp-block-inspect" data-wp-pattern="secure-centric/resource-cards">
  <div class="site-container">
    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 36px; flex-wrap: wrap; gap: 16px;">
      <div>
        <span class="section-eyebrow"><?php echo esc_html( $eyebrow ); ?></span>
        <h2><?php echo esc_html( $title ); ?></h2>
      </div>
      <a href="#page-12" class="text-link">Browse Full Knowledge Base &rarr;</a>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
      <?php foreach ( $resources as $res ) : ?>
        <div class="card card-white" style="padding: 28px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span class="badge-pill" style="margin-bottom: 12px; font-size: 0.6875rem; font-weight: 700; color: var(--color-electric-blue); background: rgba(47, 91, 255, 0.08);">
              <?php echo esc_html( $res['tag'] ); ?>
            </span>
            <h4 style="font-size: 1.125rem; margin-bottom: 10px; color: var(--color-navy); line-height: 1.4;">
              <a href="<?php echo esc_url( $res['link'] ); ?>" style="color: inherit; text-decoration: none;">
                <?php echo esc_html( $res['title'] ); ?>
              </a>
            </h4>
            <p style="font-size: 0.9375rem; color: var(--color-body-text); line-height: 1.5; margin-bottom: 20px;">
              <?php echo esc_html( $res['desc'] ); ?>
            </p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-border); padding-top: 14px; font-size: 0.8125rem; color: var(--color-slate);">
            <span><?php echo esc_html( $res['read'] ); ?></span>
            <a href="<?php echo esc_url( $res['link'] ); ?>" class="text-link" style="font-weight: 700;">Download &rarr;</a>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
