<?php
/**
 * Render Template for Hero Block (Multi-Layout)
 *
 * @package SecureCentric
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$layout             = ! empty( $attributes['layout'] ) ? $attributes['layout'] : 'home';
$eyebrow            = ! empty( $attributes['eyebrow'] ) ? $attributes['eyebrow'] : '// DEFENSE CYBERSECURITY COMPLIANCE';
$title              = ! empty( $attributes['title'] ) ? $attributes['title'] : 'CMMC compliance for defense subcontractors, guided by a Cyber AB Registered Provider Organization';
$description        = ! empty( $attributes['description'] ) ? $attributes['description'] : 'We scope your Controlled Unclassified Information (CUI) boundary on site, eliminate compliance gaps, and build defensible evidence before your official C3PAO audit.';
$primary_btn_text   = ! empty( $attributes['primaryBtnText'] ) ? $attributes['primaryBtnText'] : 'Book a Scoping Call';
$primary_btn_url    = ! empty( $attributes['primaryBtnUrl'] ) ? $attributes['primaryBtnUrl'] : '#page-2';
$secondary_btn_text = ! empty( $attributes['secondaryBtnText'] ) ? $attributes['secondaryBtnText'] : 'Explore the 8-Step Process →';
$secondary_btn_url  = ! empty( $attributes['secondaryBtnUrl'] ) ? $attributes['secondaryBtnUrl'] : '#roadmap-section';
?>

<?php if ( 'service' === $layout ) : ?>
  <section class="section-dark hero-home py-section wp-block-inspect">
    <div class="site-container">
      <div class="hero-home-grid">
        <div class="hero-content">
          <span class="section-eyebrow text-cyan"><?php echo esc_html( $eyebrow ); ?></span>
          <h1 class="hero-title"><?php echo esc_html( $title ); ?></h1>
          <p class="hero-subtitle"><?php echo esc_html( $description ); ?></p>
          <div class="hero-cta-group">
            <a href="<?php echo esc_url( $primary_btn_url ); ?>" class="btn btn-primary"><?php echo esc_html( $primary_btn_text ); ?></a>
            <a href="<?php echo esc_url( $secondary_btn_url ); ?>" class="btn btn-dark-outline"><?php echo esc_html( $secondary_btn_text ); ?></a>
          </div>
        </div>
        <div class="hero-media">
          <div class="hero-lead-card">
            <div class="lead-card-header">
              <span class="badge-pill-cyan">AUDIT READY</span>
              <h4 style="color: #fff; margin-top: 10px;">Core Deliverables Included</h4>
            </div>
            <ul style="color: var(--color-text-on-dark); font-size: 0.9375rem; line-height: 1.8; margin: 16px 0; padding-left: 20px;">
              <li>Formal Boundary & Data Flow Diagram</li>
              <li>NIST SP 800-171 110-Control Evidence Matrix</li>
              <li>Auditor-Tested System Security Plan (SSP)</li>
              <li>Full DIBCAC / C3PAO Audit Defense On Site</li>
            </ul>
            <a href="<?php echo esc_url( $primary_btn_url ); ?>" class="btn btn-primary" style="width: 100%; justify-content: center;">
              Schedule Scoping Assessment &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
<?php else : ?>
  <!-- Home Layout -->
  <section class="section-dark hero-home py-section wp-block-inspect" data-wp-pattern="secure-centric/hero-home">
    <div class="site-container">
      <div class="hero-home-grid">
        <div class="hero-content">
          <span class="section-eyebrow text-cyan"><?php echo esc_html( $eyebrow ); ?></span>
          <h1 class="hero-title"><?php echo esc_html( $title ); ?></h1>
          <p class="hero-subtitle"><?php echo esc_html( $description ); ?></p>
          <div class="hero-cta-group">
            <a href="<?php echo esc_url( $primary_btn_url ); ?>" class="btn btn-primary"><?php echo esc_html( $primary_btn_text ); ?></a>
            <a href="<?php echo esc_url( $secondary_btn_url ); ?>" class="btn btn-dark-outline"><?php echo esc_html( $secondary_btn_text ); ?></a>
          </div>
        </div>
        <div class="hero-media">
          <div class="hero-lead-card">
            <div class="lead-card-header">
              <span class="badge-pill-cyan">5-MINUTE READINESS CHECK</span>
              <h4 style="color: #fff; margin-top: 10px;">Where does your defense business stand on CMMC?</h4>
            </div>
            <p style="color: var(--color-text-on-dark); font-size: 0.875rem; line-height: 1.5; margin-bottom: 20px;">
              Identify your CUI exposure, SPRS score deficit, and expected timeline in 4 questions.
            </p>
            <div class="mini-quiz-options">
              <div class="quiz-option" onclick="this.classList.toggle('selected')">
                <span>Do you process or store Controlled Unclassified Information (CUI)?</span>
                <span class="checkbox-circle"></span>
              </div>
              <div class="quiz-option" onclick="this.classList.toggle('selected')">
                <span>Do you have an active System Security Plan (SSP) and current SPRS score?</span>
                <span class="checkbox-circle"></span>
              </div>
            </div>
            <a href="#page-2" class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: 18px;">
              Get Custom CMMC Readiness Roadmap &rarr;
            </a>
            <div style="font-size: 0.75rem; color: var(--color-slate); text-align: center; margin-top: 10px;">
              🔒 Strictly confidential &bull; Bilateral NDA protected
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<?php endif; ?>
