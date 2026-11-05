<?php
/**
 * Render Template for Logo Marquee Block
 *
 * @package SecureCentric
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$title = ! empty( $attributes['title'] ) ? $attributes['title'] : 'TRUSTED BY DEFENSE INDUSTRIAL BASE CONTRACTORS & PRIME SUPPLIERS NATIONWIDE';

$logos = array(
    'Tower Semiconductor',
    'Safran Federal Systems',
    'Goodwin & Associates',
    'HRD Aero Systems',
    'Precision Aerospace',
    'Defense Dynamics',
    'Apex Federal Labs',
    'Vanguard Defense Tech',
);
?>

<section class="section-white py-section-sm wp-block-inspect" style="border-bottom: 1px solid var(--color-border); overflow: hidden;">
  <div class="site-container">
    <div style="font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: var(--color-slate); text-align: center; letter-spacing: 0.1em; margin-bottom: 24px;">
      <?php echo esc_html( $title ); ?>
    </div>
  </div>

  <div class="logo-marquee-wrap" style="display: flex; gap: 48px; width: max-content; animation: logoScroll 30s linear infinite;">
    <?php for ( $repeat = 0; $repeat < 3; $repeat++ ) : ?>
      <?php foreach ( $logos as $logo ) : ?>
        <div class="logo-item" style="font-family: var(--font-primary); font-weight: 800; font-size: 1.125rem; color: var(--color-slate); opacity: 0.75; letter-spacing: -0.02em; white-space: nowrap; display: flex; align-items: center; gap: 8px;">
          <span>⚡ <?php echo esc_html( $logo ); ?></span>
        </div>
      <?php endforeach; ?>
    <?php endfor; ?>
  </div>
</section>
