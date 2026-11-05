<?php
/**
 * Render Template for Testimonials (Carousel & Grid)
 *
 * @package SecureCentric
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$display_mode = ! empty( $attributes['displayMode'] ) ? $attributes['displayMode'] : 'carousel';
$eyebrow      = ! empty( $attributes['eyebrow'] ) ? $attributes['eyebrow'] : '// CLIENT TESTIMONIALS';
$title        = ! empty( $attributes['title'] ) ? $attributes['title'] : 'What Defense Contractors Say About Working With Us';

$testimonials = array(
    array(
        'no'       => '01',
        'name'     => 'Alex Liu',
        'role'     => 'IT Manager',
        'company'  => 'Tower Semiconductor',
        'quote'    => 'Secure-Centric gave us absolute clarity on what was inside our CUI boundary and what was not. We passed our official C3PAO Level 2 assessment on the first attempt with zero open items.',
        'initials' => 'AL',
    ),
    array(
        'no'       => '02',
        'name'     => 'Patrick Shaw',
        'role'     => 'Cyber Security Analyst',
        'company'  => 'Safran Federal Systems',
        'quote'    => 'Their team was on site at our facility within two weeks. They didn\'t hand us generic compliance templates—they helped configure our actual firewalls, SIEM, and author an ironclad SSP.',
        'initials' => 'PS',
    ),
    array(
        'no'       => '03',
        'name'     => 'Rafael Omar Lemus',
        'role'     => 'IT Director',
        'company'  => 'Goodwin & Associates',
        'quote'    => 'Most consultants sell managed IT products. Secure-Centric provided strictly independent advisory. They worked directly with our internal team and existing MSP without conflicts.',
        'initials' => 'ROL',
    ),
    array(
        'no'       => '04',
        'name'     => 'Regina Amosi',
        'role'     => 'CISO',
        'company'  => 'Tower Semiconductor',
        'quote'    => 'I would like to thank Secure-Centric and Desmond Thompson, who guided us through the preparation stages for the certification, even before the external assessment.',
        'initials' => 'RA',
    ),
    array(
        'no'       => '05',
        'name'     => 'Albert Leon',
        'role'     => 'CIO',
        'company'  => 'HRD Aero Systems',
        'quote'    => 'From scoping out shop-floor test equipment to submitting our SPRS score defense, Secure-Centric made what felt like an impossible 110-control standard manageable.',
        'initials' => 'AL',
    ),
);

function secure_centric_render_testimonial_card( $item, $idx ) {
    ?>
    <div class="testimonial-card" data-index="<?php echo (int) $idx; ?>">
      <div class="testimonial-card-header">
        <span class="testimonial-num"><?php echo esc_html( $item['no'] ); ?></span>
        <span class="testimonial-quote-icon" aria-hidden="true">&ldquo;</span>
      </div>
      <div class="testimonial-body">
        <p class="testimonial-quote-text"><?php echo esc_html( $item['quote'] ); ?></p>
      </div>
      <div class="testimonial-card-divider"></div>
      <div class="testimonial-footer-row">
        <div class="testimonial-avatar" aria-hidden="true"><?php echo esc_html( $item['initials'] ); ?></div>
        <div class="testimonial-author-meta">
          <div class="testimonial-author-name"><?php echo esc_html( $item['name'] ); ?></div>
          <div class="testimonial-author-role"><?php echo esc_html( $item['role'] . ', ' . $item['company'] ); ?></div>
          <a href="https://www.linkedin.com/company/secure-centric/" target="_blank" rel="noopener noreferrer" class="testimonial-linkedin-link" title="Shared publicly on LinkedIn" onclick="event.stopPropagation();">
            <svg class="linkedin-badge-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="16" height="16" rx="3" fill="#0A66C2"/>
              <path d="M4.6 6.3H2.5V13H4.6V6.3Z" fill="white"/>
              <path d="M3.55 5.4C4.24 5.4 4.8 4.84 4.8 4.15C4.8 3.46 4.24 2.9 3.55 2.9C2.86 2.9 2.3 3.46 2.3 4.15Z" fill="white"/>
              <path d="M8.1 6.3H6.1V13H8.1V9.5C8.1 7.6 10.5 7.4 10.5 9.5V13H12.6V8.6C12.6 5.2 8.7 5.3 8.1 6.9V6.3Z" fill="white"/>
            </svg>
            <span>Shared publicly on LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
    <?php
}
?>

<?php if ( 'grid' === $display_mode ) : ?>
  <section class="section-ice py-section wp-block-inspect" data-wp-pattern="secure-centric/testimonials-grid">
    <div class="site-container">
      <div class="section-heading-center" style="margin-bottom: 40px;">
        <span class="section-eyebrow"><?php echo esc_html( $eyebrow ); ?></span>
        <h2><?php echo esc_html( $title ); ?></h2>
        <p style="color: var(--color-slate); max-width: 600px; margin: 8px auto 0;">Real feedback from C-level executives and IT leadership across the defense industrial base.</p>
      </div>
      <div class="testimonials-static-grid">
        <?php foreach ( $testimonials as $idx => $t ) {
            secure_centric_render_testimonial_card( $t, $idx );
        } ?>
      </div>
    </div>
  </section>
<?php else : ?>
  <section class="section-ice py-section wp-block-inspect" id="testimonials-section">
    <div class="site-container">
      <div class="testimonials-header-row">
        <div>
          <span class="section-eyebrow"><?php echo esc_html( $eyebrow ); ?></span>
          <h2><?php echo esc_html( $title ); ?></h2>
        </div>
      </div>
    </div>

    <div class="testimonials-carousel-container" 
         onmouseenter="this.querySelector('.testimonials-carousel-track')?.classList.add('is-paused')" 
         onmouseleave="this.querySelector('.testimonials-carousel-track')?.classList.remove('is-paused')"
         onclick="this.querySelector('.testimonials-carousel-track')?.classList.toggle('is-paused')">
      <div class="testimonials-carousel-track" role="region" aria-label="Client Testimonials Carousel">
        <?php for ( $repeat = 0; $repeat < 3; $repeat++ ) : ?>
          <?php foreach ( $testimonials as $idx => $t ) {
              secure_centric_render_testimonial_card( $t, $idx );
          } ?>
        <?php endfor; ?>
      </div>
    </div>
  </section>
<?php endif; ?>
